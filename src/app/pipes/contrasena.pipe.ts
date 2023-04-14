import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean=true): string {
    value = value.toLowerCase()
    let nombres= value.split("*");
    if(activar){
      let salida:string=""
     for (let i = 0; i < value.length; i++) {
      salida += "*";
     }
     return salida
   }else{
     return value
   }
 }


 /* transform(value: string, todas:boolean=false): string {
     value = value.toLowerCase()
     let nombres= value.split("*");
     if(todas){
      for (let i in nombres) {
       nombres[i] = nombres[i][0].toLowerCase().replace(/[a-z]/,'*******') ;
      }
    }else{
      nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substring(1);
    }
     return nombres.join(" ");
  }*/

}
