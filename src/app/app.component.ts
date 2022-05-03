import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [  //declaracion del div en el que se va a actiar la animacion, rodea al router outlet
      transition('* <=> *', [ //Transicion en la que se va a activar "*<=>*"
        query(
          ':enter, :leave',
          [style({ position: 'fixed', width:'100%'  })],
          { optional: true }
        ),
       group([query( //grupo de animaciones que suceden 
          ':leave', //se activa cuando...
           [style({ transform: 'translateX(0%)'}), 
            animate('0.5s ease-in-out', //tipo de animacion y duracion 
            style({ transform: 'translateX(-100%)' }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ transform: 'translateX(100%)' }),
             animate('0.5s ease-in-out', 
             style({ transform: 'translateX(0%)' }))],
          { optional: true }
        )]) 
      ])
    ]),
    
      ] // register the animations
    
    })
    export class AppComponent { }
