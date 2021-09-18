import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private rout : Router,) {}
  ngOnInit(){
  }
  iniciar(nombreUsuario : HTMLInputElement, contrasenia : HTMLInputElement,){
    const nomUsu = nombreUsuario.value;
    const conta = contrasenia.value;
    if (nomUsu == "1" && conta =="1"){
      console.log("logueado")
      this.rout.navigate(['/pagina-principal'])
    }else{
      console.log("Error")
      alert("ERROR")
    }
  }
}
