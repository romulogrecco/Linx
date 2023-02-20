import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteModel } from '../model/cliente.model';
import { ClientesService } from '../service/clientes.service';

@Component({
  selector: 'app-modal-clientes',
  templateUrl: './modal-clientes.component.html',
  styleUrls: ['./modal-clientes.component.css']
})
export class ModalClientesComponent implements OnInit {
  formGroup: FormGroup;
  clienteModel: ClienteModel;
  

  constructor(
    private dialogRef: MatDialogRef<ModalClientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteModel,
    private clienteService: ClientesService
  ) { }

  ngOnInit() {
    this.clienteModel = new ClienteModel();
    this.initFormGroup(this.data);
  }

  initFormGroup(cliente: ClienteModel) {
    this.formGroup = new FormGroup({
      nome: new FormControl(cliente?.nome, [Validators.required] ),
      cpf: new FormControl(cliente?.cpf, [Validators.required] ),
      cep: new FormControl(cliente?.cep, [Validators.required] ),
      logradouro: new FormControl(cliente?.logradouro, [Validators.required] ),
      bairro: new FormControl(cliente?.bairro, [Validators.required] ),
      cidade: new FormControl(cliente?.cidade, [Validators.required] ),
      estado: new FormControl(cliente?.estado, [Validators.required] )
    });
  }

  close() {

  }

  salvar() {
    debugger
    this.clienteModel.id = this.data?.id;
    this.clienteModel.nome = this.formGroup.value?.nome;
    this.clienteModel.cpf = this.formGroup.value?.cpf;
    this.clienteModel.cep = this.formGroup.value?.cep;
    this.clienteModel.logradouro = this.formGroup.value?.logradouro;
    this.clienteModel.bairro = this.formGroup.value?.bairro;
    this.clienteModel.cidade = this.formGroup.value?.cidade;
    this.clienteModel.estado = this.formGroup.value?.estado;

    if (this.data) {
      this.clienteService
      .atualizar(this.clienteModel)
      .then((result) => {
        this.dialogRef.close(true);
      })
    } else {
      this.clienteService
      .inserir(this.clienteModel)
      .then((result) => {
        this.dialogRef.close(true);
      })
    }


    
  }

}
