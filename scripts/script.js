const buttonCalc = document.querySelector(".button-calc");

buttonCalc.addEventListener("click", onClickButtonCalc);

function onClickButtonCalc() {
  let arrayDate = [];

  const dateOne = {
    planet: "Сонце",
    znZod: "Рак",
    degr: 13,
    hours: 57,
    house: 10,
    fulDegr: getDegrZnZodiak("Рак") + 13,
  };
  arrayDate.push(dateOne);

  const dateTwo = {
    planet: "Місяць",
    znZod: "Рак",
    degr: 4,
    hours: 9,
    house: 10,
    fulDegr: getDegrZnZodiak("Рак") + 4,
  };
  arrayDate.push(dateTwo);

  const dateThree = {
    planet: "Меркурій",
    znZod: "Лев",
    degr: 5,
    hours: 56,
    house: 11,
    fulDegr: getDegrZnZodiak("Лев") + 5,
  };
  arrayDate.push(dateThree);

  const dateFour = {
    planet: "Венера",
    znZod: "Лев",
    degr: 23,
    hours: 52,
    house: 12,
    fulDegr: getDegrZnZodiak("Лев") + 23,
  };
  arrayDate.push(dateFour);

  const dateFive = {
    planet: "Марс",
    znZod: "Козеріг",
    degr: 18,
    hours: 48,
    house: 4,
    fulDegr: getDegrZnZodiak("Козеріг") + 18,
  };
  arrayDate.push(dateFive);

  const dateSix = {
    planet: "Юпітер",
    znZod: "Риби",
    degr: 22,
    hours: 47,
    house: 7,
    fulDegr: getDegrZnZodiak("Риби") + 22,
  };
  arrayDate.push(dateSix);

  const dateSeven = {
    planet: "Сатурн",
    znZod: "Стрілець",
    degr: 3,
    hours: 51,
    house: 3,
    fulDegr: getDegrZnZodiak("Стрілець") + 3,
  };
  arrayDate.push(dateSeven);

  const dateEight = {
    planet: "Уран",
    znZod: "Стрілець",
    degr: 19,
    hours: 24,
    house: 4,
    fulDegr: getDegrZnZodiak("Стрілець") + 19,
  };
  arrayDate.push(dateEight);

  const dateNine = {
    planet: "Нептун",
    znZod: "Козеріг",
    degr: 4,
    hours: 9,
    house: 4,
    fulDegr: getDegrZnZodiak("Козеріг") + 4,
  };
  arrayDate.push(dateNine);

  const dateTen = {
    planet: "Плутон",
    znZod: "Скорпіон",
    degr: 4,
    hours: 33,
    house: 2,
    fulDegr: getDegrZnZodiak("Скорпіон") + 4,
  };
  arrayDate.push(dateTen);

  let arrayHouse = [];

  for (let k = 1; k <= 12; k += 1) {
    const arrayOfHouse = arrayDate.filter((planetObj) => planetObj.house === k);
    if (arrayOfHouse.length !== 0) {
      arrayOfHouse.sort((a, b) => a.fulDegr - b.fulDegr);
      const newObj = {
        house: k,
        arrayDetail: arrayOfHouse,
      };
      arrayHouse.push(newObj);
    }
  }
  let counter = 1;
  for (let n = 0; n < arrayHouse.length; n += 1) {
    const curElem = arrayHouse[n];
    const curArray = curElem.arrayDetail;

    for (let b = 0; b < curArray.length; b += 1) {
      curElemPlanet = curArray[b];
      console.log(String(counter) + ". " + curElemPlanet.planet);
      counter += 1;
    }
  }
}

function getDegrZnZodiak(znZod) {
  if (znZod === "Овен") {
    return 0;
  } else if (znZod === "Тілець") {
    return 30;
  } else if (znZod === "Близнюки") {
    return 60;
  } else if (znZod === "Рак") {
    return 90;
  } else if (znZod === "Лев") {
    return 120;
  } else if (znZod === "Діва") {
    return 150;
  } else if (znZod === "Терези") {
    return 180;
  } else if (znZod === "Скорпіон") {
    return 210;
  } else if (znZod === "Стрілець") {
    return 240;
  } else if (znZod === "Козеріг") {
    return 270;
  } else if (znZod === "Водолій") {
    return 300;
  } else if (znZod === "Риби") {
    return 330;
  }
}
