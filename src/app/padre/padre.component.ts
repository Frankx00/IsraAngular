import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {
  metodoClick() {
    //El siguiente codigo es para aque se muestre una ventana emregnte en el navegador
    alert('Hola Padre')
  }

}
