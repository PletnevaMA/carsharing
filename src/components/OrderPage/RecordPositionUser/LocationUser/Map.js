import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Maps.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setAddress, setCoord } from "../../../../store/action";
export const Mapp = () => {
  const city = useSelector((state) => state.city);
  const point = useSelector((state) => state.point);
  const [coord, setCoordData] = useState(useSelector((state) => state.coord));
  const [ymapsState, setymapsState] = useState(null);
  const position = [city, point].join(", ");

  const dispatch = useDispatch();
  useEffect(() => {   
    if (ymapsState) {
      findCoordinates(ymapsState);
    }
    dispatch(setAddress(position));
    dispatch(setCoord(coord));
  }, [position]);

  const findCoordinates = (ymaps) => {
    ymaps
      .geocode(position, {
        results: 1,
      })
      .then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        let coords = firstGeoObject.geometry.getCoordinates();
        setCoordData(coords);
      });
  }
  return (
    <div className="map">
      <YMaps
        style={{ width: "100%", height: "100%" }}
        query={{
          ns: "use-load-option",
          apikey: "f141b222-3dee-4a31-bb10-9d1ea97826b3",
          load: "package.full",
        }}
      >
        <Map
          state={{ center: coord, zoom: 18 }}
          style={{ width: "100%", height: "100%", maxWidth: "736px" }}
          modules={["geocode", "geolocation"]}
          onLoad={async (ymaps) => {
            await setymapsState(ymaps);
          }}
        >
          {point.length > 0 && <Placemark key="0" geometry={coord} />}
        </Map>
      </YMaps>
    </div>
  );
};
