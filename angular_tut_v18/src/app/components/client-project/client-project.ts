import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.html',
  styleUrl: './client-project.scss'
})
export class ClientProject implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  ngOnInit(): void {

  }
}
