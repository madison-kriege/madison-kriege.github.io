import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent{
  public name: String = "Madison Kriege";
  public occupation: String = "Software Developer";
}
