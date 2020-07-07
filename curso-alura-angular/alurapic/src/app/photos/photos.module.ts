import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoModel } from './model/photo-model';
import { HttpClientModule } from '@angular/common/http';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotosListComponent,
    PhotoFormComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PhotosModule { }
