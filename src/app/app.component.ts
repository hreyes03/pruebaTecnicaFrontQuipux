import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListsService } from './core/services/lists.service';
import { IListaReproducciones } from './core/interfaces/lista-reproducciones.models';
import { FormsModule } from '@angular/forms';
import { ICanciones } from './core/interfaces/canciones.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pruebaTecnicaFrontQuipux';
  private _listService = inject(ListsService);

  lista: IListaReproducciones = {
    nombre: '',
    descripcion: '',
    canciones: [
      {
        titulo: '',
        artista: '',
        album: '',
        anno: '',
        genero: ''
      }
    ]
  };

  cancion: ICanciones = {
    titulo: '',
    artista: '',
    album: '',
    anno: '',
    genero: ''
  }

  listasReproducciones?: IListaReproducciones[];
  listaReproduccion!: String;
  detalle:any;

  constructor() {
  }

  ngOnInit(): void {
    this.listasCanciones();
  }

  agregarCancion() {
    this.lista.canciones.push(this.cancion);
  }

  eliminarCancion(index: number) {
    this.lista.canciones.splice(index, 1);
  }

  listasCanciones() {
    this._listService.listarListaReproducciones()
      .subscribe((data: IListaReproducciones[]) => {
        this.listasReproducciones = data;
        console.log('log-->', this.listasReproducciones);
      });
  }

  guardarListaReproducciones() {
    this._listService.guardarListaReproducciones(this.lista)
      .subscribe(data => {
        console.log(data);
        this.listasCanciones();
      });
  }

  eliminarListaReproduccion(id: String) {
    this._listService.eliminarListaReproduccion(id)
      .subscribe(data => {
        this.listasCanciones();
      });
  }

  buscarListaReproduccion() {
    this._listService.buscarListaReproduccion(this.listaReproduccion)
      .subscribe(data => {
        this.detalle = data;
      });
  }
}
