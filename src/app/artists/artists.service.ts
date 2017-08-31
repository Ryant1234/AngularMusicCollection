import {Artist } from './artist.model';
import {Release} from '../releases/release.model';
export class ArtistsService {

private artists : Artist[] = [
    new Artist ( 1, 'Burial',['UK Garage', 'Dubstep']
    , [new Release(1, 1, 'Untrue', ['Dubstep'], ['Vinyl'], 40, 'none', 2006) ],
    '' ),
       new Artist ( 2, 'Motorhead',  ['Rock and Roll', 'Heavy Metal'],
    [new Release(2, 2, 'Live at Hammersmith', ['Rock and Roll', 'Heavy Metal'],['Vinyl'], 40, 'none', 1984)],'')
]
    
getArtists() {
    return this.artists;
}

getArtist(id: number) {
    return this.artists[id];
}

deleteArtist(artist: Artist){
    this.artists.splice(this.artists.indexOf(artist), 1)
}

}