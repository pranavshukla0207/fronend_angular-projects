import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client-service';
import { APIResponse, IClientProject, IEmployee } from '../model/interface/role';
import { ClientModal } from '../model/class/ClientModal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './client-project.html',
  styleUrl: './client-project.scss'
})
export class ClientProject implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl('',[Validators.required,Validators.email]),
    clientId: new FormControl(''),
  });

  clientSrv = inject(ClientService);
  empList: IEmployee[] = [];
  clientList: ClientModal[] = [];
  projectList = signal<IClientProject[]>([]);

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployees();
    this.getAllClientProjects();
  }

  getAllEmployees() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponse) => {
      this.empList = res.data;
    });
  }

  getAllClients() {
    this.clientSrv.getAllClients().subscribe((res: APIResponse) => {
      this.clientList = res.data;
    });
  }

    getAllClientProjects() {
    this.clientSrv.getAllProjects().subscribe((res: APIResponse) => {
      this.projectList.set(res.data);
    });
  }
  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientSrv.addClientUpdate(formValue).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Created");
      }
      else {
        alert("Failed");
      }

    })
  }
}

