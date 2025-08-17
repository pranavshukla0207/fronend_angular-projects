import { Component, OnInit, inject } from '@angular/core';
import { APIResponse, IRole } from '../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.scss'
})
export class Roles implements OnInit {

  http = inject(HttpClient);
  roles: IRole[] = [];

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<APIResponse>(environment.API_URL+'GetAllRoles').subscribe((res: APIResponse) => {
      this.roles = res.data;
    })

  }
}
