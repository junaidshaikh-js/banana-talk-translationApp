const userInput = document.querySelector("#user-input");

const translateBtn = document.querySelector(".translate-btn");

const outputBox = document.querySelector(".translated-text");

const URL = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  const textArr = text.split();
  const urlString = `${URL}?text=${textArr.join("%20")}`;

  return urlString;
}

const translateText = () => {
  const userText = userInput.value;

  if (userText == "") {
    alert("Please Enter Some Text");
  } else {
    const urlString = constructUrl(userText);

    fetch(urlString)
      .then((response) => response.json())
      .then((data) => {
        const translatedText = data.contents.translated;
        outputBox.innerHTML = translatedText;
      })
      .catch((e) => {
        alert(`error occured: ${e} 
  Please try again after some time.`);
      });
  }
};

translateBtn.addEventListener("click", translateText);
