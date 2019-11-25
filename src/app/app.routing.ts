import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/main.module').then(m => m.MainModule)
  }
];
