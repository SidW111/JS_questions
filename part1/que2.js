let month = "oct";
let mon;
switch (month) {
  case "jan" || "feb" || "mar":
    mon = "1st quarter";
    break;
  case "apr" || "may" || "june":
    mon = "2nd quarter";
    break;
  case "jul" || "aug" || "sep":
    mon = "3rd quarter";
    break;
  case "oct" || "nov" || "dec":
    mon = "4th quarter";
    break;
  default:
    mon = "wrong month";
    break;
}

console.log(mon);
