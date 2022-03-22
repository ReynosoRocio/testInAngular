import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { ConectarUsuariosService } from 'src/app/services/conectar-usuarios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:  [ ConectarUsuariosService ]
})


export class RegistroComponent implements OnInit {

  constructor(private ConectarUsuariosServic:ConectarUsuariosService,private route:Router,private toastadito:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Submitted', form);
    console.log(form.form.value);

    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    
    }else{
      //name:"pollito", email:"lol",password:"123456789",direccion:"san carlos",ruta:"una ruta local x", aboutMe:"No me gustan los chayotes
        if(this.ConectarUsuariosServic.registerMe(form.form.value.name,form.form.value.email,form.form.value.password,form.form.value.direccion,form.form.value.foto, form.form.value.aboutMe).status=='Registro exitoso'){
          this.toastadito.success('Bienvenid@!', '¡Te has registrado!');
          this.route.navigate(['/login']);

        }else{
          form.form.reset;
          this.toastadito.error('No has podido registrarte','¡El registro a fallado!');

        }


    }
  }
}
