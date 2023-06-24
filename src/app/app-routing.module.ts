import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'demo-home',
    loadChildren: () => import('./demo-home/demo-home.module').then( m => m.DemoHomePageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('./types/types.module').then( m => m.TypesPageModule)
  },
  {
    path: 'label-placement',
    loadChildren: () => import('./label-placement/label-placement.module').then( m => m.LabelPlacementPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
