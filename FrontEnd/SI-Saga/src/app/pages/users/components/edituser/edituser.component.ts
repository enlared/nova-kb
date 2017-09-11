import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms'; 
import {Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ViewUsersService} from '../../../../theme/services/viewUsersService/viewusers.service';
import {Users} from '../../../../theme/services/viewUsersService/users';

@Component({
  selector: 'edituser',
  templateUrl: './edituser.html',
  styleUrls: ['./edituser.scss']
})
export class Edituser {
  roles: Role[];
  users: Users[];
  msgError: string;
  form: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private _roleService: RoleService, 
    private _viewUsersService: ViewUsersService,
    private route: ActivatedRoute, 
    private router: Router ) {
  
    this.loadRoles();
    this.loadUsers();
    this.createForm();
  
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

      updateUser(user: Users){
        if(!user) return;
        this._viewUsersService.putUser(user)
        .subscribe(
          rt => console.log(rt),
          er => console.log(er),
          () => this.goLista()
        );
          }
        
        cleanForm(){
        this.form.reset();
        
        }
        
        goLista(){
        
        let link = [];
        this.router.navigate(link);
        
        }
        
  loadRoles(){
    
    
    this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
        }
        loadUsers(){
          
          
          this._viewUsersService.getUsers().subscribe(users =>this.users = users, error => this.msgError = <any>error);
              }


}
