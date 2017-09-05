import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ArtistsComponent} from './artists/artists.component';
import {ArtistComponent} from './artists/artist/artist.component';
import {ReleasesComponent} from './releases/releases.component';
import {ReleaseComponent} from './releases/release/release.component';


import {ArtistsService} from './artists/artists.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ReleaseComponent,
    ArtistsComponent,
    ReleasesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
