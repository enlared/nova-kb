import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms'; 
import {Validators } from '@angular/forms';
@Component({
  selector: 'newuser',
  styleUrls: ['./newuser.scss'],
  templateUrl: './newuser.html',
})
export class Newuser {

  form: FormGroup;

  roles: Role[];
  msgError: string;
  constructor(private fb: FormBuilder, private _roleService : RoleService ) {
    this.createForm();
    this.loadRoles();
 
}

createForm(){
  this.form = this.fb.group({
  
    name : ['', Validators.compose([
  Validators.required,
  Validators.maxLength(20),
  Validators.minLength(3),
  
    ])],
    lastname: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      
        ])],
  
    nameuser: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
      
        ])],
        idnrole: '',
        email: ['', Validators.compose([
          Validators.required,
          Validators.email,
            ])],
  
  });
  
  
  }

loadRoles(){
  
  
  this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
      }

}
