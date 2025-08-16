import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master-service';
import { APIResponse, IDesignation } from '../model/interface/role';


@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.scss'
})
export class Designation implements OnInit {

  masterService = inject(MasterService)
  designations: IDesignation[] =[];
  isLoader: boolean = true;

   ngOnInit() {
    this.masterService.getAllDesignations().subscribe((res: APIResponse) => {
      this.designations = res.data;
      this.isLoader = false;
    }, error => {
      alert('Error fetching designations: '+error.message)
      this.isLoader = false;});
  }

}
