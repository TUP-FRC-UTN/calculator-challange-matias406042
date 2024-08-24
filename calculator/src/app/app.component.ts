import { Component, input, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraOperadoresComponent } from './calculadora-operadores/calculadora-operadores.component';
import { rmSync } from 'fs';
import { parse } from 'path';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraOperadoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

  title = 'calculator';

  numero1 : number=0
  numero2 : number=0
  resultado : number = 0


  
  cargarN1(n1:any){

    this.numero1 = parseFloat(n1);
  }
  cargarN2(n2:any){

    this.numero2 = parseFloat(n2);
  }
  operar(operador:string){
    switch (operador) {
      case "/":
          this.resultado = this.numero1 / this.numero2
          break;
      case "*":
        this.resultado = this.numero1*this.numero2
          break;
      case "+":
          this.resultado = this.numero1+this.numero2
          break;
      case "-":
          this.resultado = this.numero1-this.numero2
          break;
      case "raiz":
          this.resultado = Math.pow(this.numero1,1/this.numero2)
          break;
      case "potencia":
          this.resultado = Math.pow(this.numero1,this.numero2)
          break;    
      default:
          this.resultado = 0

  }

  }



}
