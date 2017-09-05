import {Component} from '@angular/core';
import { IdUsersService } from '../../../../theme/services/idUsersService/idusers.service';
import {ViewUsersService} from '../../../../theme/services/viewUsersService/viewusers.service';
import {RoleService} from '../../../../theme/services/roleService/role.service';

@Component({
  selector: 'edituser',
  templateUrl: './edituser.html',
  styleUrls: ['./edituser.scss']
})
export class Edituser {
  viewUsersTableData:Array<any>;
  idUsersTableData:Array<any>;
  roleTableData:Array<any>;
  constructor(private _viewUsersService : ViewUsersService, private _roleService : RoleService, private _idUsersService : IdUsersService ) {
  this.viewUsersTableData = _viewUsersService.viewUsersTableData;
  this.roleTableData = _roleService.roleTableData;
  this.idUsersTableData = _idUsersService.idUsersTableData;
  }
}
