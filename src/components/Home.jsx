import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/img12.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl text-orange-400">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor text-orange-500">
        Vaibhav Restaurant offers delightful Indian cuisine with impeccable service. The flavors are authentic, ambiance cozy, and staff friendly. A must-visit for anyone craving an exquisite dining experience.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;