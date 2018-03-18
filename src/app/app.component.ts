import { Component } from '@angular/core';
export class Banda {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Mis bandas favoritas';
  banda: Banda = {
    id: 1,
    nombre: 'Heroes del silencio'
  };

}
