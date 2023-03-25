import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../models/albums';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  albums: Album[] = [];

  ngOnInit(): void {
    this.getAlbumList();
  }

  getAlbumList() {
    this.albumService.getAlbums().subscribe(res => {
      this.albums = res;
    })
  }



}
