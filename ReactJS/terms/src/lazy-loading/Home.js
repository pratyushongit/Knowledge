import { Suspense, lazy } from "react";
import Fallback from "./Fallback";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

const Heavy = lazy(() => import("./Heavy"));

const Home = () => {
  return (
    <ErrorBoundary
      fallback={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <Suspense fallback={<Fallback />}>
        <Heavy />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Home;
