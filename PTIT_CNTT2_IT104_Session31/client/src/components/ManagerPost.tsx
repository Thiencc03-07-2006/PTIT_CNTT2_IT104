import { useEffect, useState } from "react";
import List from "./List";
import AddModel from "./AddModel";
import BlockModel from "./BlockModel";
import axios from "axios";
interface post {
  id: number | string;
  title: string;
  img: string;
  createAt: string;
  status: boolean;
  content: string;
}
export default function ManagerPost() {
  const [posts, setPosts] = useState<post[]>([]);
  const [blockId, setBlockId] = useState<string | number | null>(null);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [mode, setMode] = useState<boolean | string | number>(false);
  const getPost = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Loi khi tai du lieu: ", error);
    }
  };
  useEffect(() => {
    getPost();
  });
  useEffect(() => {
    if (isOpenModel === false) {
      setMode(false);
    }
  }, [isOpenModel]);
  return (
    <div>
      <List
        posts={posts}
        setBlockId={setBlockId}
        setIsOpenModel={setIsOpenModel}
        setMode={setMode}
      />
      {isOpenModel && (
        <AddModel posts={posts} setIsOpenModel={setIsOpenModel} mode={mode} />
      )}
      {blockId !== null && (
        <BlockModel blockId={blockId} setBlockId={setBlockId} />
      )}
    </div>
  );
}
