import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms'; 
import {Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewUsersService} from '../../../../theme/services/viewUsersService/viewusers.service';

@Component({
  selector: 'newuser',
  styleUrls: ['./newuser.scss'],
  templateUrl: './newuser.html',
})
export class Newuser {

  form: FormGroup;

  roles: Role[];
  msgError: string;
  constructor(private fb: FormBuilder, 
    private _roleService: RoleService, 
    private _viewUsersService: ViewUsersService,
    private route: ActivatedRoute, 
    private router: Router ) {

    this.createForm();
    this.loadRoles();
 
}
ngOnitInit(){
  let id = this.route.snapshot.params['id'];
  if (!id) return;
  
  console.log(id);
  
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


  saveUser(){
    this._viewUsersService.addUser(this.form.value)
    .subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () => console.log('Terminado')
    );
    
    
    }

loadRoles(){
  
  
  this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
      }

}
