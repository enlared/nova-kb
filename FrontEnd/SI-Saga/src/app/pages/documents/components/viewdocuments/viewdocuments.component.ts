import { Component } from '@angular/core';
import {ViewDocumentsService} from '../../../../theme/services/viewDocumentsService/viewdocuments.service';

@Component({
  selector: 'viewdocuments',
  templateUrl: './viewdocuments.html',
  styleUrls: ['./viewdocuments.scss']
})
export class Viewdocuments {

 
  viewDocumentsTableData:Array<any>;
  constructor(private _viewDocumentsService : ViewDocumentsService) {
  this.viewDocumentsTableData = _viewDocumentsService.viewDocumentsTableData;
  }
  
}
