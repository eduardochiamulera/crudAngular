import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado  } from '../model/estado.model';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EstadoService {  
  
    constructor(private http: HttpClient) { }  
    baseUrl: string = 'https://localhost:44330/Estado';  
   
                                                                                                                                                                                     
      headers: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
      };
     

    getEstado() : Observable<Estado[]> {
      const result = this.http.get<Estado[]>(this.baseUrl, {headers : this.headers});  
      return result;
    }
  }  