import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../components/model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  http = inject(HttpClient);

  getAllDesignations(): Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL+'GetAllDesignation')
  }

}
