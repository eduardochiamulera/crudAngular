import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';

const routes: Routes = [
  { path: '', component: ClientsComponent},
  { path: 'client/create', component: CreateClientComponent},
  { path: 'client/edit/:id', component: UpdateClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
