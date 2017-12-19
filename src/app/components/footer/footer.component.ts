import {} from '@types/googlemaps';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mapInit = function initMap() {
      const uluru = {lat: -25.363, lng: 131.044};
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(43.518195, 16.441633)
      });
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.518195, 16.441633),
        map: map
      });
      google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(map.getCenter());
      });
    }();
  }

}
