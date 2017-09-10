import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {Role} from '../../../../theme/services/roleService/role';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'newuser',
  styleUrls: ['./newuser.scss'],
  templateUrl: './newuser.html',
})
export class Newuser {


  roles: Role[];
  msgError: string;
  constructor(private _roleService : RoleService ) {

    this.loadRoles();
 
}
loadRoles(){
  
  
  this._roleService.getRole().subscribe(roles =>this.roles = roles, error => this.msgError = <any>error);
      }

}
