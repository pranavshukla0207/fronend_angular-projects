import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../components/model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  http = inject(HttpClient);

  getAllDesignations(): Observable<APIResponse>{
    return this.http.get<APIResponse>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation')
  }

}
