import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private route: Router) { }
  

  classHome(): string{
    let url: string = this.route.url;

    if (url == '/' || url == '/home'){
      return "active";
    }else{
      return "none";
    }
  }

  classAlbums(): string{
    let url: string = this.route.url;

    if (url != '/' && url != '/home' ){
      return "active";
    }else{
      return "none";
    }
  }
}
