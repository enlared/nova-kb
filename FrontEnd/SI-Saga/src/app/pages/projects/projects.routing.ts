import { Routes, RouterModule }  from '@angular/router';

import { Projects } from './projects.component';
import { Subproject } from './components/subproject/subproject.component';

import { Viewprojects } from './components/viewprojects/viewprojects.component';
import { Editproject } from './components/editproject/editproject.component';
import { Generalproject } from './components/generalproject/generalproject.component';
import { Deleteproject } from './components/deleteproject/deleteproject.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Projects,
    children: [
      { path: 'subproject', component: Subproject },
      
      { path: 'viewprojects', component: Viewprojects },
      { path: 'generalproject', component: Generalproject },
      { path: 'editproject', component: Editproject },
      { path: 'deleteproject', component: Deleteproject },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
