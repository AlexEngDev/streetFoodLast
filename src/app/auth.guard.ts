import { CanActivateFn, Router } from '@angular/router';
import { AutentificationService } from './autentification.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AutentificationService);
  const router = inject(Router);



  if(authService.checkRole()){
    //se checkRole() è true mi permetti di passare con return true
    return true;
  }else{
    //il return false non mi fa accedere alla rotta
    // return false;
    //console.log("Mi dispiace non sei autorizzato");
    return router.navigate(['/auth']);
  }
};
