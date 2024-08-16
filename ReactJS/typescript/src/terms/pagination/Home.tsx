import { useCallback, useMemo, useState } from "react";
import useFetchTS from "../custom-hooks/UseFetchTS";
import Pagination from "./pagination/Pagination";
import { IPostsItem } from "./types";

const Home = () => {
  const { loading, data, error } = useFetchTS<IPostsItem[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const count = useMemo(() => {
    return Math.ceil((data?.length ?? 0) / itemsPerPage);
  }, [data, itemsPerPage]);

  const setPageCallback = useCallback(
    (value: number) => {
      if (value >= 1 && value <= count) setPage(value);
    },
    [count]
  );

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          {data
            .slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
            .map((el) => (
              <p key={el.id}>Title: {el.title}</p>
            ))}
          <Pagination
            count={count}
            disabled={false}
            hideNextButton={false}
            hidePrevButton={false}
            page={page}
            onChange={setPageCallback}
            showFirstButton={true}
            showLastButton={true}
          />
          <select
            name="ipp"
            id="ipp"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(+e.target.value)}
          >
            <option value="">Select</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      )}
    </>
  );
};

export default Home;
