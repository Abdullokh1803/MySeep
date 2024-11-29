import Map, {Marker} from "react-map-gl/dist/esm/components/map";

export default function Mapbox(){

    const NEXT_PUBLIC_MAPBOX_API_KEY = 'mapbox://styles/mapbox/standard/-/CHAeyOL-'

    return (
        <Map
          initialViewState={{
            longitude: -73.935242,
            latitude: 40.73061,
            zoom: 10,
          }}
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        >
          <Marker longitude={-73.935242} latitude={40.73061} color="red" />
        </Map>
      );
}