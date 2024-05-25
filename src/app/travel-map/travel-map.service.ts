import { Injectable } from '@angular/core';
import { Marker } from './models/Marker';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class TravelMapService {

  constructor(private dbService: DBService) { }
  getMarkers(): Marker[] {
    const markers: Marker[] = this.dbService.retrieveMarkersFromDB();

    return markers
  }
}
