import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "@Components";
import { Layout, NotFound } from "@View";
import { GRAPH_PATH, HOME_PATH, NOT_FOUND_PATH } from "@Routes";

// Using lazy loading to import the contact page component from the "@View/ContactPage" module
const ContactPage = lazy(() => import('@View/ContactPage').then((module) => ({ default: module['ContactPage'] })));

// Using lazy loading to import the graph page component from the "@View/GraphPage" module
const GraphPage = lazy(() => import('@View/GraphPage').then((module) => ({ default: module['GraphPage'] })));

/**
 * The main App component that sets up the routing for the application.
 * It uses the BrowserRouter from react-router-dom for client-side routing.
 * The Layout component is wrapped around the Routes component.
 * The Routes component contains the Route components that define the paths and the components to render for each path.
 * The fallback component is set to the Loader component.
 */
export function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Route for the home path that renders the ContactPage component */}
            <Route path={HOME_PATH} element={<ContactPage />} />

            {/* Route for the graph path that renders the GraphPage component */}
            <Route path={GRAPH_PATH} element={<GraphPage />} />

            {/* Route for the not found path that renders the NotFound component */}
            <Route path={NOT_FOUND_PATH} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}