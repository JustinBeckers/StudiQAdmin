import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditmodulesComponent } from './editmodules/editmodules.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EditlessonsComponent } from './editlessons/editlessons.component';
import { EditquestionsComponent } from './editquestions/editquestions.component';
import { AuthGuard } from './shared/auth.guard';
import { LoginPageGuard } from './shared/loginPage.guard';
import { HttpClientModule } from "@angular/common/http";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    EditmodulesComponent,
    SidenavComponent,
    HomeComponent,
    EditlessonsComponent,
    EditquestionsComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule, RouterModule, FormsModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule, HttpClientModule, AngularFirestoreModule, ReactiveFormsModule, AngularSvgIconModule
  ],
  providers: [AuthenticationService, AuthGuard, LoginPageGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
