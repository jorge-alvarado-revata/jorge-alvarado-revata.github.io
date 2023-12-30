import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FaceComponent } from './face/face.component';
export const routes: Routes = [
    { path: '', redirectTo: 'face', pathMatch: 'full'},
    { path: 'face', component: FaceComponent},
    { path: '**', component: PageNotFoundComponent}
];
