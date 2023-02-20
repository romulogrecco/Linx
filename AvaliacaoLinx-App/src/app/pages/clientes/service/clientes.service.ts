import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequestService } from 'src/app/core/base-request.service';
import { ClienteModel } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService extends BaseRequestService {

constructor(protected http: HttpClient) {
    super(http);
    this.routeBase = 'cliente'
 }

 public obterTodos() : Promise<ClienteModel[]> {
    return this.get(`${this.routeBase}`)
 }

 public inserir(request: ClienteModel) : Promise<boolean> {
    return this.post(`${this.routeBase}`, request) 
 }

 public atualizar(request: ClienteModel) : Promise<boolean> {
  return this.put(`${this.routeBase}`, request) 
}

 public remover(request: ClienteModel) : Promise<boolean> {
    return this.delete(`${this.routeBase}`, request);
 }
}
