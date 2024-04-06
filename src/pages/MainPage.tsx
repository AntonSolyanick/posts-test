import { FC, useEffect, useState } from "react";

import Post from "../widgets/Post";
import { useScrollHandler } from "../shared/hooks/useScrollHandler";
import { postApi } from "../shared/PostService";
import Ipost from "../shared/interfaces/Iposts";

const MainPage: FC = () => {
  const [posts, setPosts] = useState<Ipost[]>([]);
  const page = useScrollHandler();
  const { data } = postApi.useFetchAllPostsQuery(page);

  const a = [1, 2, 3];
  const b = [3, 4];

  useEffect(() => {
    data &&
      setPosts((prevState: Ipost[]) => {
        const set = new Set([...prevState, ...data]);
        const newPosts: Ipost[] = Array.from(set);
        return newPosts;
      });
  }, [data]);

  return (
    <section className="wrapper">
      {posts?.map((el: Ipost) => (
        <Post
          key={el.id}
          userId={el.userId}
          title={el.title}
          body={el.body}
          id={el.id}
        />
      ))}
    </section>
  );
};

export default MainPage;
