import { useEffect, useState } from "react";

export const useScrollHandler = () => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: React.BaseSyntheticEvent | Event) => {
    if (
      e.target.documentElement.scrollHeight <
      e.target.documentElement.scrollTop + window.innerHeight + 1
    )
      setPage((prevState: number) => prevState + 1);
  };

  return page;
};
