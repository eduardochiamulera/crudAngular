import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade  } from '../model/cidade.model';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CidadeService {  
  
    constructor(private http: HttpClient) { }  
    baseUrl: string = 'https://localhost:44330/Cidade?estadoid=';  
   
                                                                                                                                                                                     
      headers: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
      };
     

    getCidade(id : string) : Observable<Cidade[]> {
      const _url = `${this.baseUrl}${id}`
      const result = this.http.get<Cidade[]>(_url, {headers : this.headers});  
      return result;
    }
  }  