import { Component } from '@angular/core';
import {ViewDocumentsService} from '../../../../theme/services/viewDocumentsService/viewdocuments.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'viewdocuments',
  templateUrl: './viewdocuments.html',
  styleUrls: ['./viewdocuments.scss']
})
export class Viewdocuments {

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-dd-yyyy',
};
  viewDocumentsTableData:Array<any>;
  constructor(private _viewDocumentsService : ViewDocumentsService) {
  this.viewDocumentsTableData = _viewDocumentsService.viewDocumentsTableData;
  }
  
}
