import { Component,  } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent   {
  isAnonymous: boolean = false;
  user = new User();
  constructor(private userService: UserService) {
    this.readUserFromLocalStorage();
    this.userService.subAnonymous.subscribe(
      {

        next: (b: boolean) => {
          this.isAnonymous = b;
          this.readUserFromLocalStorage();
        }
      }
    );
  }
  readUserFromLocalStorage() {
    if (localStorage["user"]) {
      this.isAnonymous = true;
      this.user = JSON.parse(localStorage["user"]);
    }
    else {
      this.user.FirstName = "guest";
      this.user.LastName = "";
      this.user.profilePicture = "https://www.drupal.org/files/profile_default.jpg";
    }
  }




}
