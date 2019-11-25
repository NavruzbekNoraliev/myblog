import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/main'
      },
      {
        path: 'main',
        component: FirstpageComponent
      }
    ]
  }
];
