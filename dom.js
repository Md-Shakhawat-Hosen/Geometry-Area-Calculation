
function getCalculationValue(triangleBaseId, triangleHeightId) {
          const base = document.getElementById(triangleBaseId).value;
          const height = document.getElementById(triangleHeightId).value;

          const result = parseFloat(base) * parseFloat(height);

          return result;
}



function setCalculationValue(areaId,val) {
      const area = document.getElementById(areaId);
      area.innerText = val;
}



let c = 0;
function finalCalculationResult(finalCal,name,val) {
     c= c + 1;
    const final = document.getElementById(finalCal);

    const nameText = document.getElementById(name)
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="flex justify-between mb-3">
                             <h1><span>${c}.</span> ${nameText.innerText}</h1>
                             <h2><span>${val}</span>cm<sup>2</sup> </h2>
                             <button class="bg-blue-600 px-2 py-2 rounded-md text-white">convert to m<sup>2</sup></button>
                         </div>
    
    `;

    final.appendChild(div);
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