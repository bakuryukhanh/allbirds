import { Spin } from "antd";
import { FunctionComponent } from "react";

const PageLoading: FunctionComponent = () => {
  return (
    <div className="h-full w- min-h-screen bg-gray-100 flex justify-center items-center">
      <Spin></Spin>
    </div>
  );
};

export default PageLoading;
