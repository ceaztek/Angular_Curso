import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {


  heroes: string[] = ['Spiderman','Hulk','Capitan America','Ironman','Thor'];
  heroeBorrado: string = '';


  borrarHeroe() {

    this.heroeBorrado  = this.heroes.shift() || '';
    
    }

    



  }




