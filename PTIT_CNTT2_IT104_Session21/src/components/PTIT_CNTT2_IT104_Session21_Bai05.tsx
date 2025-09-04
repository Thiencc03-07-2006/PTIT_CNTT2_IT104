import React from "react";
export default function PTIT_CNTT2_IT104_Session21_Bai05() {
  return (
    <div>
      <h3>Bai 5</h3>
      <div className="p-[10px] rounded-[10px] bg-blue-100 w-[200px]">
        <div className="bg-blue-300 p-[10px] relative h-[100px]">
          <p>Relative parent</p>
          <div className="bg-blue-500 p-[10px] rounded-[10px] absolute bottom-0 left-0">
            <p>Absolute child</p>
          </div>
        </div>
      </div>
    </div>
  );
}
