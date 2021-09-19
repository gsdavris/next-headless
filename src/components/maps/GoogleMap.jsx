/* eslint-disable linebreak-style */
import { useRef, useEffect } from 'react';

const GoogleMap = () => {
  const mapRef = useRef( null );
  useEffect( () => {
    let google = window.google;
    let map = mapRef.current;
    let lat = '40.748817';
    let lng = '-73.985428';
    const icon = 'https://cocus.gr/wp-content/uploads/2016/02/home_tea_pin-1.png';
    const myLatlng = new google.maps.LatLng( lat, lng );
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [ { color: '#444444' } ]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [ { color: '#f2f2f2' } ]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [ { visibility: 'off' } ]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [ { saturation: -100 }, { lightness: 45 } ]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [ { visibility: 'simplified' } ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [ { visibility: 'off' } ]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [ { visibility: 'off' } ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [ { color: '#cbd5e0' }, { visibility: 'on' } ]
        }
      ]
    };

    map = new google.maps.Map( map, mapOptions );

    const marker = new google.maps.Marker( {
      position: myLatlng,
      map: map,
      // icon: icon,
      animation: google.maps.Animation.DROP,
      title: 'Next Headless'
    } );

    const contentString =
      '<div class="info-window-content"><h2>Next Headless</h2>' +
      '<p>A simple and powerful framework that produces unmatched results.</p></div>';

    const infowindow = new google.maps.InfoWindow( {
      content: contentString
    } );

    google.maps.event.addListener( marker, 'click', function () {
      infowindow.open( map, marker );
    } );
  } );
  return (
    <>
      <div className="relative w-full rounded-lg h-600-px">
        <div className="rounded-lg h-full" ref={mapRef} />
      </div>
    </>
  );
};

export default GoogleMap;
