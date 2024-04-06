import { FC } from "react";
import { Link } from "react-router-dom";

import Ipost from "../shared/interfaces/Iposts";

const Post: FC<Ipost> = ({ id, title, body }) => {
  return (
    <>
      <div className="post--container">
        <h3 className="post--number">Post №{id}</h3>
        <h2>{title}</h2>
        <p className="text--short">{body}</p>
        <Link to={`/post/${id}`}>
          <button className="button">See details</button>
        </Link>
      </div>
    </>
  );
};

export default Post;
