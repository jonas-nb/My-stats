import React, { useEffect, useState } from "react";

const Horas = () => {
  let [liveTime, setLiveTime] = useState(new Date().toLocaleTimeString());

  //atualiza hora no DOM
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(new Date().toTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //irá setar o dia conforme o método
  const data = new Date();
  const getDia = data.getDay();

  let dia;

  switch (getDia) {
    case 0:
      dia = "Dom";
      break;
    case 1:
      dia = "Seg";
      break;
    case 2:
      dia = "Ter";
      break;
    case 3:
      dia = "Qua";
      break;
    case 4:
      dia = "Qui";
      break;
    case 5:
      dia = "Sex";
      break;
    case 6:
      dia = "Sáb";
      break;
    default:
      break;
  }

  return (
    <div>
      <div>{dia}</div>
      <div>{liveTime.slice(0, 5)}</div>
    </div>
  );
};

export default Horas;
