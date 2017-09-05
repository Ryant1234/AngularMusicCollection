import { Injectable } from '@angular/core';
import {Artist } from './artist.model';
import {Release} from '../releases/release.model';

@Injectable()
export class ArtistsService {




private artists : Artist[] = [
    new Artist ( 1, 'Burial',['UK Garage', 'Dubstep']
    , [new Release(1, 1, 'Burial', ['Dubstep', 'UK Garage'], ['Vinyl'], '99:99', 
    'none', 2004 )] ,
    '' ),
       new Artist ( 2, 'Motorhead',  ['Rock and Roll', 'Heavy Metal'],[new Release(2, 2, 'Live at Hammersmith', ['Heavy Metal', 'Rock and Roll'],
       ['Vinyl'], '40:41', 'none', 1984)], 'none')

];


constructor() {}

    
getArtists() {
    console.log(this.artists);
    return this.artists;
}

getArtist(id: number) {
    return this.artists[id];
}

deleteArtist(artist: Artist){
    this.artists.splice(this.artists.indexOf(artist), 1)
}

}