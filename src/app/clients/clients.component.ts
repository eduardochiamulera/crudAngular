import { Component, OnInit, ViewChild  } from '@angular/core';
import { Client, ResponseClients } from '../model/client.model';
import { ClientService } from '../services/client.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;
  closeResult: string;  
  responseClient : Client[];
  client : Client;
  constructor(private clientService : ClientService, 
    private modalService: BsModalService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      res => this.responseClient = res);
      console.log(this.responseClient);
  }

  onDelete(client){
    this.client = client;
   this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete(){
    this.clientService.deleteClient(this.client.id).subscribe(res => {   
      window.location.reload();
      this.toastr.show(`Deletado com sucesso`);
    },
    error => {
      const errors = JSON.parse(error.error);          
      errors.innerMessage.forEach((element, index) => {
        this.toastr.error(element.Message);
      })
    });
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }


}
