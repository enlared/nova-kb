import {Component} from '@angular/core';
import {ViewAuthorsService} from '../../../../theme/services/authorsService/viewauthors.service';
import {TypeProjectsService} from '../../../../theme/services/typeProjectsService/typeprojects.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'generalproject',
  templateUrl: './generalproject.html',
})
export class Generalproject {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-dd-yyyy',
};

  viewAuthorsTableData:Array<any>;
  typeProjectsTableData:Array<any>;

  constructor(private _viewAuthorsService : ViewAuthorsService, private _typeProjectsService : TypeProjectsService ) {
  this.viewAuthorsTableData = _viewAuthorsService.viewAuthorsTableData;
  this.typeProjectsTableData = _typeProjectsService.typeProjectsTableData;

  }
  
}
