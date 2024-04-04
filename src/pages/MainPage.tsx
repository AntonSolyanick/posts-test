import { FC, useEffect, useState } from "react";

import Post from "../widgets/Post";
import { useScrollHandler } from "../shared/hooks/useScrollHandler";
import { useAppSelector } from "../app/store/hooks/redux";
import { postApi } from "../shared/PostService";
import Ipost from "../shared/interfaces/Iposts";

const MainPage: FC = () => {
  const [posts, setPosts] = useState<any>([]);
  const page = useScrollHandler();
  const { data } = postApi.useFetchAllPostsQuery(page);

  useEffect(() => {
    data && setPosts((prevState: any) => [...prevState, ...data]);
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
