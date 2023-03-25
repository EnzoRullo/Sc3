import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../models/albums';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(
    private photoService: AlbumService,
    private route: ActivatedRoute) { }

  photos: Photo[] = []

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.getPhotoList(Number(id));

  }

  getPhotoList(albumId: number) {
    this.photoService.getPhotos(albumId).subscribe(res => this.photos = res);
  };

}
