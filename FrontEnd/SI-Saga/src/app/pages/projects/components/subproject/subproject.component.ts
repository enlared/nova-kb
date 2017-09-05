import {Component} from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {LabelsService} from '../../../../theme/services/labelsService/labels.service';

@Component({
  selector: 'subproject',
  templateUrl: './subproject.html',
  styleUrls: ['./subproject.scss']
})
export class Subproject {
  
  viewAuthorsTableData:Array<any>;
  labelsTableData:Array<any>;

  constructor(private _viewAuthorsService : ViewAuthorsService, private _labelsService : LabelsService ) {
  this.viewAuthorsTableData = _viewAuthorsService.viewAuthorsTableData;
  this.labelsTableData = _labelsService.labelsTableData;

  }

}
