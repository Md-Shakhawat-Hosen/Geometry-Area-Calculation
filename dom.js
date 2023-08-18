
function getCalculationValue(triangleBaseId, triangleHeightId) {
          const base = document.getElementById(triangleBaseId).value;
          const height = document.getElementById(triangleHeightId).value;

          const result = parseFloat(base) * parseFloat(height);
           
        document.getElementById(triangleBaseId).value = "";
         document.getElementById(triangleHeightId).value = "";
          return result;
}



function setCalculationValue(areaId,val) {
      const area = document.getElementById(areaId);
      area.innerText = val;
}

const arr = [];


function finalCalculationResult(finalCal,name,val) {
  
    const final = document.getElementById(finalCal);

    const nameText = document.getElementById(name)
  
    const div = document.createElement('div');

    if (arr.includes(nameText.innerText)) {
        alert("You can't add twice")
    }
    else {
      div.innerHTML = `
    <div class="flex justify-between mb-3">
                             <h1><span>${arr.length+1}.</span> ${nameText.innerText}</h1>
                             <h2><span>${val}</span>cm<sup>2</sup> </h2>
                             <button class="bg-blue-600 px-2 py-2 rounded-md text-white">convert to m<sup>2</sup></button>
                         </div>
    
    `;

      final.appendChild(div);

      arr.push(nameText.innerText);
    }
    
}



function triangleCalculate() {
  const result = getCalculationValue("triangle-base", "triangle-height");

  const finalValue = 0.5 * result;
  const decimalValue = finalValue.toFixed(2);
  setCalculationValue("triangle-area", decimalValue);
  finalCalculationResult("final-calculation-container","triangle-name", decimalValue);
}


function rectangleCalculate() {
    const result = getCalculationValue("rectangle-base", "rectangle-height");

    const finalValue =  result;
    const decimalValue = finalValue.toFixed(2);
    setCalculationValue("rectangle-area", decimalValue);
    finalCalculationResult("final-calculation-container","rectangle-name", decimalValue);
}


function parallelogramCalculate() {
  const result = getCalculationValue(
    "parallelogram-base",
    "parallelogram-height"
  );

  const finalValue = result;
  const decimalValue = finalValue.toFixed(2);
  setCalculationValue("parallelogram-area", decimalValue);
  finalCalculationResult(
    "final-calculation-container",
    "parallelogram-name",
    decimalValue
  );
}
function rhombusCalculate() {
  const result = getCalculationValue(
    "rhombus-base",
    "rhombus-height"
  );

  const finalValue = 0.5*result;
  const decimalValue = finalValue.toFixed(2);
  setCalculationValue("rhombus-area", decimalValue);
  finalCalculationResult(
    "final-calculation-container",
    "rhombus-name",
    decimalValue
  );
}
function pentagonCalculate() {
  const result = getCalculationValue("pentagon-base", "pentagon-height");

  const finalValue = 0.5 * result;
  const decimalValue = finalValue.toFixed(2);
  setCalculationValue("pentagon-area", decimalValue);
  finalCalculationResult(
    "final-calculation-container",
    "pentagon-name",
    decimalValue
  );
}
function ellipseCalculate() {
  const result = getCalculationValue("ellipse-base", "ellipse-height");

  const finalValue = 3.14 * result;
  const decimalValue = finalValue.toFixed(2);
  setCalculationValue("ellipse-area", decimalValue);
  finalCalculationResult(
    "final-calculation-container",
    "ellipse-name",
    decimalValue
  );
}