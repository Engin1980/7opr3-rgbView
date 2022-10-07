import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rgb-view';

  valueR = 50;
  valueG = 100;
  valueB = 150;

  getRgbCode():string{
    const ret = "rgb(" + this.valueR + ", " + this.valueG + ", " + this.valueB + ")";
    return ret
  }
}
