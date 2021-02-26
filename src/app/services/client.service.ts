import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseClients, Client } from '../model/client.model';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClientService {  
  
    constructor(private http: HttpClient) { }  
    baseUrl: string = 'https://localhost:44330/Cliente';  
   
                                                                                                                                                                                     
      headers: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
      };
    
    getClients() : Observable<Client[]> {
      const result = this.http.get<Client[]>(this.baseUrl, {headers : this.headers});  
      return result;
    }  

    getClient(id : string) : Observable<Client> {
      const _url = `${this.baseUrl}/detail?id=${id}`
      const result = this.http.get<Client>(_url, {headers : this.headers});  
      return result;
    }

    createClient(client: Client) : Observable<Client> {  
      return this.http.post<Client>(this.baseUrl, client, {headers : this.headers});  
    }  
 
    updateClient(id : string, client: Client) : Observable<Client> {
      const _url = `${this.baseUrl}?id=${id}`  
      return this.http.put<Client>(_url, client, {headers : this.headers});  
    }  

    deleteClient(id : string) : Observable<any> {
      const _url = `${this.baseUrl}?id=${id}`  
      return this.http.delete<any>(_url, {headers : this.headers});  
    }  
  }  