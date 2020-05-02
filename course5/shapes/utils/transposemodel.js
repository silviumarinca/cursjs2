function Transpose(model, num_of_transpositions) {
  let t = [];
  for (let j = 0; j < model[0].length; j++) {
    t[j] = t[j] || [];
    for (let i = model.length - 1; i >= 0; i--) {
      t[j].push(model[i][j]);
    }
  }
  num_of_transpositions--;
  if (num_of_transpositions) {
    return Transpose(t, num_of_transpositions);
  }

  return t;
}

export function GenerateTransposeModels(model) {
  let transposeModel = [];
  transposeModel.push(model); //modelele initiale
  let numOfModel = 0;
  while (numOfModel < 3) {
    transposeModel.push(Transpose(transposeModel[numOfModel], 1)); //e mai eficient sa fac transpusa elementului anterior
    numOfModel++;
  }
  return transposeModel;
}
