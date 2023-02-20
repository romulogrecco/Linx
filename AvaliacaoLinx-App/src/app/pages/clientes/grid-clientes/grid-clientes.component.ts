import { Component, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteModel } from '../model/cliente.model';
import { ClientesService } from '../service/clientes.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientesComponent } from '../modal-clientes/modal-clientes.component';
import { MessageDialogComponent } from 'src/app/core/message-dialog/component/message-dialog.component';

@Component({
  selector: 'app-grid-clientes',
  templateUrl: './grid-clientes.component.html',
  styleUrls: ['./grid-clientes.component.css']
})
export class GridClientesComponent implements OnInit {

  dataSource: MatTableDataSource<ClienteModel>;

  constructor(private clienteService: ClientesService, private dialog: MatDialog) { }

  ngOnInit() {
    console.log("CHANGE:")
    this.obterClientes();
  }


  colunas: string[] = ['nome', 'cpf', 'cep', 'estado', 'cidade', 'bairro', 'logradouro', 'acoes'];
  

  obterClientes() {
    this.clienteService
    .obterTodos()
    .then((result) => {
      this.dataSource = new MatTableDataSource<ClienteModel>(result)
    })
    .catch((error) => {
      //Adicionar messageService
      console.log(error);
    })
  }

  abrirModalAdicionar(cliente?: ClienteModel) {
    const dialog = this.dialog.open(ModalClientesComponent, {
      data: cliente,
    })

    dialog.afterClosed().subscribe(() => {
        this.obterClientes();
    })
  }

  atualizar(cliente: ClienteModel) {
    this.abrirModalAdicionar(cliente)
  }

  remover(cliente: ClienteModel) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '400px',
      data: {
        dialogTitle: 'Confirmação',
        dialogType: 'confirm',
        dialogMessage: "Deseja remover o cliente?"
      }
    });
    

    return dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.clienteService
          .remover(cliente)
          .then(() => {
        this.obterClientes();
      })
      }
    })
  }
}
