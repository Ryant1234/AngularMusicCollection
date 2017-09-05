import {Release} from '../releases/release.model';



export class Artist {
public name: string;
public genres: string[];
public  releases: Release[];
public artistLogo : string;



constructor(id: Number,
name: string,
genres: string[],
 releases: Release[] ,
artistLogo : string,

) {
    this.name = name;
    this.genres = genres;
    this.releases = releases;
    this.artistLogo = artistLogo;
}



}