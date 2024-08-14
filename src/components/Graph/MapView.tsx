import { useQuery } from "react-query";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { GET_COUNTRY_DATA_API } from "@Api";
import { Loader, Error } from "@Components";
import { GET_COUNTRY_DATA } from "@Constants";

const MyMarkers = ({ data }: CountryDataProps) => {
    const points: PointsDataProps[] = [];
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
    return points.map(
        ({ lat, lng, country, active, deaths, recovered }: PointsDataProps, index: number) => (
            <Marker key={index} position={[lat, lng]}>
                <Popup>
                    <h1 className="text-[#323232] font-extrabold text-xl mb-3">{country}</h1>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-yellow-600 text-xs font-medium"><b>Active: </b>{active}</h4>
                        <h4 className="text-red-600 text-xs font-medium"><b>Deaths: </b>{deaths}</h4>
                        <h4 className="text-green-700 text-xs font-medium"><b>Recovered: </b>{recovered}</h4>
                    </div>
                </Popup>
            </Marker>
        )
    );
};

export function MapView() {
    const center: LatLngExpression | undefined = [20.5937, 78.9629];
    const {
        data,
        error,
        isLoading,
    } = useQuery(GET_COUNTRY_DATA, async () => {
        const res = await fetch(GET_COUNTRY_DATA_API);
        return res.json();
    });

    if (error) return <Error />;
    if (isLoading) return <Loader />;

    return (
        <div>
            <MapContainer
                className="map"
                center={center}
                zoom={4.4}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "70dvh", borderRadius: "10px" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkers data={data} />
            </MapContainer>
            <p className="mt-2 text-amber-500 text-sm italic"><b>Disclaimer:</b> The map is illustrative and may not accurately represent country boundaries or territories.</p>
        </div>
    );
}
