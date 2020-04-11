class Shape {
  constructor(culoare, laturi) {
    this.culoare = culoare;
    this.laturi = laturi;
  }
  Perimetru() {
    return this.laturi.reduce((prev, curr) => prev + curr);
  }
  SemiPerimetru() {
    return this.Perimetru() / 2;
  }
  TipPoligon() {
    let tip = "";
    switch (this.laturi.length) {
      case 3:
        tip = "Triunghi";
        break;
      case 4:
        tip = "Patrulater";
        break;
      case 5:
        tip = "Pentagon";
        break;
      case 6:
        tip = "Hexagon";
        break;
      default:
        tip = "Work in progress!!";
        break;
    }
    return tip;
  }
}
class TriunghiEchilateral extends Shape {
  constructor(culoare, latura) {
    super(culoare, [latura, latura, latura]);
    this.latura = latura;
  }
  Aria() {
    return ((((this.laturi[0] ** 2 * Math.sqrt(3)) / 4) * 100) / 100).toFixed(
      2
    );
  }
  TipPoligon() {
    return "Triunghi Echilateral";
  }

  Draw(ctx, x, y) {
    ctx.translate(x, y);
    var h = this.latura * (Math.sqrt(3) / 2);
    ctx.beginPath();

    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-this.latura / 2, h / 2);
    ctx.lineTo(this.latura / 2, h / 2);
    //ctx.lineTo(0, -h / 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = this.culoare;
    ctx.fill();

    ctx.closePath();
  }
}
class Patrat extends Shape {
  constructor(culoare, latura) {
    super(culoare, [latura, latura, latura, latura]);
    this.latura = latura;
  }
  TipPoligon() {
    return "Patrat";
  }
  Aria() {
    return ((this.laturi[0] ** 2 * 100) / 100).toFixed(2);
  }
  Draw(ctx, x, y) {
    ctx.beginPath();
    ctx.rect(x, y, this.latura, this.latura);
    ctx.fillStyle = this.culoare;
    ctx.fill();
    ctx.stroke();
  }
}

//  const poligon= new Shape('Albastru',[1,2,3]);
//         console.log(`Tipul poligonului este ${poligon.TipPoligon()} avand culoarea ${poligon.culoare} \n Perimetru este ${poligon.Perimetru()} Semiperimetru este ${poligon.SemiPerimetru()}`)

//         const triunghi= new TriunghiEchilateral('galben',2);
//         console.log('-----------Exercitiul 5----------------')
//         console.log(`Tipul poligonului este ${triunghi.TipPoligon()} avand culoarea ${triunghi.culoare} \n Perimetru este ${triunghi.Perimetru()}
//                     Semiperimetru este ${triunghi.SemiPerimetru()}
//                     Aria este ${triunghi.Aria()}`)
//         const patrat= new Patrat('Verde',2);
//         console.log(`Tipul poligonului este ${patrat.TipPoligon()} avand culoarea ${patrat.culoare} \n Perimetru este ${patrat.Perimetru()}
//                      Semiperimetru este ${patrat.SemiPerimetru()} Aria este ${patrat.Aria()}`)
