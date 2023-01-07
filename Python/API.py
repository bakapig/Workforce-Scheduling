# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import pyodbc
import pandas as pd
import json

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resource={r"/.*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

cnxn_str = ("Driver={SQL Server Native Client 11.0};"
            "Server=localhost\SQLEXPRESS;"
            "Database=PROD;"
            "Trusted_Connection=yes;")
cnxn = pyodbc.connect(cnxn_str)
print('Connection is established.')


#  Cursor initialization
cursor = cnxn.cursor()

cursor.execute("SELECT * FROM employee WITH (nolock)")
rows = cursor.fetchall()

columnNames = [column[0] for column in cursor.description]
employee = []

for record in rows:
    employee.append( dict(zip(columnNames, record)))
    
employee_json = json.JSONDecoder().decode(json.dumps(employee))

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}
    
class employee(Resource):
    def get(self):
        return employee_json
    
    # def put(self):
    #     data = request.get_json(force=True)
    #     test = json_data['hello']
    #     return jsonify(t=test)
    

api.add_resource(HelloWorld, '/')
api.add_resource(employee, '/employee')

if __name__ == '__main__':
    app.run(debug=True)
    
cursor.close()