import {Component} from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {LabelsService} from '../../../../theme/services/labelsService/labels.service';
import {IMyDpOptions} from 'mydatepicker';


@Component({
  selector: 'subproject',
  templateUrl: './subproject.html',
  styleUrls: ['./subproject.scss']
})
export class Subproject {
  
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-dd-yyyy',
};

  viewAuthorsTableData:Array<any>;
  labelsTableData:Array<any>;

  constructor(private _viewAuthorsService : ViewAuthorsService, private _labelsService : LabelsService ) {
  this.viewAuthorsTableData = _viewAuthorsService.viewAuthorsTableData;
  this.labelsTableData = _labelsService.labelsTableData;

  }

}
