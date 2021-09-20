import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private rout : Router, private alertController : AlertController) {}
  ngOnInit(){
  }
  async iniciar(nombreUsuario : HTMLInputElement, contrasenia : HTMLInputElement,){
    const nomUsu = nombreUsuario.value;
    const conta = contrasenia.value;
    if (nomUsu == "alumno" && conta =="1234"){
      console.log("logueado")
      this.rout.navigate(['/pagina-principal'])
    }else{
      const alertElement = await this.alertController.create({
        header : "Usuario o contraseña incorrectos",
        message : "Inténtelo de nuevo. Si aún no puede iniciar sesión, comuníquese con su administrador del sistema.",
        buttons : [       
      {
        text:"Aceptar",
        handler:() =>{
        }
      }
    ]
      })
        await alertElement.present();
    }
  }
}
