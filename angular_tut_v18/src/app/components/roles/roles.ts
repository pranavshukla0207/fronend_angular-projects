import { Component, OnInit, inject } from '@angular/core';
import { IRole } from '../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res: any) => {
      this.roles = res.data;
    })

  }
}
