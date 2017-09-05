import {Component} from '@angular/core';
import {RoleService} from '../../../../theme/services/roleService/role.service';

@Component({
  selector: 'newuser',
  styleUrls: ['./newuser.scss'],
  templateUrl: './newuser.html',
})
export class Newuser {


  roleTableData:Array<any>;

  constructor(private _roleService : RoleService ) {

    this.roleTableData = _roleService.roleTableData;
 
}

}
