import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../model/photo-model';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: PhotoModel[] = [];

  constructor(private photoService: PhotoService){}
  
  ngOnInit(): void {
    
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos;
      });

  }
}
