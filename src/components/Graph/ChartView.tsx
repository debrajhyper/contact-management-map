import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Loader, Error } from "@Components";
import { GET_HISTORICAL_DATA_API } from "@Api";
import { GET_HISTORICAL_DATA } from "@Constants";

/**
 * Component for displaying a chart of historical data of a country or the world.
 * It fetches the data from the API and renders a chart with ApexCharts.
 */
export function ChartView() {
    const [series, setSeries] = useState<{ name: string; data: [number, number][] }[]>([]);

    /**
     * Fetches the historical data of a country or the world from the API.
     * If the data is available, it parses it and sets the state of the series.
     */
    const { data, error, isLoading } = useQuery(GET_HISTORICAL_DATA, async () => {
        const res = await fetch(GET_HISTORICAL_DATA_API);
        return res.json();
    });

    const options: ApexOptions = {
        chart: {
            id: "area-datetime",
            foreColor: "#ccc",
            toolbar: {
                autoSelected: "pan",
                show: false
            },
            zoom: {
                autoScaleYaxis: true,
            },
        },
        colors: ['#008FFB', '#FF4560', '#00E396',],
        noData: {
            text: 'No data to show',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '14px',
                fontFamily: undefined
            }
        },
        stroke: {
            width: 2
        },
        grid: {
            borderColor: "rgba(255, 255, 255, 0.04)",
            yaxis: {
                lines: {
                    show: true
                }
            },
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        annotations: {
            yaxis: [
                {
                    y: 30,
                    borderColor: "#999",
                    label: {
                        style: {
                            color: "#fff",
                            background: "#00E396",
                        },
                    },
                },
            ],
            xaxis: [
                {
                    x: new Date("14 Nov 2012").getTime(),
                    borderColor: "#999",
                    label: {
                        style: {
                            color: "#fff",
                            background: "#775DD0",
                        },
                    },
                },
            ],
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        xaxis: {
            type: "datetime",
            tickAmount: 6,
        },
        tooltip: {
            enabled: true,
            theme: "dark",
            x: {
                format: "dd MMM yyyy",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.7,
                opacityTo: 0.1,
            },
        },
    };

    /**
     * Parses the data when it is available and sets the state of the series.
     * Each series contains the name and data points for a specific metric.
     */
    useEffect(() => {
        if (data) {
            // Initialize arrays to store the data points for each metric.
            const casesDataPoints: [number, number][] = [];
            const deathsDataPoints: [number, number][] = [];
            const recoveredDataPoints: [number, number][] = [];

            // Iterate over the cases data and populate the casesDataPoints array.
            Object.entries(data?.cases).forEach(([date, value]) => {
                casesDataPoints.push([new Date(date).getTime(), value as number]);
            });

            // Iterate over the deaths data and populate the deathsDataPoints array.
            Object.entries(data?.deaths).forEach(([date, value]) => {
                deathsDataPoints.push([new Date(date).getTime(), value as number]);
            });

            // Iterate over the recovered data and populate the recoveredDataPoints array.
            Object.entries(data?.recovered).forEach(([date, value]) => {
                recoveredDataPoints.push([new Date(date).getTime(), value as number]);
            });

            // Set the series state with the data points for each metric.
            setSeries([
                { name: "Cases", data: casesDataPoints },
                { name: "Deaths", data: deathsDataPoints },
                { name: "Recovered", data: recoveredDataPoints },
            ]);
        }
    }, [data]);

    // Check if the data is still being loaded. If so, return a loader component.
    if (isLoading) return <Loader />;

    // Check if there is an error. If so, return an error component.
    if (error) return <Error />;

    // Render the chart component with the options and series data.
    return (
        <div>
            {/* Render the ApexChart component with the provided options, series data, chart type, and height. */}
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={600}
            />
        </div>
    );
}