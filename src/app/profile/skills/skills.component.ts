import { Component } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
public skills: Skill[] = [
  {
    name: "Angular",
    progress: 80
  },
  {
    name: "React",
    progress: 60
  },
  {
    name: "Java",
    progress: 70
  },
  {
    name: "Postgres",
    progress: 45
  }
];
}
