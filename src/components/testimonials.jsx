import React, { useState } from "react";
import Card from "./card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  function surpriseMeHandler() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <BsChevronRight />
        </button>
      </div>
      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseMeHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
