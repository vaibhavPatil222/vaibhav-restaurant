import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        One of the most important features of a mobile app for restaurants is the ability to order food and drinks online and, of course, make delivery. Here it is important to make the interface as simple and straightforward as possible, which will allow the guest to order food in a few clicks. Simplification is a trend for 2023.
        </p>
        <p>
        The app should allow you to leave feedback and ratings about the restaurant, which helps to improve the quality of service and maintain the customer base. The restaurant can respond promptly to feedback, answer questions and solve problems.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;