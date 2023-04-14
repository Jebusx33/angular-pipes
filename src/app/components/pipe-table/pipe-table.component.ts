import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-table',
  templateUrl: './pipe-table.component.html',
  styleUrls: ['./pipe-table.component.css']
})
export class PipeTableComponent {
  nombre:any;
  nombre2:any;
  arregloNum:Number[]=[];
  Pi=Math.PI;
  porcentaje:any;
  salario:any;

 constructor(){
        this.nombre="Nombre";
        this.arregloNum=[1,2,3,4,5,6,7,8,9,10];
       this.porcentaje=0.234;
       this.salario=1354.56
       this.nombre2= "alBErto FerNando HerReRa jiMEnEz"
 }
heroe={
  nombre:"Logan",
  apodo:"Wolverine",
  edad:500,
  direccion:{
    lugar:"MansionX",
    abitacion:19
  }
};

valorPromesa = new Promise((resolve , reject)=>{
  setTimeout(()=>resolve('Llego la data!'),3500);
});
fecha = new Date();
video='6hWHWGJ1Gbw';
 activar:boolean =true;
}
