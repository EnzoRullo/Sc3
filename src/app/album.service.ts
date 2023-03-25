import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Photo } from './models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  } 
}
