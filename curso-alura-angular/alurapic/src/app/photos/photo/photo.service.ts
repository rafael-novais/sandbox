import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoModel } from '../model/photo-model';

const API = "http://localhost:3000/";

@Injectable({ providedIn: 'root' })
export class PhotoService {

  photos: PhotoModel[];

  constructor(private http: HttpClient) {}

  listFromUser(userName: string){
    return this.http
      .get<PhotoModel[]>(API + userName + '/photos');
  }
}
