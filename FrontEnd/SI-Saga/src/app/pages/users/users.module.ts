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
import { Viewusers } from './components/viewusers/viewusers.component';
import { Deleteuser } from './components/deleteuser/deleteuser.component';
import { ModalsUsers } from '../../theme/components/modals/users/modalsusers.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbModalModule,
    NgbDropdownModule,
    routing
  ],
  declarations: [
    Users,
    Edituser,
    Newuser,
    Viewusers,
    Deleteuser,
    ModalsUsers,
    DefaultModalsUsers
  ],
  entryComponents: [
    DefaultModalsUsers
   ],
  providers: [

  ]
})
export class UsersModule {}
