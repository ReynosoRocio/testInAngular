import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConectarUsuariosService } from 'src/app/services/conectar-usuarios.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:  [ ConectarUsuariosService ]

})
export class LoginComponent implements OnInit {
  token: string|undefined;
  constructor(private ConectarUsuariosServic:ConectarUsuariosService,private route:Router, private toastadito:ToastrService) { 
    this.token = undefined;
  }
 /* constructor(private modalService: NgbModal) { 
    this.token = undefined;
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
  }*/
  ngOnInit(): void {
    console.debug(`Token [${this.token}] generated`);
  }


  //onSubmit() {
  //  console.log('Submitted');
  //}

  onSubmit(form: NgForm) {
    console.log('Submitted', form);
    console.log(form.form.value);

    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }else{
      //Si el form es valido entonces
      var valor= this.ConectarUsuariosServic.loginMe(form.form.value.usuario,form.form.value.password).bandera;

      if(valor==1){
        //Entrar
        this.toastadito.success('Bienvenid@!', '¡Has ingresado!');
        this.route.navigate(['/tweets']);
      
      }else{
        //Enviar mensaje de error correspondiente
          valor==-1?this.toastadito.error('No has podido ingresar','Usuario no encontrado'):this.toastadito.error('No has podido ingresar','Contraseña equivocada');
    }
    


  }

  }
}
