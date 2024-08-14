import { lazy, Suspense, useState } from 'react';
import { GRAPH_VIEW_CHART_TYPE, GRAPH_VIEW_MAP_TYPE } from '@Constants';
import { Loader } from '@Components';

const ChartView = lazy(() => import('@Components/Graph/ChartView').then((module) => ({ default: module['ChartView'] })));
const MapView = lazy(() => import('@Components/Graph/MapView').then((module) => ({ default: module['MapView'] })));

export function GraphPage() {
    const [graphView, setGraphView] = useState<string>(GRAPH_VIEW_CHART_TYPE);

    return (
        <div className='w-full h-full'>
            <div className='flex flex-row gap-4'>
                <button className={`${graphView === GRAPH_VIEW_CHART_TYPE ? "bg-neutral-600" : ""} border-0 border-neutral-600 px-6 py-2 rounded-md hover:bg-neutral-700`} onClick={() => setGraphView("chart")}>Charts</button>
                <button className={`${graphView === GRAPH_VIEW_MAP_TYPE ? "bg-neutral-600" : ""} border-0 border-neutral-600 px-6 py-2 rounded-md hover:bg-neutral-700`} onClick={() => setGraphView("map")}>Maps</button>
            </div>
            <div className='w-full h-full pt-4 md:pt-10'>
                <Suspense fallback={<Loader />}>
                    {graphView === GRAPH_VIEW_CHART_TYPE && <ChartView />}
                    {graphView === GRAPH_VIEW_MAP_TYPE && <MapView />}
                </Suspense>
            </div>
        </div>
    )
}
