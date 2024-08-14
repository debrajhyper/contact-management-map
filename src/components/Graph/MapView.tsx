import { useQuery } from "react-query";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import { GET_COUNTRY_DATA_API } from "@Api";
import { Loader, Error } from "@Components";
import { GET_COUNTRY_DATA } from "@Constants";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

// Component to display a placeholder when the map is loading
function MapPlaceholder() {
    return (
        <p>
            Global map.{' '}
            <noscript>You need to enable JavaScript to see this map.</noscript>
        </p>
    )
}

/**
 * Component to display markers on the map
 * @param {CountryDataProps} data - The data containing the country information
 * @returns {JSX.Element[]} An array of JSX elements representing the markers on the map
 */
const MyMarkers = ({ data }: CountryDataProps) => {
    // Initialize an array to store the points data
    const points: PointsDataProps[] = [];

    // Map over the data and extract the necessary information for each point
    data.map((item: CovidData) =>
        points.push({
            country: item.country,
            lat: item.countryInfo.lat,
            lng: item.countryInfo.long,
            active: item.active,
            deaths: item.deaths,
            recovered: item.recovered,
        })
    );

    // Map over the points and return a Marker component for each point
    return points.map(
        ({ lat, lng, country, active, deaths, recovered }: PointsDataProps, index: number) => (
            // Marker component representing a point on the map
            <Marker key={index} position={[lat, lng]}>
                {/* Popup component containing information about the country */}
                <Popup>
                    <h1 className="text-[#323232] font-extrabold text-xl mb-3">{country}</h1>
                    <div className="flex flex-col gap-1">
                        {/* Active cases */}
                        <h4 className="text-yellow-600 text-xs font-medium"><b>Active: </b>{active}</h4>
                        {/* Deaths */}
                        <h4 className="text-red-600 text-xs font-medium"><b>Deaths: </b>{deaths}</h4>
                        {/* Recovered cases */}
                        <h4 className="text-green-700 text-xs font-medium"><b>Recovered: </b>{recovered}</h4>
                    </div>
                </Popup>
            </Marker>
        )
    );
};

/**
 * Component to display the country map
 * @returns {JSX.Element} The MapView component
 */
export function MapView() {
    // The center coordinates are set to the coordinates of India
    const center: LatLngExpression | undefined = [20.5937, 78.9629];

    // Fetch the country data from the API
    // The GET_COUNTRY_DATA query is used to fetch the data
    // The API endpoint is defined in the constants file
    const {
        data,
        error,
        isLoading,
    } = useQuery(GET_COUNTRY_DATA, async () => {
        // Fetch the data from the API
        const res = await fetch(GET_COUNTRY_DATA_API);
        // Parse the response as JSON
        return res.json();
    });

    // If there is an error, display an error message
    if (error) return <Error />;
    // If the data is still loading, display a loader
    if (isLoading) return <Loader />;

    // Render the map
    return (
        <div>
            {/* Display the map */}
            <MapContainer
                className="map"
                center={center}
                zoom={4.4}
                scrollWheelZoom={true}
                placeholder={<MapPlaceholder />}
                style={{ width: "100%", height: "70dvh", borderRadius: "10px" }}
            >
                {/* Add the tile layer to the map */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Add markers to the map */}
                <MyMarkers data={data} />
            </MapContainer>
            {/* Display a disclaimer */}
            <p className="mt-2 text-amber-500 text-sm italic"><b>Disclaimer:</b> The map is illustrative and may not accurately represent country boundaries or territories.</p>
        </div>
    );
}