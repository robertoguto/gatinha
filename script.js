const buttonNo = document.querySelector("#button-no");
const buttonYes = document.querySelector("#button-yes");

buttonNo.addEventListener('mouseover', randomButton);
buttonNo.addEventListener('click', randomButton);


function randomButton() {
  const top = (Math.floor((Math.random() * 100)) + 1);
  const bottom = (Math.floor((Math.random() * 100)) + 1);
  const left = (Math.floor((Math.random() * 100)) + 1);
  const right = (Math.floor((Math.random() * 100)) + 1);

  buttonNo.style.top = `${top}%`;
  buttonNo.style.bottom = `${bottom}%`;
  buttonNo.style.left = `${left}%`;
  buttonNo.style.right = `${right}%`;
}

buttonYes.addEventListener("click", () => {
  buttonNo.style.top = `0`;
  buttonNo.style.bottom = `initial`;
  buttonNo.style.left = `initial`;
  buttonNo.style.right = `30px`;
  alert("Boa Monstro!!!! Espero ansioso pelo dia 16/07/2028. Te espero no altar.");
  const audio = new Audio('./marcha.mp3');
  audio.play();
});
