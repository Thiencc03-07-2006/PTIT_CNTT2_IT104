import axios from "axios";
export default function BlockModel({
  blockId,
  setBlockId,
}: {
  blockId: string | number | null;
  setBlockId: React.Dispatch<React.SetStateAction<null | number | string>>;
}) {
  const blockItem = async () => {
    try {
      await axios.patch(`http://localhost:3000/posts/${blockId}`, {
        status: false,
      });
      setBlockId(null);
    } catch (error) {
      console.error("Loi khi chan: ", error);
    }
  };
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] bg-[#000000cc]">
      <div className="flex flex-col bg-white p-[10px] gap-[10px]">
        <div className="flex justify-between">
          <h3 className="text-2xl">
            <strong>Xac nhan</strong>
          </h3>
          <button onClick={() => setBlockId(null)}>
            <strong>✕</strong>
          </button>
        </div>
        <div>
          <p>Ban co chac chan muon ngung xuat ban bai viet</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setBlockId(null)}
            className="p-[10px] rounded-[5px] border-1"
          >
            Huy
          </button>
          <button
            onClick={() => blockItem()}
            className="p-[10px] rounded-[5px] bg-blue-500 text-white"
          >
            Xac nhan
          </button>
        </div>
      </div>
    </div>
  );
}
