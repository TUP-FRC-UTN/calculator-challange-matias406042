import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-operadores',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-operadores.component.html',
  styleUrl: './calculadora-operadores.component.css'
})
export class CalculadoraOperadoresComponent {
  @Output() operadorSeleccionado = new EventEmitter<string>();
  @Output() n1Cargado = new EventEmitter<number>();
  @Output() n2Cargado = new EventEmitter<number>();
  @Input() respuesta: number=0
  n1 : number=0
  n2 : number =0
  
  enviarOperador(operador : string){
    this.n1Cargado.emit(this.n1)
    this.n2Cargado.emit(this.n2)
    this.operadorSeleccionado.emit(operador)

  }

  
}
