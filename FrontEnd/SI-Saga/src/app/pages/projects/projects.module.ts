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
import { Generalproject } from './components/generalproject/generalproject.component';
import { DefaultModalsProjects } from '../../theme/components/modals/projects/defaultmodalsprojects/defaultmodalsprojects.component';
import { ModalsProjects } from '../../theme/components/modals/projects/modalsprojects.component';
import { ViewProjectsService} from '../../theme/services/viewProjectsService/viewprojects.service';
import { ViewSubProjectsService} from '../../theme/services/viewSubProjectsService/viewsubprojects.service';
import { HttpModule } from '@angular/http';
import { ViewAuthorsService} from '../../theme/services/authorsService/viewauthors.service';
import { TypeProjectsService} from '../../theme/services/typeProjectsService/typeprojects.service';
import { LabelsService} from '../../theme/services/labelsService/labels.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    HttpModule,
    routing
  ],
  declarations: [
    Subproject,
    ModalsProjects,
    Viewprojects,
    Editproject,
    Generalproject,
    Projects,
    DefaultModalsProjects
    
  ],
  entryComponents: [
   DefaultModalsProjects
  ],
  providers: [
    ViewProjectsService,
    ViewSubProjectsService,
    ViewAuthorsService,
    TypeProjectsService,
    LabelsService,
  ]
})
export class ProjectsModule {
}
