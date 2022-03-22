import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectarUsuariosService {

  public dataEntry=[{name:"pollito", email:"lol",password:"123456789",direccion:"san carlos",ruta:"una ruta local x", aboutMe:"No me gustan los chayotes"},
  {name:"pollito2", email:"lol",password:"123456789",direccion:"Ecatepec de morelos",ruta:"una ruta local y",aboutMe:"Me gustan los gatitos"},
  {name:"pollito3", email:"lol",password:"123456789",direccion:"Toluca de lerdo",ruta:"una ruta local z",aboutMe:"Me gusta el pollito"}]

  public usuario:string | undefined;
  public password:string | undefined;
  public bandera:number =-1;
  public variableX:any |undefined;
  public cuantos:number | undefined;
  constructor() {

  }

  loginMe(usuario:string, password:string):any{
    //console.log(usuario,password);
    for (let entry of this.dataEntry) {
      //console.log(entry); // 1, "string", false
      if(entry.name==usuario){
          //console.log("Usuario encontrado");
          this.bandera=2;
          if(entry.password==password){
            //console.log("Has entrado");
            this.bandera=1;
            break;
          }
      }
    }
    switch(this.bandera){
      case -1:{
        return {status:"Usuario no encontrado",bandera:-1}
        break;
      }
      case 1:{
        return {status:"Has entrado",bandera:1}
        break;
      }

      case 2:{
        return {status:"Contraseña erronea",bandera:2}
      }
    }

  }

  registerMe(name:string, email:string,password:string,direccion:string, ruta:string,aboutMe:string):any{
//name:"pollito", email:"lol",password:"123456789",direccion:"san carlos",ruta:"una ruta local x", aboutMe:"No me gustan los chayotes
  this.variableX={name:name,email:email,password:password,direccion:direccion,ruta:ruta,aboutMe:aboutMe};  
  this.cuantos=this.dataEntry.length;
  this.dataEntry.push(this.variableX);
  //console.log(this.dataEntry);
  if(this.dataEntry.length>this.cuantos){
    return {status:'Registro exitoso'}
  }else{
    return {status:'No se guardo tu registro'}
  }
}

  
           



}
