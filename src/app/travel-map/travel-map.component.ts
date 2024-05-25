import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { TravelMapService } from './travel-map.service';

@Component({
  selector: 'app-travel-map',
  templateUrl: './travel-map.component.html',
  styleUrls: ['./travel-map.component.css']
})
export class TravelMapComponent implements AfterViewInit {
  map: L.Map;
  constructor(private service: TravelMapService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 40, -100 ],
      zoom: 4,
      zoomControl: false
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map)
    this.addLegendToMap()
    this.addMarkersToMap()
    this.map.on('click', this.onMapClick)
  }

  addLegendToMap(): void {
    const legend = new L.Control({position: 'bottomleft'});

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML +=
        '<span><i>National Park</i><img src="assets/imgs/Icons/green_mountains.png"></span></br>' +
        '<span><i>Mountains</i><img src="assets/imgs/Icons/aqua_mountains.png"></span></br>' +
        '<span><i>Snowboarding</i><img src="assets/imgs/Icons/blue_snowboarding.png"></span></br>' +
        '<span><i>Home Base</i><img src="assets/imgs/Icons/red_house.png"></span></br>' +
        '<span><i>Resident</i><img src="assets/imgs/Icons/white_house.png"></span></br>' +
        '<span><i>Rural Area/Camping</i><img src="assets/imgs/Icons/purple_forest.png"></span></br>' +
        '<span><i>Beach town</i><img src="assets/imgs/Icons/yellow_beach.png"></span></br>' +
        '<span><i>Small City</i><img src="assets/imgs/Icons/orange_city.png"></span></br>' +
        '<span><i>Medium City</i><img src="assets/imgs/Icons/pink_city.png"></span></br>' +
        '<span><i>Large City</i><img src="assets/imgs/Icons/black_city.png"></span></br>'
      return div;
    };

    legend.addTo(this.map)
  }

  activateAddMarkerMode(): void {
    console.log('Add Marker Mode Activated')

  }

  addMarkersToMap(): void {
    const markers = this.service.getMarkers()
    for(const m of markers) {
      const displayM = L.marker(m.coords).addTo(this.map)

      displayM.bindPopup(m.description)
    }
  }

  onMapClick(): void {
    if (true) {
      console.log(this.map)
      this.useMap()
    }
  }

  useMap() {
    L.marker([39.702781387946104, -80.40301195173357]).addTo(this.map).bindPopup('Sure')
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
