import React, { Suspense } from "react";
import ErrorBoundary from "../lifecycle-methods/ErrorBoundary";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Fallback from "./components/fallback/Fallback";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <Suspense fallback={<Fallback />}>
          <h2>Posts</h2>
          <Posts />
          <h2>Users</h2>
          <Users />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
