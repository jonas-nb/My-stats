import React, { useEffect, useState } from "react";

const Horas = () => {
  let [getLiveMoment, setGetLiveMoment] = useState();
  useEffect(() => HoraMomento(), [getLiveMoment]);

  const data = new Date();

  //irá setar o dia conforme o método
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

  function HoraMomento() {
    let hora = data.getHours();
    hora < 10 ? (hora = `0${hora}`) : hora;

    let minuto = data.getMinutes();
    minuto < 10 ? (minuto = `0${minuto}`) : minuto;

    setGetLiveMoment(`${hora}:${minuto}`);
    console.log(getLiveMoment);
  }

  return (
    <div>
      <div>{dia}</div>
      <div>{getLiveMoment}</div>
    </div>
  );
};

export default Horas;
