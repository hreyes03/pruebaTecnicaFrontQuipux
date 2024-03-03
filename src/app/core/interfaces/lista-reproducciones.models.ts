import { ICanciones } from "./canciones.model";

export interface IListaReproducciones {
    nombre: String;
    descripcion: String;    
    canciones:ICanciones[];
}