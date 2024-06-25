const image = document.querySelector(".main__image");
const question = document.querySelector(".main__question");
const btnOne = document.querySelector("#btn_one");
const btnTwo = document.querySelector("#btn_two");

btnOne.addEventListener("click", () => {
  image.setAttribute("src", "./images/2dOV-1.gif");
  question.textContent = "Will they be happy?";
  btnOne.textContent = "Yas, but...";
  btnTwo.textContent = "No, because...";
  btnOne.addEventListener("click", () => {
    image.setAttribute("src", "./images/2.png");
    question.textContent = "Stefan will lose his brother";
    btnOne.classList.add("btn__off");
    btnTwo.classList.add("btn__off");
  });
  btnTwo.addEventListener("click", () => {
    image.setAttribute("src", "./images/3.jpg");
    question.textContent = "Because she'll cheat on him with Damon";
    btnOne.classList.add("btn__off");
    btnTwo.classList.add("btn__off");
  });
});

btnTwo.addEventListener("click", () => {
  image.setAttribute(
    "src",
    "./images/delena-damon-salvatore-elena-gilbert-kiss-loop-whhypcfjfrsvr5jp.webp"
  );
  question.textContent = "Will they be happy?";
  btnOne.textContent = "Yas, but...";
  btnTwo.textContent = "No, because...";
  btnOne.addEventListener("click", () => {
    image.setAttribute("src", "./images/1011.jpg");
    question.textContent = "Damon will become human";
    btnOne.classList.add("btn__off");
    btnTwo.classList.add("btn__off");
  });
  btnTwo.addEventListener("click", () => {
    image.setAttribute("src", "./images/4.png");
    question.textContent = "Because Elena will die";
    btnOne.classList.add("btn__off");
    btnTwo.classList.add("btn__off");
  });
});
