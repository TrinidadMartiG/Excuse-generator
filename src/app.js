/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let quien = [
    "Mi compañer@",
    "Will Smith",
    "Mi conejo",
    "El payaso IT",
    "Un marciano",
    "Rambo"
  ];
  let como = ["borro", "quito", "exploto", "rompio", "bofeteo", "modifico"];
  let que = [
    "mi aplicación",
    "mi código",
    "la modificación de la nueva branch",
    "el commit",
    "el link para el css"
  ];
  let cuando = [
    "cuando venia para aca",
    "ayer por la noche",
    "mientras intentaba hacer git push",
    "cuando entre al baño",
    "cuando terminaba la app",
    "mientras instalaba el boilerplate"
  ];

  let quienRandom = Math.floor(Math.random() * quien.length);
  let comoRandom = Math.floor(Math.random() * como.length);
  let queRandom = Math.floor(Math.random() * que.length);
  let cuandoRandom = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienRandom] +
    " " +
    como[comoRandom] +
    " " +
    que[queRandom] +
    " " +
    cuando[cuandoRandom]
  );
};
