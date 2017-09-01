import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';


import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './documents.routing';
import { Documents } from './documents.component';
import { Newdocument } from './components/newdocument/newdocument.component';
import { ModalsDocuments } from '../../theme/components/modals/documents/modalsdocuments.component';
import { Viewdocuments } from './components/viewdocuments/viewdocuments.component';

import { Editdocument } from './components/editdocument/editdocument.component';


import { Deletedocument } from './components/deletedocument/deletedocument.component';
import { DefaultModalsDocuments } from '../../theme/components/modals/documents/defaultmodalsdocuments/defaultmodalsdocuments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbModalModule,
    NgbDropdownModule,
    routing,
  
   
   
  ],
  declarations: [
    Documents,
    Newdocument,
    
    Viewdocuments,
    Editdocument,
    ModalsDocuments,
    Deletedocument,
    DefaultModalsDocuments
   
  ],
   entryComponents: [
   DefaultModalsDocuments
  ],
  providers: [
  
  ]
})
export class DocumentsModule {
}

