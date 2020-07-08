import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PhotoModel } from '../model/photo-model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<PhotoModel[]>>{

    constructor(private service: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoModel[]> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }

}