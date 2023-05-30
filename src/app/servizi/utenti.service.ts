import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { }

  listaUtenti: Utente[] = [
    {
      id: 0,
      username: "Dario",
      password: "1234",
      role: "Admin"
    },
    {
      id: 1,
      username: "Anna",
      password: "asdfg",
      role: "Base"
    }
  ];

  getUserRole(username: string){
    const utente = this.listaUtenti.find(
      (utenteTrovato) =>{
        return utenteTrovato.username === username;
      }
    )
      if(utente){
      return utente.role;
     }else{
      return "Base";
    }
  }


}
