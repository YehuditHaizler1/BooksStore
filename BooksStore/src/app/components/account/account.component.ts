import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AccountComponent {

  isAnonymous: Boolean = false;
  constructor(private userService: UserService) {
    if (localStorage["user"])
      this.isAnonymous = true;
    this.userService.subAnonymous.subscribe(
      {

        next: (b: boolean) => {
          this.isAnonymous = b;
        }
      }
    );
  }

  deleteUserFromLocalStorage() {
    this.userService.deleteUserFromLocalStorage();

  }


}
