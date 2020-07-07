import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../model/photo-model';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: PhotoModel[] = [];

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    
    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
      .listFromUser(userName)
      .subscribe(photos => {
        this.photos = photos;
      });

  }
}
