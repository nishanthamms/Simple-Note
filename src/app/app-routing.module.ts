import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },

  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./Pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./Pages/add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'viewnote/:id',
    loadChildren: () => import('./Pages/viewnote/viewnote.module').then( m => m.ViewnotePageModule)
  },
  {
    path: 'update-note/:id',
    loadChildren: () => import('./Pages/update-note/update-note.module').then( m => m.UpdateNotePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
