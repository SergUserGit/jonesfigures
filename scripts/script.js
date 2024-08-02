const planetSunInput = document.querySelector("#aspect-sun");
const planetSunDegrInput = document.querySelector("#aspect-degr-sun");
const planetSunHoursInput = document.querySelector("#aspect-hours-sun");
const planetSunHouseInput = document.querySelector("#aspect-house-sun");

const planetMonInput = document.querySelector("#aspect-moon");
const planetMonDegrInput = document.querySelector("#aspect-degr-moon");
const planetMonHoursInput = document.querySelector("#aspect-hours-moon");
const planetMonHouseInput = document.querySelector("#aspect-house-moon");

const planetMerkInput = document.querySelector("#aspect-merk");
const planetMerkDegrInput = document.querySelector("#aspect-degr-merk");
const planetMerkHoursInput = document.querySelector("#aspect-hours-merk");
const planetMerkHouseInput = document.querySelector("#aspect-house-merk");

const planetVenerInput = document.querySelector("#aspect-vener");
const planetVenerDegrInput = document.querySelector("#aspect-degr-vener");
const planetVenerHoursInput = document.querySelector("#aspect-hours-vener");
const planetVenerHouseInput = document.querySelector("#aspect-house-vener");

const planetMarsInput = document.querySelector("#aspect-mars");
const planetMarsDegrInput = document.querySelector("#aspect-degr-mars");
const planetMarsHoursInput = document.querySelector("#aspect-hours-mars");
const planetMarsHouseInput = document.querySelector("#aspect-house-mars");

const planetUpiterInput = document.querySelector("#aspect-yupiter");
const planetUpiterDegrInput = document.querySelector("#aspect-degr-yupiter");
const planetUpiterHoursInput = document.querySelector("#aspect-hours-yupiter");
const planetUpiterHouseInput = document.querySelector("#aspect-house-yupiter");

const planetSaturnInput = document.querySelector("#aspect-saturn");
const planetSaturnDegrInput = document.querySelector("#aspect-degr-saturn");
const planetSaturnHoursInput = document.querySelector("#aspect-hours-saturn");
const planetSaturnHouseInput = document.querySelector("#aspect-house-saturn");

const planetUranInput = document.querySelector("#aspect-uran");
const planetUranDegrInput = document.querySelector("#aspect-degr-uran");
const planetUranHoursInput = document.querySelector("#aspect-hours-uran");
const planetUranHouseInput = document.querySelector("#aspect-house-uran");

const planetNeptunInput = document.querySelector("#aspect-neptun");
const planetNeptunDegrInput = document.querySelector("#aspect-degr-neptun");
const planetNeptunHoursInput = document.querySelector("#aspect-hours-neptun");
const planetNeptunHouseInput = document.querySelector("#aspect-house-neptun");

const planetPlutonInput = document.querySelector("#aspect-pluton");
const planetPlutonDegrInput = document.querySelector("#aspect-degr-pluton");
const planetPlutonHoursInput = document.querySelector("#aspect-hours-pluton");
const planetPlutonHouseInput = document.querySelector("#aspect-house-pluton");

const buttonCalc = document.querySelector(".button-calc");

buttonCalc.addEventListener("click", onClickButtonCalc);

const degrValue = document.querySelector(".degr-value");

//

function getDatePlanet(znZodInput, degrInput, hoursInput, houseInput) {
  const newObj = {
    znValue: znZodInput.options[znZodInput.value - 1].textContent,
    degrValue: parseInt(degrInput.value),
    hoursValue: parseInt(hoursInput.value),
    houseValue: parseInt(houseInput.value),
  };
  return newObj;
}

function onClickButtonCalc() {
  const objSun = getDatePlanet(
    planetSunInput,
    planetSunDegrInput,
    planetSunHoursInput,
    planetSunHouseInput
  );

  const objMon = getDatePlanet(
    planetMonInput,
    planetMonDegrInput,
    planetMonHoursInput,
    planetMonHouseInput
  );

  const objMerk = getDatePlanet(
    planetMerkInput,
    planetMerkDegrInput,
    planetMerkHoursInput,
    planetMerkHouseInput
  );

  const objVener = getDatePlanet(
    planetVenerInput,
    planetVenerDegrInput,
    planetVenerHoursInput,
    planetVenerHouseInput
  );

  const objMars = getDatePlanet(
    planetMarsInput,
    planetMarsDegrInput,
    planetMarsHoursInput,
    planetMarsHouseInput
  );

  const objUpiter = getDatePlanet(
    planetUpiterInput,
    planetUpiterDegrInput,
    planetUpiterHoursInput,
    planetUpiterHouseInput
  );

  const objSaturn = getDatePlanet(
    planetSaturnInput,
    planetSaturnDegrInput,
    planetSaturnHoursInput,
    planetSaturnHouseInput
  );

  const objUran = getDatePlanet(
    planetUranInput,
    planetUranDegrInput,
    planetUranHoursInput,
    planetUranHouseInput
  );

  const objNeptun = getDatePlanet(
    planetNeptunInput,
    planetNeptunDegrInput,
    planetNeptunHoursInput,
    planetNeptunHouseInput
  );

  const opjPluton = getDatePlanet(
    planetPlutonInput,
    planetPlutonDegrInput,
    planetPlutonHoursInput,
    planetPlutonHouseInput
  );

  let arrayDate = [];

  const dateOne = {
    planet: "Сонце",
    znZod: objSun.znValue,
    degr: objSun.degrValue,
    hours: objSun.hoursValue,
    house: objSun.houseValue,
    fulDegr: getDegrZnZodiak(objSun.znValue) + objSun.degrValue,
  };
  arrayDate.push(dateOne);

  const dateTwo = {
    planet: "Місяць",
    znZod: objMon.znValue,
    degr: objMon.degrValue,
    hours: objMon.hoursValue,
    house: objMon.houseValue,
    fulDegr: getDegrZnZodiak(objMon.znValue) + objMon.degrValue,
  };
  arrayDate.push(dateTwo);

  const dateThree = {
    planet: "Меркурій",
    znZod: objMerk.znValue,
    degr: objMerk.degrValue,
    hours: objMerk.hoursValue,
    house: objMerk.houseValue,
    fulDegr: getDegrZnZodiak(objMerk.znValue) + objMerk.degrValue,
  };
  arrayDate.push(dateThree);

  const dateFour = {
    planet: "Венера",
    znZod: objVener.znValue,
    degr: objVener.degrValue,
    hours: objVener.hoursValue,
    house: objVener.houseValue,
    fulDegr: getDegrZnZodiak(objVener.znValue) + objVener.degrValue,
  };
  arrayDate.push(dateFour);

  const dateFive = {
    planet: "Марс",
    znZod: objMars.znValue,
    degr: objMars.degrValue,
    hours: objMars.hoursValue,
    house: objMars.houseValue,
    fulDegr: getDegrZnZodiak(objMars.znValue) + objMars.degrValue,
  };
  arrayDate.push(dateFive);

  const dateSix = {
    planet: "Юпітер",
    znZod: objUpiter.znValue,
    degr: objUpiter.degrValue,
    hours: objUpiter.hoursValue,
    house: objUpiter.houseValue,
    fulDegr: getDegrZnZodiak(objUpiter.znValue) + objUpiter.degrValue,
  };
  arrayDate.push(dateSix);

  const dateSeven = {
    planet: "Сатурн",
    znZod: objSaturn.znValue,
    degr: objSaturn.degrValue,
    hours: objSaturn.hoursValue,
    house: objSaturn.houseValue,
    fulDegr: getDegrZnZodiak(objSaturn.znValue) + objSaturn.degrValue,
  };
  arrayDate.push(dateSeven);

  const dateEight = {
    planet: "Уран",
    znZod: objUran.znValue,
    degr: objUran.degrValue,
    hours: objUran.hoursValue,
    house: objUran.houseValue,
    fulDegr: getDegrZnZodiak(objUran.znValue) + objUran.degrValue,
  };
  arrayDate.push(dateEight);

  const dateNine = {
    planet: "Нептун",
    znZod: objNeptun.znValue,
    degr: objNeptun.degrValue,
    hours: objNeptun.hoursValue,
    house: objNeptun.houseValue,
    fulDegr: getDegrZnZodiak(objNeptun.znValue) + objNeptun.degrValue,
  };
  arrayDate.push(dateNine);

  const dateTen = {
    planet: "Плутон",
    znZod: opjPluton.znValue,
    degr: opjPluton.degrValue,
    hours: opjPluton.hoursValue,
    house: opjPluton.houseValue,
    fulDegr: getDegrZnZodiak(opjPluton.znValue) + opjPluton.degrValue,
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

  /* const firstElem = arrayHouse[0];
  const lastElem = arrayHouse[arrayHouse.length - 1];

  const firstDegr = firstElem.arrayDetail[0].fulDegr;
  const lastDegr =
    lastElem.arrayDetail[lastElem.arrayDetail.length - 1].fulDegr;
  const difDegr = lastDegr - firstDegr;
  console.log(difDegr);*/

  let arrayDegr = [];

  for (let n = 0; n < arrayHouse.length; n += 1) {
    const curElem = arrayHouse[n];
    const curArray = curElem.arrayDetail;

    for (let b = 0; b < curArray.length; b += 1) {
      curElemPlanet = curArray[b];
      arrayDegr.push(curElemPlanet.fulDegr);
    }
  }

  arrayDegr.sort((a, b) => a - b);
  const difDegr = arrayDegr[arrayDegr.length - 1] - arrayDegr[0];

  degrValue.textContent = String(difDegr);
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
