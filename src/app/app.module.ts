import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ArtistsComponent} from './artists/artists.component';
import {ArtistComponent} from './artists/artist/artist.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumComponent} from './albums/album/album.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    ArtistsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
