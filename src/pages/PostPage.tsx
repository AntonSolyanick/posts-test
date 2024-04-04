import { FC } from "react";
import { Link } from "react-router-dom";
import { postApi } from "../shared/PostService";
import { useParams } from "react-router";

const PostPage: FC = () => {
  const params = useParams();
  const postId = Number(params.id);

  const { data } = postApi.useFetchOnePostQuery(postId);

  return (
    <>
      <section className="post--container post--page">
        <div className="post--info">
          <h3>Post №{data?.id}</h3>
          <h2>User Id:{data?.userId}</h2>
        </div>
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>
      </section>
      <Link to="/">
        <button className="button">Back to main page</button>
      </Link>
    </>
  );
};

export default PostPage;
