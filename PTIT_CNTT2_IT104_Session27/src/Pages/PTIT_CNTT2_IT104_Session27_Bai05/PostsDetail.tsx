import { useParams } from "react-router-dom";
import { listPost } from "../../components/PostData";
export default function PostsDetail() {
  const { id } = useParams();
  const post = listPost.find((t) => t.id === id);
  if (!post) {
    return <h2>404</h2>;
  } else {
    return (
      <div className="flex flex-col gap-[10px]">
        <h2>
          <strong>{post.title}</strong>
        </h2>
        <p>{post.content}</p>
      </div>
    );
  }
}
