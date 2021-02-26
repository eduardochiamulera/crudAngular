import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';
import { CidadeService } from 'src/app/services/cidade.service';
import { EstadoService } from 'src/app/services/estado.service';
import { Cidade } from 'src/app/model/cidade.model';
import { Estado } from 'src/app/model/estado.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  options : any[] = [
    { id : "F", nome: 'Fisica'},
    { id : "J", nome: 'Juridica'}
  ];
  
  cidade : Cidade[];

  estado : Estado[];

  client : Client = {
    nome : '',
    tipoDocumento : 'F',
    cpfcnpj : '',
    cep : '',
    endereco : '',
    numero : '',
    complemento : '',
    bairro : '',
    cidadeId : '',
    estadoId : '',
    telefone : '',
    celular : '',
    email : '',
  }
  response : Client;
  constructor(private clientService: ClientService, 
    private router : Router, 
    private cidadeService : CidadeService,
    private estadoService : EstadoService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.estadoService.getEstado().subscribe(res => {
      this.estado = res;
      this.estado.unshift(
        { id : '',sigla: '', nome : ''}
      )
    })
  }

  getCidade(event){
    this.cidade = [];
    this.cidadeService.getCidade(event.target.value).subscribe(res => {
      this.cidade = res;
      this.cidade.unshift(
        { id : '', nome: ''})
    })
  }

  save(){
    this.clientService.createClient(this.client).subscribe(res => {
      this.response = res;
      this.toastr.success('Cliente Cadastrado com sucesso');
      this.router.navigateByUrl('/')
    },
    error => {
      const errors = JSON.parse(error.error);          
      errors.innerMessage.forEach((element, index) => {
        this.toastr.error(element.Message);
      })
    });
  }

  cancel(){
    this.router.navigateByUrl('/')
  }

}
