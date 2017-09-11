import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms'; 

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
  
    name : '',
    lastname: '',
  
    nameuser: '',
        idnrole: '',
        email: '',
  
  });
  
  
  }

loadRoles(){
  
  
  this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
      }

}
