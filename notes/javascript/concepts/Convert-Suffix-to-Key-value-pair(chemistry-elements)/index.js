// Convert chemisty elements into json objects
// Basically chemistry elements suffix into key value pair

function convertToJSON(formula) {
  const resObj = {};
  let i = 0;
  while (i < formula.length) {
    const element = formula[i];
    i++;
    let countStr = "";
    while (i < formula.length && !isNaN(formula[i])) {
      countStr += formula[i];
      i++;
    }
    const count = countStr === "" ? 1 : parseInt(countStr);
    resObj[element] = (resObj[element] || 0) + count;
  }
  return resObj;
}

console.log(convertToJSON("H2O"));
console.log(convertToJSON("C6H12"));
console.log(convertToJSON("COOH"));
console.log(convertToJSON("CH3COOH"));

//output: {H: 2, O: 1}
//output: {C: 6, H: 12}
//output: {C: 1, O: 2, H: 1}
//output: {C: 2, H: 4, O: 2}
