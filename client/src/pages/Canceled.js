import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Button from "../components/ui/Button";

const Canceled = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-red-500">
      {/* <img src="./assets/order_placed.png" alt="order placed" /> */}
      <XCircleIcon className="w-40" />
      <h2 className=" mt-8 mb-20 text-3xl capitalize tracking-tight">
        your order has been canceled
      </h2>
      <Button
        text="Go to home"
        className=" bg-white text-black ring-1 ring-black hover:bg-gray-100"
        to="/"
      />
    </div>
  );
};

export default Canceled;