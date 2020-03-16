import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gob } from '../models/gob.model';
import { TypeModel} from '../models/type.model';
import DataSource from 'devextreme/data/data_source';


@Injectable({
  providedIn: 'root'
})
export class GobServices {

//   API_URI = 'http://localhost:3000/api';
   constructor(private http: HttpClient) { }

  getGob(){ 
      return this.http.get('https://api.datos.gob.mx/v1/data-core');
  }

  getCustomers(){
      return customers;
  }

  getTypes(){
      return types;
  }
}

let types : TypeModel[]=[{
    "id":"0",
    "name":"opc1"
},{
    "id":"1",
    "name":"opc2"
},{
    "id":"T",
    "name":"Todos"
}
]

let customers: Gob[] =[{
    "_id": "580a5394ac9b65f8a8494cc3",
    "query": "(count (db-find :datasets))",
    "value": 9092,
    "campo": "Número de conjuntos publicados en dgm",
    "date_insert": "2016-10-21T17:42:45.640Z",
    "created_at": 1470284178,
    "date_update": "2017-07-11T01:27:53.138Z"
    },
      {
    "_id": "580a5394ac9b65f8a8494cc4",
    "query": "(count (db-find :resources))",
    "value": 25846,
    "campo": "Número de recursos publicados en dgm",
    "date_insert": "2016-10-21T17:42:45.645Z",
    "created_at": 1470284186,
    "name": "recursos",
    "date_update": "2017-07-11T01:27:53.906Z"
    },
      {
    "_id": "580a5394ac9b65f8a8494cc5",
    "campo": "Dependencias publicando",
    "query": "(count (distinct (map :organization (db :resources))))",
    "date_insert": "2016-10-21T17:42:45.645Z",
    "value": 232,
    "created_at": 1470284403,
    "name": "dependencias",
    "date_update": "2017-07-11T01:27:54.655Z"
    }];




