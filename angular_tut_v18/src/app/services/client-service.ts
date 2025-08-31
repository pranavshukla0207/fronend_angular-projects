import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModal } from '../components/model/class/ClientModal';
import { environment } from '../../environments/environment.development';
import { APIResponse } from '../components/model/interface/role';


@Injectable({
  providedIn: 'root'
})
export class ClientService {


  http = inject(HttpClient);

  getAllEmployee(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + 'GetAllEmployee');
  }

  getAllClients(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + 'GetAllClients');
  }

  addUpdate(object: ClientModal): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + 'AddUpdateClient', object);
  }

  deleteClientById(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + 'DeleteClientByClientId?clientId=' + id);
  }

  addClientUpdate(obj: ClientModal): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + 'AddUpdateClientProject', obj);
  }

}
