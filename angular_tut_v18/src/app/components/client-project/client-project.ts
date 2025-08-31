import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client-service';
import { APIResponse, IEmployee } from '../model/interface/role';
import { ClientModal } from '../model/class/ClientModal';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
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

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEmployees();
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

