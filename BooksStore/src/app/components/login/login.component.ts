import { Component, } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup;
  obj: typeof Object = Object;
  registerForm: any;
  constructor(private userService: UserService) {

    let formGroupConfig = {
      UserName: new FormControl("UserName", this.createValidatorArr("UserName", 4, 15, /^[a-zA-Z]*$/)),
      Password: new FormControl("Password", this.createValidatorArr("password", 5, 10, /^[a-zA-Z0-9]*$/))
    };
    this.formGroup = new FormGroup(formGroupConfig);
  }
  submitLogin() {
    this.userService.login(this.formGroup.value);
  }
  createValidatorArr(cntName: string, min: number, max: number, reg: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<string>f.value.match(reg) ? cntName == 'password' ? { "val": `${cntName} must contains  english letters or numbers` } :
        { "val": `${cntName} must contains only english letters` } : null
    ];
  }
}











