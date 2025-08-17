import { Component, inject, OnInit } from '@angular/core';
import { ClientModal } from '../model/class/ClientModal';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client-service';
import { APIResponse } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule,CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.scss'
})
export class Client implements OnInit {

  clientObj: ClientModal = new ClientModal();
  clients: ClientModal[] = [];
  clientService = inject(ClientService);

  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Success');
        this.loadClient();
        this.clientObj = new ClientModal();
      }
      else {
        alert('Error: ' + res.message);
      }
    })
  }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponse) => {
      this.clients = res.data;
    })

  }

  onDeleteClient(id: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponse) => {
        if (res.result) {
          alert('Client deleted successfully');
          this.loadClient();
        } else {
          alert('Error: ' + res.message);
        }
      });
    }
  }

  onEditClient(client: ClientModal) {
    this.clientObj = { ...client }; 
  }
}
