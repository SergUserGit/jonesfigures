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
const titleRange0_30 = document.querySelector(".title_range_0_30");
const titleRange30_60 = document.querySelector(".title_range_30_60");
const titleRange60_90 = document.querySelector(".title_range_60_90");
const titleRange90_120 = document.querySelector(".title_range_90_120");
const titleRange120_150 = document.querySelector(".title_range_120_150");
const titleRange150_180 = document.querySelector(".title_range_150_180");
const titleRange180_210 = document.querySelector(".title_range_180_210");
const titleRange210_240 = document.querySelector(".title_range_210_240");
const titleRange240_270 = document.querySelector(".title_range_240_270");
const titleRange270_300 = document.querySelector(".title_range_270_300");
const titleRange300_330 = document.querySelector(".title_range_300_330");
const titleRange330_360 = document.querySelector(".title_range_330_360");
const titlePercentOne = document.querySelector(".title_percent_one");
const titlePercentTwo = document.querySelector(".title_percent_two");
const titlePercentThree = document.querySelector(".title_percent_three");
const titlePercentFour = document.querySelector(".title_percent_four");
const titlePercentFive = document.querySelector(".title_percent_five");
const titlePercentSix = document.querySelector(".title_percent_six");

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

  let totalArray = [];

  for (let n = 0; n < arrayHouse.length; n += 1) {
    const curElem = arrayHouse[n];
    const arDet = curElem.arrayDetail;
    for (let t = 0; t < arDet.length; t += 1) {
      const curElDet = arDet[t];
      newObj = {
        planet: curElDet.planet,
        fulDegr: curElDet.fulDegr,
        hours: curElDet.hours,
        znZod: curElDet.znZod,
        degr: curElDet.degr,
      };
      totalArray.push(newObj);
    }
  }

  let arrayDiferent = [];

  for (let i = 1; i < totalArray.length; i += 1) {
    const elOne = totalArray[i];
    const elTwo = totalArray[i - 1];
    if (elOne.fulDegr >= elTwo.fulDegr) {
      arrayDiferent.push(elOne.fulDegr - elTwo.fulDegr);
    } else {
      arrayDiferent.push(
        getDifZnZod(elTwo.znZod, elOne.znZod, elTwo.degr, elOne.degr)
      );
    }
  }

  const elOne = totalArray[0];
  const elTwo = totalArray[totalArray.length - 1];
  if (elOne.fulDegr >= elTwo.fulDegr) {
    arrayDiferent.push(elOne.fulDegr - elTwo.fulDegr);
  } else {
    arrayDiferent.push(
      getDifZnZod(elTwo.znZod, elOne.znZod, elTwo.degr, elOne.degr)
    );
  }

  /* arrayDiferent.sort((a, b) => a - b);*/

  const inValue = 0;
  const sumValue = arrayDiferent.reduce((accum, cur) => accum + cur, inValue);

  degrValue.textContent = arrayDiferent.join("-") + ":" + String(sumValue);

  const objRangePlanet = {
    range_0_30: 0,
    range_30_60: 0,
    range_60_90: 0,
    range_90_120: 0,
    range_120_150: 0,
    range_150_180: 0,
    range_180_210: 0,
    range_210_240: 0,
    range_240_270: 0,
    range_270_300: 0,
    range_300_330: 0,
    range_330_360: 0,
  };
  for (let k = 0; k < arrayDiferent.length; k += 1) {
    const curElem = arrayDiferent[k];
    if (curElem >= 0 && curElem < 30) {
      objRangePlanet.range_0_30 += 1;
    } else if (curElem >= 30 && curElem < 60) {
      objRangePlanet.range_30_60 += 1;
    } else if (curElem >= 60 && curElem < 90) {
      objRangePlanet.range_60_90 += 1;
    } else if (curElem >= 90 && curElem < 120) {
      objRangePlanet.range_90_120 += 1;
    } else if (curElem >= 120 && curElem < 150) {
      objRangePlanet.range_120_150 += 1;
    } else if (curElem >= 150 && curElem < 180) {
      objRangePlanet.range_150_180 += 1;
    } else if (curElem >= 180 && curElem < 210) {
      objRangePlanet.range_180_210 += 1;
    } else if (curElem >= 210 && curElem < 240) {
      objRangePlanet.range_210_240 += 1;
    } else if (curElem >= 240 && curElem < 270) {
      objRangePlanet.range_240_270 += 1;
    } else if (curElem >= 270 && curElem < 300) {
      objRangePlanet.range_270_300 += 1;
    } else if (curElem >= 300 && curElem < 330) {
      objRangePlanet.range_300_330 += 1;
    } else {
      objRangePlanet.range_330_360 += 1;
    }
  }

  titleRange0_30.textContent =
    "Від 0 до 30: " + String(objRangePlanet.range_0_30);

  titleRange30_60.textContent =
    "Від 30 до 60: " + String(objRangePlanet.range_30_60);

  titleRange60_90.textContent =
    "Від 60 до 90: " + String(objRangePlanet.range_60_90);

  titleRange90_120.textContent =
    "Від 90 до 120: " + String(objRangePlanet.range_90_120);

  titleRange120_150.textContent =
    "Від 120 до 150: " + String(objRangePlanet.range_120_150);

  titleRange150_180.textContent =
    "Від 150 до 180: " + String(objRangePlanet.range_150_180);

  titleRange180_210.textContent =
    "Від 180 до 210: " + String(objRangePlanet.range_180_210);

  titleRange210_240.textContent =
    "Від 210 до 240: " + String(objRangePlanet.range_210_240);

  titleRange240_270.textContent =
    "Від 240 до 270: " + String(objRangePlanet.range_240_270);

  titleRange270_300.textContent =
    "Від 270 до 300: " + String(objRangePlanet.range_270_300);

  titleRange300_330.textContent =
    "Від 300 до 330: " + String(objRangePlanet.range_300_330);

  titleRange330_360.textContent =
    "Від 330 до 360: " + String(objRangePlanet.range_330_360);

  let sumRange = 0;
  for (let key in objRangePlanet) {
    sumRange += objRangePlanet[key];
  }

  const sumOne = objRangePlanet.range_0_30 + objRangePlanet.range_30_60;
  const percentOne = Math.round((sumOne / sumRange) * 100);

  const sumTwo = objRangePlanet.range_60_90 + objRangePlanet.range_90_120;
  const percentTwo = Math.round((sumTwo / sumRange) * 100);

  const sumThree = objRangePlanet.range_120_150 + objRangePlanet.range_150_180;
  const percentThree = Math.round((sumThree / sumRange) * 100);

  const sumFour = objRangePlanet.range_180_210 + objRangePlanet.range_210_240;
  const percentFour = Math.round((sumFour / sumRange) * 100);

  const sumFive = objRangePlanet.range_240_270 + objRangePlanet.range_270_300;
  const percentFive = Math.round((sumFive / sumRange) * 100);

  const sumSix = objRangePlanet.range_300_330 + objRangePlanet.range_330_360;
  const percentSix = Math.round((sumSix / sumRange) * 100);

  titlePercentOne.textContent = "Діапазони 1 - 2: " + String(percentOne) + "%";
  titlePercentTwo.textContent = "Діапазони 3 - 4: " + String(percentTwo) + "%";
  titlePercentThree.textContent =
    "Діапазони 5 - 6: " + String(percentThree) + "%";
  titlePercentFour.textContent =
    "Діапазони 7 - 8: " + String(percentFour) + "%";
  titlePercentFive.textContent =
    "Діапазони 9 - 10: " + String(percentFive) + "%";
  titlePercentSix.textContent =
    "Діапазони 11 - 12: " + String(percentSix) + "%";

  const objRangePercent = {
    percent_1_2: percentOne,
    percent_3_4: percentTwo,
    percent_5_6: percentThree,
    percent_7_8: percentFour,
    percent_9_10: percentFive,
    percent_11_12: percentSix,
  };

  const figureJons = getFigureJons(
    arrayDiferent,
    objRangePlanet,
    objRangePercent
  );
}

function getFigureJons(arrayDiferent, objRangePlanet, objRangePercent) {
  if (
    objRangePercent.percent_1_2 !== 0 &&
    objRangePercent.percent_9_10 === 0 &&
    objRangePercent.percent_11_12 === 0 &&
    objRangePercent.percent_3_4 !== 0 &&
    objRangePercent.percent_5_6 !== 0 &&
    objRangePercent.percent_7_8 === 0
  ) {
    if (
      objRangePercent.percent_1_2 > objRangePercent.percent_3_4 &&
      objRangePercent.percent_1_2 > objRangePercent.percent_5_6
    ) {
      if (objRangePlanet.range_60_90 <= 1) {
        console.log("cdv");
      }
    }
  }
}

function getFigureByDifferent(differnt) {
  const difDegr = 360 - differnt;
  const difBowl = Math.abs(180 - difDegr);
  const difLokomotive = Math.abs(120 - difDegr);
  const difBunch = Math.abs(240 - difDegr);
  let arrayDif = [];
  const newObjBowl = {
    isBowl: true,
    isLokomotive: false,
    isBunch: false,
    difValue: difBowl,
  };
  arrayDif.push(newObjBowl);
  const newObjLokomotive = {
    isBowl: false,
    isLokomotive: true,
    isBunch: false,
    difValue: difLokomotive,
  };
  arrayDif.push(newObjLokomotive);
  const newObjBunch = {
    isBowl: false,
    isLokomotive: false,
    isBunch: true,
    difValue: difBunch,
  };
  arrayDif.push(newObjBunch);
  arrayDif.sort((a, b) => a.difValue - b.difValue);
  const firstElem = arrayDif[0];
  if (firstElem.isBowl === true) {
    return "Чаша";
  } else if (firstElem.isLokomotive === true) {
    return "Локомотив";
  } else if (firstElem.isBunch === true) {
    return "Пучок";
  } else {
    return "";
  }
}

function getDifZnZod(znZodOne, znZodTwo, degrOne, degrTwo) {
  const numberOne = getNumbZnZod(znZodOne);
  const numberTwo = getNumbZnZod(znZodTwo);
  let totalDif = 0;
  if (numberTwo >= numberOne) {
    totalDif = numberTwo - numberOne;
  } else {
    totalDif = 12 - numberOne + numberTwo;
  }
  return 30 * totalDif + (degrTwo - degrOne);
}

function getNumbZnZod(znZod) {
  if (znZod === "Овен") {
    return 1;
  } else if (znZod === "Тілець") {
    return 2;
  } else if (znZod === "Близнюки") {
    return 3;
  } else if (znZod === "Рак") {
    return 4;
  } else if (znZod === "Лев") {
    return 5;
  } else if (znZod === "Діва") {
    return 6;
  } else if (znZod === "Терези") {
    return 7;
  } else if (znZod === "Скорпіон") {
    return 8;
  } else if (znZod === "Стрілець") {
    return 9;
  } else if (znZod === "Козеріг") {
    return 10;
  } else if (znZod === "Водолій") {
    return 11;
  } else {
    return 12;
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
