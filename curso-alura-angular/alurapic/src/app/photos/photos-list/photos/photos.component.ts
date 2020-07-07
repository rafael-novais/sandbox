import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoModel } from '../../model/photo-model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoModel[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) this.rows = this.groupCollumns(this.photos);
  }

  groupCollumns(photos: PhotoModel[]){
    const newRows = [];

    for(let i = 0; i < photos.length; i+=3){
      newRows.push(photos.slice(i, (i + 3)));
    }

    return newRows;
  }

}
