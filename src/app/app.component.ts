import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre:string = 'Juan Antonio Soto Cabrera';
  nombre2:string = 'kiara mirelli oyola espinoza';
  arreglo:number[] = [1,2,3,4,5,6,7,8,9];
  PI:number = Math.PI;
  porcentaje: number = 0.188;
  salario: number = 1234.5;
  heroe: object = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: '500'
  }
  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('llego la data');
    }, 3000);
  });
  fecha = new Date();
  idioma: string = 'en';
  url: string = 'https://www.youtube.com/embed/Hc2P2do4MLc';
  activar: boolean = true;
}
