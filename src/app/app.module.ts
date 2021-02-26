import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CreateClientComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
