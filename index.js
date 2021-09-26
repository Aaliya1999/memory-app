document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "butterfly1",
      img: "./images/butterfly1.png",
    },
    {
      name: "butterfly2",
      img: "./images/butterfly2.png",
    },
    {
      name: "butterfly3",
      img: "./images/butterfly3.png",
    },
    {
      name: "butterfly4",
      img: "./images/butterfly4.png",
    },
    {
      name: "butterfly5",
      img: "./images/butterfly5.png",
    },
    {
      name: "butterfly6",
      img: "./images/butterfly6.png",
    },
    {
      name: "butterfly7",
      img: "./images/butterfly7.png",
    },
    {
      name: "butterfly8",
      img: "./images/butterfly8.png",
    },
    {
      name: "butterfly1",
      img: "./images/butterfly1.png",
    },
    {
      name: "butterfly2",
      img: "./images/butterfly2.png",
    },
    {
      name: "butterfly3",
      img: "./images/butterfly3.png",
    },
    {
      name: "butterfly4",
      img: "./images/butterfly4.png",
    },
    {
      name: "butterfly5",
      img: "./images/butterfly5.png",
    },
    {
      name: "butterfly6",
      img: "./images/butterfly6.png",
    },
    {
      name: "butterfly7",
      img: "./images/butterfly7.png",
    },
    {
      name: "butterfly8",
      img: "./images/butterfly8.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const result = document.querySelector("#result");
  const win = document.querySelector("#win");
  let chosenCard = [];
  let chosenId = [];
  let cardWon = [];

  // create grid
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let tile = document.createElement("img");
      tile.classList.add("square");
      tile.setAttribute("src", "./images/grid-img.png");
      tile.setAttribute("data-id", i);
      tile.addEventListener("click", flipCard);
      grid.appendChild(tile);
    }
  }

  function checkforMatch() {
    var cards = document.querySelectorAll("img");
    const option1Id = chosenId[0];
    const option2Id = chosenId[1];
    if (chosenCard[0] === chosenCard[1]) {
      //alert("You found a match!");
      playAudio("audio/win.mp3");
      cards[option1Id].setAttribute("src", "./images/check-6380867.png");
      cards[option2Id].setAttribute("src", "./images/check-6380867.png");
      cardWon.push(chosenCard);
    } else {
      //alert("Sorry try again");
      playAudio("audio/lose.wav");
      cards[option1Id].setAttribute("src", "./images/grid-img.png");
      cards[option2Id].setAttribute("src", "./images/grid-img.png");
    }
    chosenCard = [];
    chosenId = [];
    result.textContent = cardWon.length;
    if (cardWon.length === cardArray.length / 2) {
      playAudio("audio/winner.wav");
      win.textContent = "Congratulation! You found all the match";
    }
  }

  function flipCard() {
    playAudio("audio/click.wav");
    var cardId = this.getAttribute("data-id");
    chosenCard.push(cardArray[cardId].name);
    chosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (chosenCard.length === 2) {
      setTimeout(checkforMatch, 500);
    }
  }

  function playAudio(fileName) {
    var audio = new Audio(fileName);
    audio.play();
  }
  createBoard();
});
