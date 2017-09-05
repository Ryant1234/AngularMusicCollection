import {Release } from './release.model';
import {Artist} from '../artists/artist.model';


export class ReleaseService {

private releases: Release[] = [
[new Release(1, 1, 'Untrue', ['Dubstep'], ['Vinyl'], "40:00", 'none', 2006),
[new Release(2, 2, 'Live at Hammersmith', ['Rock and Roll', 'Heavy Metal'],['Vinyl'], "40:00", 'none', 1984)] ]
] 


constructor() {}

getReleases(){
    return this.releases;
}

getRelease (id :number){

return this.releases[id];

}


deleteRelease(release: Release){
    this.releases.splice(this.releases.indexOf(release), 1)
}
}