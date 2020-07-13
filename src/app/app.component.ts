import {Component, HostListener} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = '';

  constructor(){}

  mensaje(){
    window.parent.postMessage({name: this.nombre}, '*');
  }

  @HostListener('window:message', ['$event'])
  onPostMessage(event) {
    console.log('evento de mensaje recibido: ', event);
  }
}
