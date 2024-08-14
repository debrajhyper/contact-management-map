import { lazy, Suspense, useState } from 'react';
import { Loader } from '@Components';
import { GRAPH_VIEW_CHART_TYPE, GRAPH_VIEW_MAP_TYPE } from '@Constants';

// Lazily load the ChartView component from the '@Components/Graph/ChartView' module
const ChartView = lazy(() => import('@Components/Graph/ChartView').then((module) => ({ default: module['ChartView'] })));

// Lazily load the MapView component from the '@Components/Graph/MapView' module
const MapView = lazy(() => import('@Components/Graph/MapView').then((module) => ({ default: module['MapView'] })));

/**
 * The GraphPage component renders a page that displays either a chart or a map view.
 * It uses the useState hook to manage the state of the graph view.
 * The default view is the chart view.
 * The user can switch between chart and map view by clicking on the corresponding button.
 */
export function GraphPage() {
    // Define the state variable 'graphView' to keep track of the current graph view
    const [graphView, setGraphView] = useState<string>(GRAPH_VIEW_CHART_TYPE);

    return (
        <div className='w-full h-full'>
            {/* Render a flex container with two buttons */}
            <div className='flex flex-row gap-4'>
                <button
                    // Set the button's style based on the current graph view
                    className={`${graphView === GRAPH_VIEW_CHART_TYPE ? "bg-neutral-600 text-white" : ""} border-0 border-neutral-600 px-6 py-2 rounded-md hover:bg-neutral-700`}
                    // Update the graph view to 'chart' when the button is clicked
                    onClick={() => setGraphView("chart")}
                >
                    Charts
                </button>
                <button
                    // Set the button's style based on the current graph view
                    className={`${graphView === GRAPH_VIEW_MAP_TYPE ? "bg-neutral-600 text-white" : ""} border-0 border-neutral-600 px-6 py-2 rounded-md hover:bg-neutral-700`}
                    // Update the graph view to 'map' when the button is clicked
                    onClick={() => setGraphView("map")}
                >
                    Maps
                </button>
            </div>
            {/* Render a container with the selected graph view */}
            <div className='w-full h-full pt-4 md:pt-10'>
                <Suspense fallback={<Loader />}>
                    {/* Render the ChartView component if the graph view is the chart view */}
                    {graphView === GRAPH_VIEW_CHART_TYPE && <ChartView />}
                    {/* Render the MapView component if the graph view is the map view */}
                    {graphView === GRAPH_VIEW_MAP_TYPE && <MapView />}
                </Suspense>
            </div>
        </div>
    )
}