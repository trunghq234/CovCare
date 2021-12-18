import React, { useState } from 'react';
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';
import markerIcon from 'assets/images/marker.png';
import styles from './index.module.less';

const MapBox = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 10.870388200053421,
    longitude: 106.80287170707318,
    zoom: 16,
  });
  const [selectedMarker, setSelectedMarker] = useState(null);

  const geolocateStyle = {
    top: 0,
    left: 0,
    padding: '10px',
  };

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px',
  };

  const navStyle = {
    top: 72,
    left: 0,
    padding: '10px',
  };

  const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px',
  };

  const location = [
    {
      x: 10.870388200053421,
      y: 106.80287170707318,
      content: 'Trường Đại Học Công Nghệ Thông Tin ĐHQG-HCM ',
    },
    {
      x: 10.878448376808091,
      y: 106.80697012245552,
      content: 'KTX Khu A ĐHQG TPHCM ',
    },
    {
      x: 10.883832980948288,
      y: 106.78181450468401,
      content: 'KTX Khu B ĐHQG TPHCM ',
    },
    {
      x: 10.879672491186733,
      y: 106.81526350083264,
      content: 'Bến xe miền đông mới',
    },
    {
      x: 10.866541604330882,
      y: 106.8034066977763,
      content: 'Khu du lịch Suối tiên ',
    },
    {
      x: 10.873699755210552,
      y: 106.80290973395986,
      content: 'Đại Học Khoa Học Xã Hội Và Nhân Văn',
    },
    {
      x: 10.875244359948088,
      y: 106.80156310653445,
      content: 'Nhà Văn Hóa Sinh Viên ĐHQG',
    },
    {
      x: 10.868869392401855,
      y: 106.79669745071344,
      content: 'Nhà Điều Hành ĐHQG-TP. HCM',
    },
    {
      x: 10.870839687966276,
      y: 106.80887467967521,
      content: 'Cơ sở 2 Bệnh viện Ung Bước Tp.HCM',
    },
    {
      x: 10.879989227903007,
      y: 106.7955400218778,
      content: 'Nhà khách Đại học Quốc gia TP. HCM',
    },
  ];

  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoicXVhbmdwbiIsImEiOiJja3hhaGRhdHIwcjhrMm5udThzMW16ZWcyIn0.j5XMWM5DbBc8pG1olHsYMA"
      onViewportChange={viewport => setViewport(viewport)}>
      {location.map(element => (
        <>
          <Marker
            latitude={element.x}
            longitude={element.y}
            offsetLeft={-20}
            offsetTop={-30}
            onClick={() => setSelectedMarker(element)}>
            <img src={markerIcon} alt="Abc" style={{ height: 40, width: 40 }} />
          </Marker>
        </>
      ))}
      {selectedMarker && (
        <Popup
          className={styles.popup}
          latitude={selectedMarker.x}
          longitude={selectedMarker.y}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setSelectedMarker(null)}
          dynamicPosition={false}
          anchor="bottom-left">
          <div className={styles.content}>{selectedMarker.content}</div>
        </Popup>
      )}
      <GeolocateControl style={geolocateStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle} />
      <ScaleControl style={scaleControlStyle} />
    </MapGL>
  );
};

export default MapBox;
