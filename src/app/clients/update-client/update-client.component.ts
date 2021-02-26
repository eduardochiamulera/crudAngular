import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client.model';
import { CidadeService } from 'src/app/services/cidade.service';
import { EstadoService } from 'src/app/services/estado.service';
import { Cidade } from 'src/app/model/cidade.model';
import { Estado } from 'src/app/model/estado.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {

  constructor(private clientService : ClientService, 
    private route : ActivatedRoute, 
    private router : Router,
    private cidadeService : CidadeService,
    private estadoService : EstadoService,
    private toastr : ToastrService) { }

  id : string;
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
  cidade : Cidade[];

  estado : Estado[] ;
  response : Client;

  options : any[] = [
    { id : "F", nome: 'Fisica'},
    { id : "J", nome: 'Juridica'}
  ];

  

  ngOnInit(): void {
    this.estadoService.getEstado().subscribe(res => {
      this.estado = res;
      this.estado.unshift(
        { id : '',sigla: '', nome : ''}
      )
    })
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(this.id).subscribe(res => {
      this.client = {
        nome: res.nome,
        bairro : res.bairro,
        celular : res.celular,
        cep : res.cep,
        cidadeId : res.cidadeId,
        complemento : res.complemento,
        cpfcnpj : res.cpfcnpj,
        email : res.email,
        endereco : res.email,
        estadoId : res.estadoId,
        numero : res.numero,
        telefone : res.telefone,
        tipoDocumento : res.tipoDocumento,
        id : res.id
      }

      if(this.client.cidadeId){
        this.cidadeService.getCidade(this.client.estadoId).subscribe(res => {
          this.cidade = (res);
          this.cidade.unshift(
            { id : '', nome: ''})
        });
      }
    });
  }

  getCidade(event){
    this.cidade = [];
    this.cidadeService.getCidade(event.target.value).subscribe(res => {
      this.cidade = res;
    })
  }
  
  update(){
    this.clientService.updateClient(this.id, this.client).subscribe(res => {
      this.toastr.success('Cliente atualizado com sucesso');
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
