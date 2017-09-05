import {Component} from '@angular/core';
import {ViewProjectsService} from '../../../../theme/services/viewProjectsService/viewprojects.service';
import {ViewSubProjectsService} from '../../../../theme/services/viewSubProjectsService/viewsubprojects.service';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {LabelsService} from '../../../../theme/services/labelsService/labels.service';
import {TypeProjectsService} from '../../../../theme/services/typeProjectsService/typeprojects.service';

@Component({
  selector: 'viewprojects',
  templateUrl: './viewprojects.html',
  styleUrls: ['./viewprojects.scss']
})
export class Viewprojects {

    viewProjectsTableData:Array<any>;
    viewSubProjectsTableData:Array<any>;
    viewAuthorsTableData:Array<any>;
    typeProjectsTableData:Array<any>;
    labelsTableData:Array<any>;
    

    constructor(private _viewProjectsService : ViewProjectsService, private _viewSubProjectsService : ViewSubProjectsService, private _viewAuthorsService : ViewAuthorsService, private _labelsService : LabelsService, private _typeProjectsService : TypeProjectsService ) {
    this.viewProjectsTableData = _viewProjectsService.viewProjectsTableData;
    this.viewSubProjectsTableData = _viewSubProjectsService.viewSubProjectsTableData;
    this.viewAuthorsTableData = _viewAuthorsService.viewAuthorsTableData;
    this.labelsTableData = _labelsService.labelsTableData;
    this.typeProjectsTableData = _typeProjectsService.typeProjectsTableData;
    }

  }

