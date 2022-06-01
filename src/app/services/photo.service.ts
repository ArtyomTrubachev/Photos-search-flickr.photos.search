import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {
  FBRespAfterFuncAddPhoto,
  FBRespAfterFuncShowFavPhotos,
  ResponsePhotos,
} from "../models/photo";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhoto(searchTag): Observable<any> {
    return this.http.get<ResponsePhotos>(`${environment.urlFlickr}`, {
      params: {
        method: 'flickr.photos.search',
        api_key: `${environment.apiKeyFlickr}`,
        tags: searchTag,
        format: 'json',
        nojsoncallback: '1',
        tag_mode: 'all',
        media: 'photos',
        per_page: '8',
        page: 1,
        extras: 'tags,date_taken,owner_name,url_m',
      }
    })
  }

  public postFavPhotoToFB(infPhoto): Observable<FBRespAfterFuncAddPhoto> {
    return this.http.post<FBRespAfterFuncAddPhoto>(`https://angular-search-gallery-c02a8-default-rtdb.firebaseio.com/.json`, `${JSON.stringify(infPhoto)}`);
  }

  public getFavouritePhoto(): Observable<FBRespAfterFuncShowFavPhotos> {
    return this.http.get<FBRespAfterFuncShowFavPhotos>(`https://angular-search-gallery-c02a8-default-rtdb.firebaseio.com/.json`);
  }

  public removeFavouritePhoto(id: string): Observable<void> {
    return this.http.delete<void>(`https://angular-search-gallery-c02a8-default-rtdb.firebaseio.com/${id}.json`);
  }
}
