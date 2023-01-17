import React, { useState, useEffect } from "react";

const Square = ({ index, handleClick }) => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div
      onClick={() => {
        setIsFilled(!isFilled);
        handleClick(index);
      }}
      className={`border rounded-md w-10 h-10 ${
        isFilled ? "bg-green-500" : ""
      }`}
    ></div>
  );
};

const Task = () => {
  const [dias, setDias] = useState(
    JSON.parse(localStorage.getItem("dias")) ||
      Array.from({ length: 31 }, (_, i) => [i + 1, false])
  );

  useEffect(() => {
    localStorage.setItem("dias", JSON.stringify(dias));
  }, [dias]);

  const handleClick = (index) => {
    setDias((prevDias) =>
      prevDias.map((d, i) => (i === index ? [d[0], !d[1]] : d))
    );
  };

  return (
    <div className="flex">
      {dias.map((value, i) => (
        <Square key={i} index={i} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Task;
