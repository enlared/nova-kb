import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModalsUsers } from '../../theme/components/modals/users/defaultmodalsusers/defaultmodalsusers.component';
import { routing }       from './users.routing';
import { Users } from './users.component';
import { Edituser } from './components/edituser/edituser.component';
import { Newuser } from './components/newuser/newuser.component';
import { ViewUsers } from './components/viewusers/viewusers.component';
import { Deleteuser } from './components/deleteuser/deleteuser.component';
import { ModalsUsers } from '../../theme/components/modals/users/modalsusers.component';
import { ViewUsersService} from '../../theme/services/viewUsersService/viewusers.service';
import { HttpModule } from '@angular/http';
import { RoleService} from '../../theme/services/roleService/role.service';
import { IdUsersService} from '../../theme/services/idUsersService/idusers.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbModalModule,
    NgbDropdownModule,
    routing,
    HttpModule,
  ],
  declarations: [
    Users,
    Edituser,
    Newuser,
    ViewUsers,
    Deleteuser,
    ModalsUsers,
    DefaultModalsUsers
  ],
  entryComponents: [
    DefaultModalsUsers
   ],
  providers: [
  ViewUsersService,
  RoleService,
  IdUsersService,
  ]
})
export class UsersModule {}
