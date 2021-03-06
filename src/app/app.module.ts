import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormClickDirective } from './directives/form-click.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SelectedImagesComponent } from './components/selected-images/selected-images.component';
import {MatTabsModule} from "@angular/material/tabs";
import { GalleryComponent } from './components/gallery/gallery.component';
import { SelectedPhotoComponent } from './components/gallery/selected-photo/selected-photo.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TrenComponent } from './components/tren/tren.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormClickDirective,
    MainLayoutComponent,
    SelectedImagesComponent,
    GalleryComponent,
    SelectedPhotoComponent,
    TrenComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        HttpClientModule,
        MatTabsModule,
        MatDialogModule,
        NgxPaginationModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
