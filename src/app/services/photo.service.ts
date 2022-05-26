import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePhotos} from "../models/photo";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhoto(searchTag): Observable<ResponsePhotos> {
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

  public postFavPhotoToFB(infPhoto): Observable<void> {
    return this.http.post<void>(`https://angular-search-gallery-c02a8-default-rtdb.firebaseio.com/${infPhoto.idPhoto}.json`, `${JSON.stringify(infPhoto)}`);
  }
}
