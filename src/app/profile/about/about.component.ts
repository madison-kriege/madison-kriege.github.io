import { Component } from '@angular/core';
import { About } from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public pageHeaders: String[] = ["About", "Basic Information"];
  public basicInfoHeaders: String[] = ["Date of Birth", "Email", "Location", "Language"];
  public aboutMe: About = {
    introduction: "Hi, I'm Madison Kriege!",
    bio: "Developer inspired to help others pursue their passions through software that is accessible and innovative—a long-term goal of assisting students in growing through STEM education and leadership opportunities.",
    strengthStatement: "Strengths: Restorative, Futuristic, Significance, Relator, and Responsibility",
    dateOfBirth: "July 07, 1998",
    email: "kriege.madison@gmail.com",
    location: "Iowa City, Iowa",
    language: "English"
  };
}
