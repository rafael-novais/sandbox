import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoModel } from './model/photo-model';
import { HttpClientModule } from '@angular/common/http';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotosListComponent
  ]
})
export class PhotosModule { }
