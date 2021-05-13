import { Component } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public pageHeader: String = "Contact Me";
  public tableHeaders: String[] = ["Leave Me a Message", "Other Ways to Reach Me"];
  public submitTitle: String = "Send";
  public methodsOfCommunication: String[] = [
    "kriege.madison@gmail.com",
    "319-431-6239"
  ];
  snotifyConfig = environment.snotifyConfig;
  model: any = {};

  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService
  ) { }

  contact() {
    this.profile.contactus(this.model).subscribe(data => {
      if (data.status) {
        this.snotify.success(data.message, 'Success', this.snotifyConfig);
      } else {
        this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
      }
    }, err => {
      this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
    });
  }
}
