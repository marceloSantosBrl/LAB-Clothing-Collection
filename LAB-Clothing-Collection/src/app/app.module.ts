import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { SignInComponent } from './pages/sign/sign-in/sign-in.component';
import { RecoverComponent } from './pages/sign/recover/recover.component';
import { SignUpComponent } from './pages/sign/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsListingComponent } from './pages/collections/collections-listing/collections-listing.component';
import { CollectionsEditingComponent } from './pages/collections/collections-editing/collections-editing.component';
import { CollectionsCreatingComponent } from './pages/collections/collections-creating/collections-creating.component';
import { ModelsListingComponent } from './pages/models/models-listing/models-listing.component';
import { ModelsCreatingComponent } from './pages/models/models-creating/models-creating.component';
import { ModelsEditingComponent } from './pages/models/models-editing/models-editing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { RecoverFormComponent } from './components/recover-form/recover-form.component';
import { SuccessfulRecoverComponent } from './components/sucessfull-recover/successful-recover.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    SignInComponent,
    RecoverComponent,
    SignUpComponent,
    HomeComponent,
    CollectionsListingComponent,
    CollectionsEditingComponent,
    CollectionsCreatingComponent,
    ModelsListingComponent,
    ModelsCreatingComponent,
    ModelsEditingComponent,
    NotFoundComponent,
    LoginFormComponent,
    SignUpFormComponent,
    RecoverFormComponent,
    SuccessfulRecoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
