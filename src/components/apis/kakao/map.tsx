import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapComponent() {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c8a8be4fec1289917350745769f6aae0&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        var options = {
          center: new window.kakao.maps.LatLng(37.166062304539, 127.10342236587),
          level: 14,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return (
    <div>
      <p>충전소 위치</p>
      <div id="map" style={{ width: '400px', height: '460px' }}></div>
    </div>
  );
}
