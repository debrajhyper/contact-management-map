import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@View";
import { Loader } from "@Components";
import { GRAPH_PATH, HOME_PATH, NOT_FOUND_PATH } from "@Routes";
import { NotFound } from '../view/NotFound';

const ContactPage = lazy(() => import('@View/ContactPage').then((module) => ({ default: module['ContactPage'] })));
const GraphPage = lazy(() => import('@View/GraphPage').then((module) => ({ default: module['GraphPage'] })));

export function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={HOME_PATH} element={<ContactPage />} />
            <Route path={GRAPH_PATH} element={<GraphPage />} />
            <Route path={NOT_FOUND_PATH} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}