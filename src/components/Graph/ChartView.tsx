import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { Loader, Error } from "@Components";
import { GET_HISTORICAL_DATA_API } from "@Api";
import { GET_HISTORICAL_DATA } from "@Constants";

const options: ApexOptions = {
    chart: {
        id: "area-datetime",
        type: "area" as const,
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

export function ChartView() {
    const [series, setSeries] = useState<{ name: string; data: [number, number][] }[]>([]);

    const { data, error, isLoading } = useQuery(GET_HISTORICAL_DATA, async () => {
        const res = await fetch(GET_HISTORICAL_DATA_API);
        return res.json();
    });

    useEffect(() => {
        if (data) {
            const casesDataPoints: [number, number][] = [];
            const deathsDataPoints: [number, number][] = [];
            const recoveredDataPoints: [number, number][] = [];

            Object.entries(data?.cases).forEach(([date, value]) => {
                casesDataPoints.push([new Date(date).getTime(), value as number]);
            });

            Object.entries(data?.deaths).forEach(([date, value]) => {
                deathsDataPoints.push([new Date(date).getTime(), value as number]);
            });

            Object.entries(data?.recovered).forEach(([date, value]) => {
                recoveredDataPoints.push([new Date(date).getTime(), value as number]);
            });

            setSeries([
                { name: "Cases", data: casesDataPoints },
                { name: "Deaths", data: deathsDataPoints },
                { name: "Recovered", data: recoveredDataPoints },
            ]);
        }
    }, [data]);

    if (isLoading) return <Loader />;
    if (error) return <Error />;

    return (
        <div>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={600}
            />
        </div>
    );
}
