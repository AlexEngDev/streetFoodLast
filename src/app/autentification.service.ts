import { Injectable } from '@angular/core';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  constructor(private userServ: UtentiService) { }

  autorizzato: boolean = false;

  checkRole(){
    const roleUserLogged = this.userServ.getUserRole("Anna");
    if(roleUserLogged === "Admin"){
        return true;
      }else{
        return false;
      }
    }




}
