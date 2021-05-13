import { Component } from '@angular/core';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public pageHeader: String = "Education";
  public education: Education[] = [
    {
      startDate: "2012",
      endDate: "2016",
      degree: "High School",
      university: "Linn-Mar High School",
      department: "High School"
    },
    {
      startDate: "2016",
      endDate: "2020",
      degree: "Bachelor's Degree",
      university: "Iowa State University",
      department: "College of Engineering",
      notes:["Major: Computer Engineering", "Emphasis: Software Engineering"]
    },
    {
      startDate: "2020",
      endDate: "Present",
      degree: "Master's Degree",
      university: "Texas Tech University",
      department: "Edward E. Whitacre Jr. College of Engineering",
      notes:["Major: Software Engineering"]
    }
  ];
}
