import { Component, OnInit } from '@angular/core';
import {ArtistsService} from './artists.service';
import {Artist} from './artist.model';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];
  
  constructor(private artistsService : ArtistsService ) { }

  ngOnInit() {
   this.artists = this.artistsService.getArtists(); 
  }



}
