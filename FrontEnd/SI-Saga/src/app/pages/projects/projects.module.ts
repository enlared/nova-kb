import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing }       from './projects.routing';
import { Projects } from './projects.component';
import { Subproject } from './components/subproject/subproject.component';

import { Viewprojects } from './components/viewprojects/viewprojects.component';
import { Editproject } from './components/editproject/editproject.component';
import { Deleteproject } from './components/deleteproject/deleteproject.component';
import { Generalproject } from './components/generalproject/generalproject.component';
import { DefaultModalsProjects } from '../../theme/components/modals/projects/defaultmodalsprojects/defaultmodalsprojects.component';
import { ModalsProjects } from '../../theme/components/modals/projects/modalsprojects.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    
    routing
  ],
  declarations: [
    Subproject,
    ModalsProjects,
    Viewprojects,
    Editproject,
    Deleteproject,
    Generalproject,
    Projects,
   DefaultModalsProjects
    
  ],
  entryComponents: [
   DefaultModalsProjects
  ],
  providers: [
    
  ]
})
export class ProjectsModule {
}
