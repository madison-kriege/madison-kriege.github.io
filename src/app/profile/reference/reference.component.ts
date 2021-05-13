import { Component } from '@angular/core';
import { Reference } from './reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {
  public pageHeader: String = "References";
  public references: Reference[] = [
    {
      name: "Name",
      position: "Position",
      company: "Company",
      reference: "Text"
    },
    {
      name: "Name",
      position: "Position",
      company: "Company",
      reference: "Text"
    }
  ];
}
