import { TYPES } from "./data/types.js";
import { BRANDS } from "./data/brands.js";

const COLORS = [
  /* 'hsl(180, 100%, 50%)',
  'hsl(108, 100%, 50%)',
  'hsl(54, 100%, 50%)', 
  'hsl(36, 100%, 50%)', 
  'hsl(18, 100%, 50%)', 
  'hsl(0, 100%, 50%)', 
  'hsl(342, 100%, 50%)',
  'hsl(324, 100%, 50%)',
  'hsl(306, 100%, 50%)',
  'hsl(288, 100%, 60%)',
  'hsl(270, 100%, 60%)', 
  'hsl(252, 100%, 70%)',
  'hsl(234, 100%, 70%)',
  'hsl(216, 100%, 60%)',
  'hsl(198, 100%, 55%)',

  'hsl(0, 100%, 60%)', 
  'hsl(18, 100%, 60%)', 
  'hsl(36, 100%, 50%)', 
  'hsl(54, 100%, 50%)', 
  'hsl(90, 100%, 50%)',
  'hsl(108, 100%, 50%)',
  'hsl(126, 100%, 50%)',
  'hsl(144, 100%, 50%)',
  'hsl(162, 100%, 50%)',
  'hsl(180, 100%, 50%)',
  'hsl(198, 100%, 55%)',
  'hsl(216, 100%, 60%)',
  'hsl(234, 100%, 70%)',
  'hsl(252, 100%, 70%)',
  'hsl(270, 100%, 60%)',
  'hsl(288, 100%, 60%)',
  'hsl(306, 100%, 50%)',
  'hsl(324, 100%, 60%)',
  'hsl(342, 100%, 60%)', */
];

let hue = 180//Math.random() * 360; // Démarrage à une teinte aléatoire
let saturation = 100;
let lightness = 50;
const goldenAngle = 137.5;

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
const getSportSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == 'S');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'Sportives', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}
const getOthersSalesData = () => {
  let FILTERED_TYPED_SALES_DATA = DETAILED_TYPES_SALES_DATA.filter((o) => o.id == 'LUDO' || o.id == 'B-MPV' || o.id == 'C-MPV' || o.id == 'D-MPV' || o.id == 'PCKP-S' || o.id == 'PCKP-M' || o.id == 'PCKP-L' || o.id == 'VUL');
  let units = 0;
  FILTERED_TYPED_SALES_DATA.forEach(type => {
    units += type.units;
  });
  let obj = { name: 'Autres (Ludospaces, Monospaces, Pick-up, Utilitaires)', units: units, salesPercentage: getRoundedPercentage(units, totalUnits) };
  return obj;
}

const fillComprehensiveTypesSalesData = () => {
  let suvSalesData = getSuvSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(suvSalesData);

  let sedanSalesData = getSedanSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(sedanSalesData);

  let urbansSalesData = getUrbansSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(urbansSalesData);

  let sportSalesData = getSportSalesData();
  COMPREHENSIVE_TYPES_SALES_DATA.push(sportSalesData);

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
const getSportDiversityData = () => {
  let models = getTypeTotalModels('S');
  let obj = { name: 'Sportives', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}
const getOthersDiversityData = () => {
  let models = getTypeTotalModels('LUDO') + getTypeTotalModels('B-MPV') + getTypeTotalModels('C-MPV') + getTypeTotalModels('D-MPV') + getTypeTotalModels('PCKP-S') + getTypeTotalModels('PCKP-M') + getTypeTotalModels('PCKP-L') + getTypeTotalModels('VUL');
  let obj = { name: 'Autres (Ludospaces, Monospaces, Pick-up, Utilitaires)', models: models, diversityPercentage: getRoundedPercentage(models, totalModels) };
  return obj;
}

const fillComprehensiveTypesDiversityData = () => {
  let suvDiversityData = getSuvDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(suvDiversityData);

  let sedanDiversityData = getSedanDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(sedanDiversityData);

  let urbansDiversityData = getUrbansDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(urbansDiversityData);

  let sportDiversityData = getSportDiversityData();
  COMPREHENSIVE_TYPES_DIVERSITY_DATA.push(sportDiversityData);

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
    <tr>
      <td class="table-cell col-1"><div class="row-cell"><div class="dot" style="background-color: ${COLORS[index]};"></div>${element.type}</div></td>
      <td class="table-cell col-2">${formatNumberWithSpaces(element.units)}</td>
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
    <tr>
      <td class="table-cell col-1"><div class="row-cell"><div class="dot" style="background-color: ${COLORS[index]};"></div>${element.type}</div></td>
      <td class="table-cell col-2">${formatNumberWithSpaces(element.units)}</td>
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
  </table>`;
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

/* console.log('=====================================');
console.log(totalUnits + ' ventes en France en 2023');
console.log('=====================================');
console.log(' ');

console.table(DETAILED_TYPES_SALES_DATA);
console.table(DETAILED_TYPES_DIVERSITY_DATA);

console.table(COMPREHENSIVE_TYPES_SALES_DATA);
console.table(COMPREHENSIVE_TYPES_DIVERSITY_DATA); */

document.getElementById('tableContainer').innerHTML = getComprehensiveTableContainer();
resizeTableHeaders()


