import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IListaReproducciones } from '../interfaces/lista-reproducciones.models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  
  private url = environment.url+ '/lists';
  private readonly _http = inject(HttpClient);

  constructor() { }

  guardarListaReproducciones(ListaReproduccion:IListaReproducciones){
    return this._http.post(this.url,ListaReproduccion);
  }

  listarListaReproducciones():Observable<any>{
    return this._http.get(this.url);
  }
  
  eliminarListaReproduccion(id:String){
    return this._http.delete(`${this.url}/${id}`);
  }

  buscarListaReproduccion(id:String){
    return this._http.get(`${this.url}/${id}`,{responseType:'text'});
  }
}
