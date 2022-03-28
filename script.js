const btnAdvice = document.querySelector(".dice");
const adviceP = document.querySelector("#advice");
const adviceH = document.querySelector("#adviceID");

btnAdvice.addEventListener("click", () => {
  let advice = "";
  let adviceID = "";

  fetch("https://api.adviceslip.com/advice?=", {
    method: "GET",
    headers: {},
  })
    .then((res) => res.json())
    .then((res) => {
      adviceID = res.slip.id;
      advice = res.slip.advice;
      console.log(advice, adviceID);
      adviceP.innerHTML = `"${advice}"`;
      adviceH.innerHTML = adviceID;
    })
    .catch((err) => {
      console.error(err);
    });
});
