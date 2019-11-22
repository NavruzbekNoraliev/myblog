import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./components/main.module').then(m => m.MainModule)
  }
];
