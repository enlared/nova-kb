import {Component} from '@angular/core';
import {ViewUsersService} from '../../../../theme/services/viewUsersService/viewusers.service';
import {RoleService} from '../../../../theme/services/roleService/role.service';
import {IdUsersService} from '../../../../theme/services/idUsersService/idusers.service';

@Component({
  selector: 'viewusers',
  templateUrl: './viewusers.html',
  styleUrls: ['./viewusers.scss']
})
export class ViewUsers {

  viewUsersTableData:Array<any>;
  idUsersTableData:Array<any>;
  roleTableData:Array<any>;
  constructor(private _viewUsersService : ViewUsersService, private _roleService : RoleService, private _idUsersService : IdUsersService ) {
  this.viewUsersTableData = _viewUsersService.viewUsersTableData;
  this.roleTableData = _roleService.roleTableData;
  this.idUsersTableData = _idUsersService.idUsersTableData;
  }
}
