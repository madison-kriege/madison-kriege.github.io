import { Component } from '@angular/core';
import { CompanyExperience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public experiences: CompanyExperience[] = [
    {
      jobTitle: "Software Developer",
      companyName: "Pearson",
      startDate: "Jul 2017",
      endDate: "Present",
      description: "Developing multiple web-based systems used for assessment management and administration",
      skills: ["Angular", "Java", "Postgres"]
    },
    {
      jobTitle: "Software Development Intern",
      companyName: "Buildertrend",
      startDate: "May 2019",
      endDate: "August 2019",
      description: "Converted a forms-based web application to ReactJS for a construction software management company",
      skills: ["ReactJS", "Java"]
    }
  ];
}
