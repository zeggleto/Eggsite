import { Injectable } from '@angular/core';
import markersJson from '../../assets/data/markers.json'
import { Marker } from './models/Marker';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor() { }
  retrieveMarkersFromDB(): Marker[] {
    return markersJson as Marker[]
  }
  
}
