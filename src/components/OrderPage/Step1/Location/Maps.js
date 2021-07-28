import React from 'react';
import { YMaps, Map } from "react-yandex-maps";
import './Maps.module.scss';

const mapSettings = { center: [54.2794618, 48.1051445], zoom: 10 };

export const Maps = () => {
  return (
    <div className = "map">     
      <YMaps>
        <Map
          defaultState={mapSettings}
          style={{ width: "100%", height: "100%", maxWidth: "736px" }}
        />
      </YMaps>
    </div>
  );
};
export default Maps;