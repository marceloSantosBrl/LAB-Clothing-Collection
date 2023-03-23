import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsListingComponent } from './pages/collections/collections-listing/collections-listing.component';
import { CollectionsEditingComponent } from './pages/collections/collections-editing/collections-editing.component';
import { CollectionsCreatingComponent } from './pages/collections/collections-creating/collections-creating.component';
import { ModelsListingComponent } from './pages/models/models-listing/models-listing.component';
import { ModelsEditingComponent } from './pages/models/models-editing/models-editing.component';
import { ModelsCreatingComponent } from './pages/models/models-creating/models-creating.component';
import { ContentComponent } from './layouts/content/content.component';
import { SignInComponent } from './pages/sign/sign-in/sign-in.component';
import { ForgotComponent } from './pages/sign/forgot/forgot.component';
import { SignUpComponent } from './pages/sign/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'collection-listing', component: CollectionsListingComponent },
      { path: 'collection-editing', component: CollectionsEditingComponent },
      { path: 'collection-creating', component: CollectionsCreatingComponent },
      { path: 'models-listing', component: ModelsListingComponent },
      { path: 'models-editing', component: ModelsEditingComponent },
      { path: 'models-creating', component: ModelsCreatingComponent },
    ],
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
