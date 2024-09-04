import { TYPES } from "./data/types.js";
import { BRANDS } from "./data/brands.js";

const COLORS = [];

const fillColorsArray = () => {
  const goldenAngle = 137.5;

  let hue = 180;
  let saturation = 100;
  let lightness = 50;
  
  for (let i = 0; i < 20; i++) {
    COLORS.push(`hsl(${Math.round(hue % 360)}, ${saturation}%, ${lightness}%)`);
    hue += goldenAngle;
    if (hue > 360) {
      hue = hue - 360
    }
    if (hue >= 200 && hue < 300) {
      saturation = 90;
      lightness = 70;
    } else {
      saturation = 100;
      lightness = 50;
    }
  }
}

let ALL_CARS = [];
let totalUnits = 0;
let totalModels = 0;
let DETAILED_TYPES_SALES_DATA = [];
let COMPREHENSIVE_TYPES_SALES_DATA = [];
let DETAILED_TYPES_DIVERSITY_DATA = [];
let COMPREHENSIVE_TYPES_DIVERSITY_DATA = [];

const fillAllCarsArray = () => {
  BRANDS.forEach(brand => {
    brand.cars.forEach(car => {
      totalUnits += car.units;
      ALL_CARS.push(car);
    });
  });
  totalModels = ALL_CARS.length;
}

const getRoundedPercentage = (part, total) => {
  let num = (part / total) * 100;
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const formatNumberWithSpaces = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const getCarPoolByType = (typeId) => {
  let carsOfType = ALL_CARS.filter((car) => car.type.id == typeId);
  //console.table(carsOfType);
  return carsOfType;
}

// SALES ======================================================================

const getTypeTotalUnits = (typeId) => {
  let carsOfType = getCarPoolByType(typeId);
  let totalUnitsOfType = 0;

  carsOfType.forEach(car => {
    totalUnitsOfType += car.units
  });

  //console.log(totalUnitsOfType);

  return totalUnitsOfType;
}

const getSalesPercentageByType = (typeId) => {
  return Math.round((getRoundedPercentage(getTypeTotalUnits(typeId), totalUnits) + Number.EPSILON) * 100) / 100 ;
}

const getTypeSalesData = (typeId) => {
  let type = TYPES.filter((type) => type.id == typeId)[0];
  let obj = { id:type.id, name: type.name, units: getTypeTotalUnits(typeId), salesPercentage: getSalesPercentageByType(typeId) };
  return obj;
};

const fillDetailedTypesSalesData = () => {
  TYPES.forEach(type => {
    DETAILED_TYPES_SALES_DATA.push(getTypeSalesData(type.id))
  });
  DETAILED_TYPES_SALES_DATA = DETAILED_TYPES_SALES_DATA.sort((a, b) => { return b.units - a.units });
}

const getSuvSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == 'SUV-A' || o.id == 'SUV-B' || o.id == 'SUV-C' || o.id == 'SUV-D');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'SUV', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}
const getSedanSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == 'D' || o.id == 'E' || o.id == 'F');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'Berlines et grandes routières', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}
const getUrbansSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == 'A' || o.id == 'B' || o.id == 'C');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'Citadines et compactes', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}
const getVanSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == o.id == 'LUDO' || o.id == 'B-MPV' || o.id == 'C-MPV' || o.id == 'D-MPV');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'Ludospaces et Monospaces', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}
const getOthersSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == o.id == 'PCKP-S' || o.id == 'PCKP-M' || o.id == 'PCKP-L' || o.id == 'VUL' || o.id == 'S');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'Autres (Pick-up, Utilitaires, Sportives)', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}

const fillComprehensiveTypesSalesData = () => {
  let suvSalesData = getSuvSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(suvSalesData);

  let sedanSalesData = getSedanSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(sedanSalesData);

  let urbansSalesData = getUrbansSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(urbansSalesData);

  let vansSalesData = getVanSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(vansSalesData);

  let othersSalesData = getOthersSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(othersSalesData);

  COMPREHENSIVE_TYPES_SALES_DATA = COMPREHENSIVE_TYPES_SALES_DATA.sort((a, b) => { return b.units - a.units });
}

// DIVERSITY ==================================================================

const getTypeTotalModels = (typeId) => {
  let carsOfType = getCarPoolByType(typeId);
  return carsOfType.length;
}

const getDiversityPercentageByType = (typeId) => {
  return Math.round((getRoundedPercentage(getTypeTotalModels(typeId), totalModels) + Number.EPSILON) * 100) / 100 ;
}

const getTypeDiversityData = (typeId) => {
  let type = TYPES.filter((type) => type.id == typeId)[0];
  let obj = { id:type.id, name: type.name, models: getTypeTotalModels(typeId), diversityPercentage: getDiversityPercentageByType(typeId) };
  return obj;
};

const fillDetailedTypesDiversityData = () => {
  TYPES.forEach(type => {
    DETAILED_TYPES_DIVERSITY_DATA.push(getTypeDiversityData(type.id))
  });
}

const getSuvDiversityData = () => {
  let models = getTypeTotalModels('SUV-A') + getTypeTotalModels('SUV-B') + getTypeTotalModels('SUV-C') + getTypeTotalModels('SUV-D');
  let obj = { name: 'SUV', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}
const getSedanDiversityData = () => {
  let models = getTypeTotalModels('D') + getTypeTotalModels('E') + getTypeTotalModels('F');
  let obj = { name: 'Berlines et grandes routières', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}
const getUrbansDiversityData = () => {
  let models = getTypeTotalModels('A') + getTypeTotalModels('B') + getTypeTotalModels('C');
  let obj = { name: 'Citadines et compactes', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}
const getVanDiversityData = () => {
  let models = getTypeTotalModels('LUDO') + getTypeTotalModels('B-MPV') + getTypeTotalModels('C-MPV') + getTypeTotalModels('D-MPV');
  let obj = { name: 'Ludospaces et Monospaces', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}
const getOthersDiversityData = () => {
  let models = getTypeTotalModels('PCKP-S') + getTypeTotalModels('PCKP-M') + getTypeTotalModels('PCKP-L') + getTypeTotalModels('VUL') + getTypeTotalModels('S');
  let obj = { name: 'Autres (Pick-up, Utilitaires, Sportives)', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}

const fillComprehensiveTypesDiversityData = () => {
  let suvDiversityData = getSuvDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(suvDiversityData);

  let sedanDiversityData = getSedanDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(sedanDiversityData);

  let urbansDiversityData = getUrbansDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(urbansDiversityData);

  let vansDiversityData = getVanDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(vansDiversityData);

  let othersDiversityData = getOthersDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(othersDiversityData);

  COMPREHENSIVE_TYPES_DIVERSITY_DATA = COMPREHENSIVE_TYPES_DIVERSITY_DATA.sort((a, b) => { return b.diversityPercentage - a.diversityPercentage });
}

// USER INTERACTIONS ==========================================================
let selectedOrganization = 'comprehensive';

const onDataOrganizationChange = (organizationId) => {
  if (organizationId != selectedOrganization) {
    let subDivision = document.getElementById('subDivisionComprehensive');
    let subDivision2 = document.getElementById('subDivisionDetailed');

    switch (organizationId) {
      case 'comprehensive':
        subDivision.classList.add('selected');
        subDivision2.classList.remove('selected');
        selectedOrganization = 'comprehensive';
        document.getElementById('tableContainer').innerHTML = getComprehensiveTableContainer();
        resizeTableHeaders();
        break;
      case 'detailed':
        subDivision2.classList.add('selected');
        subDivision.classList.remove('selected');
        selectedOrganization = 'detailed';
        document.getElementById('tableContainer').innerHTML = getDetailedTableContainer();
        resizeTableHeaders();
        resizeTopCarTableHeaders();
        break;
      default:
        break;
    }
  }
}
window.onDataOrganizationChange = onDataOrganizationChange;

// EXECUTION ==================================================================

fillAllCarsArray();
fillDetailedTypesSalesData();
fillComprehensiveTypesSalesData();
fillDetailedTypesDiversityData();
fillComprehensiveTypesDiversityData();

const getComprehensiveTableData = () => {
  let ARRAY = [];
  let obj = { type: 'type', units: 0, salesPercentage: 0, models: 0, diversityPercentage: 0 };
  COMPREHENSIVE_TYPES_SALES_DATA

  COMPREHENSIVE_TYPES_SALES_DATA.forEach(salesData => {
    obj = { type: salesData.name, units: salesData.units, salesPercentage: salesData.salesPercentage, models: 0, diversityPercentage: 0 };
    ARRAY.push(obj);
  });

  COMPREHENSIVE_TYPES_DIVERSITY_DATA.forEach(diversityData => {
    ARRAY.forEach(salesData => {
      if (salesData.type == diversityData.name) {
        salesData.models = diversityData.models;
        salesData.diversityPercentage = diversityData.diversityPercentage;
      }
    });
  });

  ARRAY = ARRAY.sort((a, b) => { return b.units - a.units });

  return ARRAY;
}



const getComprehensiveTableGUI = (dataArray) => {
  let str = '';
  for (let index = 0; index < dataArray.length; index++) {
    const element = dataArray[index];
    str += `
    <tr class="segment-line">
      <td class="table-cell col-1"><div class="row-cell"><div class="dot" style="background-color: ${COLORS[index]};"></div>${element.type}</div></td>
      <td class="table-cell col-2 units">${formatNumberWithSpaces(element.units)}</td>
      <td class="table-cell col-3">${element.salesPercentage}%</td>
      <td class="table-cell col-4">${element.models}</td>
      <td class="table-cell col-5">${element.diversityPercentage}%</td>
    </tr>`;
  }
  return str;
}

const getProgressPartsForDataArray = (dataArray) => {
  let str = '';
  for (let index = 0; index < dataArray.length; index++) {
    const element = dataArray[index];
    str += `<div class="progress-part" style="min-width: ${element.salesPercentage}%; width: ${element.salesPercentage}%; max-width: ${element.salesPercentage}%; background-color: ${COLORS[index]};"></div>`;
  }
  return str;
  
}

const getComprehensiveTableContainer = () => {
  return `
  <h1>
    Voitures neuves vendues en France en 2023<br>
    <span class="highlight">${formatNumberWithSpaces(totalUnits)}</span>
  </h1>
  
  <h2>Classement par segment</h2>

  <div class="progress-container">
    ${getProgressPartsForDataArray(COMPREHENSIVE_TYPES_SALES_DATA)}
  </div>

  <table>
    <thead>
      <tr>
        <th id="col1Head">Segment</th>
        <th id="col2Head">Unités</th>
        <th id="col3Head">% des ventes</th>
        <th id="col4Head">Modèles</th>
        <th id="col5Head">% des modèles</th>
      </tr>
    </thead>
    <tbody>
      ${getComprehensiveTableGUI(getComprehensiveTableData())}
    </tbody>
  </table>`;
}

const getDetailedTableData = () => {
  let ARRAY = [];
  let obj = { type: 'type', units: 0, salesPercentage: 0, models: 0, diversityPercentage: 0 };
  DETAILED_TYPES_SALES_DATA

  DETAILED_TYPES_SALES_DATA.forEach(salesData => {
    obj = { type: salesData.name, units: salesData.units, salesPercentage: salesData.salesPercentage, models: 0, diversityPercentage: 0 };
    ARRAY.push(obj);
  });

  DETAILED_TYPES_DIVERSITY_DATA.forEach(diversityData => {
    ARRAY.forEach(salesData => {
      if (salesData.type == diversityData.name) {
        salesData.models = diversityData.models;
        salesData.diversityPercentage = diversityData.diversityPercentage;
      }
    });
  });

  ARRAY = ARRAY.sort((a, b) => { return b.units - a.units });

  return ARRAY;
}

const getDetailedTableGUI = (dataArray) => {
  let str = '';
  for (let index = 0; index < dataArray.length; index++) {
    const element = dataArray[index];
    str += `
    <tr class="segment-line">
      <td class="table-cell col-1"><div class="row-cell"><div class="dot" style="background-color: ${COLORS[index]};"></div>${element.type}</div></td>
      <td class="table-cell col-2 units">${formatNumberWithSpaces(element.units)}</td>
      <td class="table-cell col-3">${element.salesPercentage}%</td>
      <td class="table-cell col-4">${element.models}</td>
      <td class="table-cell col-5">${element.diversityPercentage}%</td>
    </tr>`;
  }
  return str;
}

const getDetailedTableContainer = () => {
  return `
  <h1>
    Voitures neuves vendues en France en 2023<br>
    <span class="highlight">${formatNumberWithSpaces(totalUnits)}</span>
  </h1>

  <h2>Classement par segment</h2>
  
  <div class="progress-container">
    ${getProgressPartsForDataArray(DETAILED_TYPES_SALES_DATA)}
  </div>

  <table>
    <thead>
      <tr>
        <th id="col1Head">Segment</th>
        <th id="col2Head">Unités</th>
        <th id="col3Head">% des ventes</th>
        <th id="col4Head">Modèles</th>
        <th id="col5Head">% des modèles</th>
      </tr>
    </thead>
    <tbody>
      ${getDetailedTableGUI(getDetailedTableData())}
    </tbody>
  </table>

  <h2>Classement par modèle</h2>

  <table>
    <thead>
      <tr>
        <th id="col1TopCarHead">Modèle</th>
        <th id="col2TopCarHead">Segment</th>
        <th id="col3TopCarHead">Unités</th>
        <th id="col4TopCarHead">%<br>des ventes</th>
      </tr>
    </thead>
    <tbody>
      ${renderTopListGui()}
    </tbody>
  </table>
  `;
}

const renderTopListGui = () => {
  let str = '';
  let sortedAllCars = ALL_CARS.sort((a, b) => {return b.units - a.units});
  sortedAllCars.forEach(car => {
    str += `
      <tr class="car-line">
        <td class="table-cell-top-car col-1 full-model-cell">
          <span>${car.brand}</span><span style="font-weight: 800; display: flex; justify-content: flex-start; align-items: center;">${car.name}</span>
        </td>
        <td class="table-cell-top-car col-2">${formatNumberWithSpaces(car.type.name)}</td>
        <td class="table-cell-top-car col-3 units">${formatNumberWithSpaces(car.units)}</td>
        <td class="table-cell-top-car col-4">${getRoundedPercentage(car.units, totalUnits)}%</td>
      </tr>`;
  });
  return str;
}

const resizeTableHeaders = () => {
  for (let index = 1; index < 6; index++) {
    const element = document.getElementById(`col${index}Head`);

    const rawCells = document.getElementsByClassName('table-cell');
    let unfilteredCells = [];

    for (let element of rawCells) {
      unfilteredCells.push(element);
    }
    const cells = unfilteredCells.filter((e) => e.classList.contains(`col-${index}`));
    const cell = cells[0];

    const width = cell.offsetWidth;

    element.style = `min-width: ${width}px; width: ${width}px; max-width: ${width}px;`;
    
  }
}

const resizeTopCarTableHeaders = () => {
  for (let index = 1; index < 5; index++) {
    const element = document.getElementById(`col${index}TopCarHead`);

    const rawCells = document.getElementsByClassName('table-cell-top-car');
    //console.log(rawCells);
    let unfilteredCells = [];

    for (let element of rawCells) {
      unfilteredCells.push(element);
    }
    const cells = unfilteredCells.filter((e) => e.classList.contains(`col-${index}`));
    const cell = cells[0];

    const width = cell.offsetWidth;

    element.style = `min-width: ${width}px; width: ${width}px; max-width: ${width}px;`;
    
  }
}

/* console.log('=====================================');
console.log(totalUnits + ' ventes en France en 2023');
console.log('=====================================');
console.log(' ');

console.table(DETAILED_TYPES_SALES_DATA);
console.table(DETAILED_TYPES_DIVERSITY_DATA);

console.table(COMPREHENSIVE_TYPES_SALES_DATA);
console.table(COMPREHENSIVE_TYPES_DIVERSITY_DATA); */

fillColorsArray();
document.getElementById('tableContainer').innerHTML = getComprehensiveTableContainer();
resizeTableHeaders();

