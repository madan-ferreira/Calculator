// import {fee, cnpj, rent, ad, furn, equip, other} from './modules/GetElements.mjs';
var click = false;
var getValueTotalAnnualProfitAfterAllExpenses = 0;
var hideMon;
var hideRevExpen;
var unique;
function hideFirst() {
     hideMon = document.getElementById("container-monthly");
     hideMon.style.display = "none";

     hideRevExpen = document.getElementById("container-rev-expen");
     hideRevExpen.style.display = "none";
}
function uniqueToMonth() {
     unique = document.getElementById("container-unique");

     if (unique.style.display === "none") {
          // 👇️ this SHOWS the form
          unique.style.display = "flex";
     } else {
          // 👇️ this HIDES the form
          unique.style.display = "none";
          hideMon.style.display = "flex";
     }
}

function monthToRev() {
     hideMon = document.getElementById("container-monthly");

     if (hideMon.style.display === "none") {
          // 👇️ this SHOWS the form
          hideMon.style.display = "flex";
     } else {
          // 👇️ this HIDES the form
          hideMon.style.display = "none";
          hideRevExpen.style.display = "flex";
     }
}

function revToMonth() {
     if (hideRevExpen.style.display === "none") {
          // 👇️ this SHOWS the form
          hideRevExpen.style.display = "flex";
     } else {
          // 👇️ this HIDES the form
          hideRevExpen.style.display = "none";
          hideMon.style.display = "flex";
     }
}

function monthToUnique() {
     if (hideMon.style.display === "none") {
          // 👇️ this SHOWS the form
          hideMon.style.display = "flex";
     } else {
          // 👇️ this HIDES the form
          hideMon.style.display = "none";
          unique.style.display = "flex";
     }
}

function getFranchiseFee(franchiseFee = 0) {
     franchiseFee = document.getElementById("franchiseFee");
     return parseFloat(franchiseFee.value);
}

function getCnpj(cnpj = 0) {
     cnpj = document.getElementById("cnpj");

     return parseFloat(cnpj.value);
}

function getOfficeRent(rent = 0) {
     rent = document.getElementById("office-rent");
     return parseFloat(rent.value);
}

function getAd(ad = 0) {
     ad = document.getElementById("ad");
     return parseFloat(ad.value);
}

function getFurniture(furn = 0) {
     furn = document.getElementById("furniture");
     return parseFloat(furn.value);
}

function getEquipment(equip = 0) {
     equip = document.getElementById("equipment");
     return parseFloat(equip.value);
}

function getOthers(other = 0) {
     other = document.getElementById("others");
     return parseFloat(other.value);
}

function getRemuneration(remuner = 0) {
     remuner = document.getElementById("remuneration");
     return parseFloat(remuner.value);
}

function getDeduction(deduct = 0) {
     deduct = document.getElementById("deduction");
     return parseFloat(deduct.value);
}

function getComunication(comunication = 0) {
     comunication = document.getElementById("comunication");
     return parseFloat(comunication.value);
}

function getAssistant(assist = 0) {
     assist = document.getElementById("assistant");
     return parseFloat(assist.value);
}

function getAnnounce(announce = 0) {
     announce = document.getElementById("announcement");
     return parseFloat(announce.value);
}

function getPop(pop = 0) {
     pop = document.getElementById("population");
     return parseFloat(pop.value);
}

function getOrderPercentage(orderPercent = 0) {
     orderPercent = document.getElementById("order-percentage");
     return parseFloat(orderPercent.value);
}

function getPercentagePeople(peoplePercent = 0) {
     peoplePercent = document.getElementById("ppeople-percentage");
     return parseFloat(peoplePercent.value);
}

function getAveragePrice(averagePrice = 0) {
     averagePrice = document.getElementById("average-price");
     return parseFloat(averagePrice.value);
}

function getOrderCommission(orderCommission = 0) {
     orderCommission = document.getElementById("order-commission");
     return parseFloat(orderCommission.value);
}
function sumUnique(sum) {
     sum = getFranchiseFee() + getCnpj() + getOfficeRent() + getAd() + getFurniture() + getEquipment() + getOthers();
     if (sum > 0) {
          document.getElementById("total-unico").innerHTML = sum + " R$";
     } else {
          document.getElementById("total-unico").innerHTML = "Preencha todos os campos";
     }
     return parseFloat(sum.value);
}

function getRemuneration(remuner) {
     remuner = document.getElementById("remuneration");
     return parseFloat(remuner.value);
}

function getDeduction(deduct) {
     deduct = document.getElementById("deduction");
     return parseFloat(deduct.value);
}

function getMaintain(maintain) {
     maintain = document.getElementById("maintain");
     return parseFloat(maintain.value);
}

function getComunication(comunication) {
     comunication = document.getElementById("comunication");
     return parseFloat(comunication.value);
}

function getAssistant(assistant) {
     assistant = document.getElementById("assistant");
     return parseFloat(assistant.value);
}

function getAnnounce(announcement) {
     announcement = document.getElementById("announcement");
     return parseFloat(announcement.value);
}

function sumMes(sum) {
     sum = getRemuneration() + getDeduction() + getMaintain() + getComunication() + getAssistant() + getAnnounce();
     console.log(sum);
     if (sum > 0) {
          document.getElementById("total-mes").innerHTML = sum + " R$";
     } else {
          document.getElementById("total-mes").innerHTML = "Preencha todos os campos";
     }
}

function getPop(pop = 0) {
     pop = document.getElementById("population");
     return parseFloat(pop.value);
}

function getOrderPercentage(percentOrder = 0) {
     percentOrder = document.getElementById("order-percentage");
     return parseFloat(percentOrder.value);
}

function getAveragePrice(avgPrice) {
     avgPrice = document.getElementById("average-price");
     return parseFloat(avgPrice.value);
}

function getOrderCommission(orderComission) {
     orderComission = document.getElementById("order-commission");
     return parseFloat(orderComission.value);
}

function update() {
     if (click == false) {
          monthProg();
     }
     click = true;
}
function monthProg(monthProg, titleProgTr) {
     titleProgTr = document.createElement("tr");
     titleProgTr.id = "titleProgTr";
     titleProgTr.classList.add("titleTr");
     document.getElementById("projections").appendChild(titleProgTr);
     let titleProg = document.createElement("th");
     titleProg.id = "title-prog";
     titleProg.classList.add("titleTh");
     document.getElementById("titleProgTr").appendChild(titleProg);
     document.getElementById("title-prog").colSpan = "25";
     document.getElementById("title-prog").innerHTML = "Indicadores gerais para pedidos";

     monthProg = document.createElement("tr");
     monthProg.id = "monthProg";
     monthProg.classList.add("monthProg");
     document.getElementById("projections").appendChild(monthProg);
     let titleMonth = document.createElement("td");
     titleMonth.id = "title-month";
     titleMonth.classList.add("title");
     document.getElementById("monthProg").appendChild(titleMonth);
     document.getElementById("title-month").innerHTML = "Meses";

     for (let m = 1; m < 25; m++) {
          let month = document.createElement("td");
          month.id = "month-prog" + m;
          month.classList.add("progression", "color-month");
          month.innerText = m;
          document.getElementById("monthProg").appendChild(month);
     }
     projMonth();
}

function projMonth(endNumber, numberPerDay, numberProg, orderMonth, costAllOrders, comission, comissionProj) {
     endNumber = (getPop() * (getOrderPercentage() / 100)) / 30;
     comission = getOrderCommission() / 100;

     let endNumberInt = parseInt(endNumber);
     numberPerDay = document.createElement("tr");
     numberPerDay.id = "numberPerDay";
     numberPerDay.classList.add("numberPerDay");
     document.getElementById("projections").appendChild(numberPerDay);
     let titleEnd = document.createElement("td");
     titleEnd.id = "title-end";
     titleEnd.classList.add("title");
     document.getElementById("numberPerDay").appendChild(titleEnd);
     document.getElementById("title-end").innerHTML = "Número de pedidos por dia";

     orderMonth = document.createElement("tr");
     orderMonth.id = "orderMonth";
     orderMonth.classList.add("orderMonth");
     document.getElementById("projections").appendChild(orderMonth);
     let titleOrderM = document.createElement("td");
     titleOrderM.id = "titleOrderM";
     titleOrderM.classList.add("title");
     document.getElementById("orderMonth").appendChild(titleOrderM);
     document.getElementById("titleOrderM").innerHTML = "Número de pedidos por mês";

     costAllOrders = document.createElement("tr");
     costAllOrders.id = "costAllOrders";
     costAllOrders.classList.add("costAllOrders");
     document.getElementById("projections").appendChild(costAllOrders);
     let titleCost = document.createElement("td");
     titleCost.id = "title-cost";
     titleCost.classList.add("title");
     document.getElementById("costAllOrders").appendChild(titleCost);
     document.getElementById("title-cost").innerHTML = "Custo de todas as viagens";

     comissionProj = document.createElement("tr");
     comissionProj.id = "comissionProj";
     comissionProj.classList.add("comissionProj");
     document.getElementById("projections").appendChild(comissionProj);
     let titleComission = document.createElement("td");
     titleComission.id = "title-comission";
     titleComission.classList.add("title");
     document.getElementById("comissionProj").appendChild(titleComission);
     document.getElementById("title-comission").innerHTML = "Comissão para todos os pedidos";

     let costMonth = document.createElement("tr");
     costMonth.id = "cost-month";
     costMonth.classList.add("costMonth");
     document.getElementById("projections").appendChild(costMonth);
     let titleCostM = document.createElement("th");
     titleCostM.id = "title-costM";
     titleCostM.classList.add("titleTh");
     document.getElementById("cost-month").appendChild(titleCostM);
     document.getElementById("title-costM").colSpan = "25";
     document.getElementById("title-costM").innerHTML = "Todas as despesas";

     let franchiseRev = document.createElement("tr");
     franchiseRev.id = "fanchise-revenue";
     franchiseRev.classList.add("FranchiseRev");
     document.getElementById("projections").appendChild(franchiseRev);
     let titleFranchiseRev = document.createElement("td");
     titleFranchiseRev.id = "title-franchise-revenue";
     titleFranchiseRev.classList.add("title");
     document.getElementById("fanchise-revenue").appendChild(titleFranchiseRev);
     document.getElementById("title-franchise-revenue").innerHTML = "Receita de franquia";

     let progRoyalties = document.createElement("tr");
     progRoyalties.id = "prog-royalties";
     progRoyalties.classList.add("progRoyalties");
     document.getElementById("projections").appendChild(progRoyalties);
     let titleRoyalties = document.createElement("td");
     titleRoyalties.id = "title-royalties";
     titleRoyalties.classList.add("title");
     document.getElementById("prog-royalties").appendChild(titleRoyalties);
     document.getElementById("title-royalties").innerHTML = "Porcentagem de royalties";

     let progRealRoyalties = document.createElement("tr");
     progRealRoyalties.id = "prog-real-royalties";
     progRealRoyalties.classList.add("progRealRoyalties");
     document.getElementById("projections").appendChild(progRealRoyalties);
     let titleRealRoyalties = document.createElement("td");
     titleRealRoyalties.id = "title-real-royalties";
     titleRealRoyalties.classList.add("title");
     document.getElementById("prog-real-royalties").appendChild(titleRealRoyalties);
     document.getElementById("title-real-royalties").innerHTML = "Royalty em R$";

     let totalOrdersRev = document.createElement("tr");
     totalOrdersRev.id = "total-orders-rev";
     totalOrdersRev.classList.add("progRealRoyalties");
     document.getElementById("projections").appendChild(totalOrdersRev);
     let titleTotalOrdersRev = document.createElement("td");
     titleTotalOrdersRev.id = "title-total-orders-rev";
     titleTotalOrdersRev.classList.add("title");
     document.getElementById("total-orders-rev").appendChild(titleTotalOrdersRev);
     document.getElementById("title-total-orders-rev").innerHTML = "Renda total por pedidos concluídos, R$";

     let totalProfit = document.createElement("tr");
     totalProfit.id = "total-profit";
     totalProfit.classList.add("totalProfit");
     document.getElementById("projections").appendChild(totalProfit);
     let titleTotalProfit = document.createElement("td");
     titleTotalProfit.id = "title-total-profit";
     titleTotalProfit.classList.add("title");
     document.getElementById("total-profit").appendChild(titleTotalProfit);
     document.getElementById("title-total-profit").innerHTML = "Lucro total (receita total menos despesas totais)";

     let netProfit = document.createElement("tr");
     netProfit.id = "net-profit";
     netProfit.classList.add("netProfit");
     document.getElementById("projections").appendChild(netProfit);
     let titleNetProfit = document.createElement("td");
     titleNetProfit.id = "title-net-profit";
     titleNetProfit.classList.add("title");
     document.getElementById("net-profit").appendChild(titleNetProfit);
     document.getElementById("title-net-profit").innerHTML = "O resultado do mês";

     for (let i = 1; i < 25; i++) {
          let number = document.createElement("td");
          number.id = "number-per-day-" + i;
          number.classList.add("progression");
          document.getElementById("numberPerDay").appendChild(number);
     }

     document.getElementById("number-per-day-24").innerHTML = endNumberInt;

     for (let n = 1, f = 1; n < 24, f < 25; n++, f++) {
          numberProg = (endNumber / 24) * n;
          let numberProgFloat = parseFloat(numberProg);
          document.getElementById("number-per-day-" + n).innerHTML = numberProgFloat.toFixed(1);

          let calcOrderM = numberProgFloat * 30;
          let ordersM = document.createElement("td");
          ordersM.id = "order-month-" + f;
          ordersM.classList.add("progression");
          document.getElementById("orderMonth").appendChild(ordersM);
          document.getElementById("order-month-" + f).innerHTML = calcOrderM.toFixed(1);

          let calcCostAll = calcOrderM * getAveragePrice();
          let costAll = document.createElement("td");
          costAll.id = "cost-all-" + f;
          costAll.classList.add("progression");
          document.getElementById("costAllOrders").appendChild(costAll);
          document.getElementById("cost-all-" + f).innerHTML = calcCostAll.toFixed(1);

          let calcComission = calcCostAll * comission;
          let comissionProj = document.createElement("td");
          comissionProj.id = "comission-" + f;
          comissionProj.classList.add("progression");
          document.getElementById("comissionProj").appendChild(comissionProj);
          document.getElementById("comission-" + f).innerHTML = calcComission.toFixed(1);

          let calcFranchiseRev = calcComission + 250;
          let projFranchiseRev = document.createElement("td");
          projFranchiseRev.id = "proj-revenue-" + f;
          projFranchiseRev.classList.add("progression");
          document.getElementById("fanchise-revenue").appendChild(projFranchiseRev);
          document.getElementById("proj-revenue-" + f).innerHTML = calcFranchiseRev.toFixed(1);

          if (calcFranchiseRev < 4000) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "0%";
          } else if (calcFranchiseRev > 4000 && calcFranchiseRev < 5999) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "10%";
          } else if (calcFranchiseRev > 6000 && calcFranchiseRev < 6799) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "12%";
          } else if (calcFranchiseRev > 6800 && calcFranchiseRev < 7599) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "14%";
          } else if (calcFranchiseRev > 7600 && calcFranchiseRev < 8399) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "16%";
          } else if (calcFranchiseRev > 8400 && calcFranchiseRev < 9199) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "18%";
          } else if (calcFranchiseRev > 9200 && calcFranchiseRev < 9999) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "20%";
          } else if (calcFranchiseRev > 10000 && calcFranchiseRev < 10799) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "22%";
          } else if (calcFranchiseRev > 10800 && calcFranchiseRev < 11599) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "24%";
          } else if (calcFranchiseRev > 11600 && calcFranchiseRev < 12399) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "26%";
          } else if (calcFranchiseRev > 12400 && calcFranchiseRev < 13199) {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "28%";
          } else {
               var projRoyalties = document.createElement("td");
               projRoyalties.id = "proj-royalties-" + f;
               projRoyalties.classList.add("progression");
               document.getElementById("prog-royalties").appendChild(projRoyalties);
               document.getElementById("proj-royalties-" + f).innerHTML = "30%";
          }

          if (calcFranchiseRev < 4000) {
               var resultRealRoyaltie = calcFranchiseRev * 0;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 4000 && calcFranchiseRev < 5999) {
               var resultRealRoyaltie = calcFranchiseRev * 0.10;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 6000 && calcFranchiseRev < 6799) {
               var resultRealRoyaltie = calcFranchiseRev * 0.12;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 6800 && calcFranchiseRev < 7599) {
               var resultRealRoyaltie = calcFranchiseRev * 0.14;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 7600 && calcFranchiseRev < 8399) {
               var resultRealRoyaltie = calcFranchiseRev * 0.16;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 8400 && calcFranchiseRev < 9199) {
               var resultRealRoyaltie = calcFranchiseRev * 0.18;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 9200 && calcFranchiseRev < 9999) {
               var resultRealRoyaltie = calcFranchiseRev * 0.20;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 10000 && calcFranchiseRev < 10799) {
               var resultRealRoyaltie = calcFranchiseRev * 0.22;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 10800 && calcFranchiseRev < 11599) {
               var resultRealRoyaltie = calcFranchiseRev * 0.24;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 11600 && calcFranchiseRev < 12399) {
               var resultRealRoyaltie = calcFranchiseRev * 0.26;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 12400 && calcFranchiseRev < 13199) {
               var resultRealRoyaltie = calcFranchiseRev * 0.28;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          } else if (calcFranchiseRev > 13200) {
               var resultRealRoyaltie = calcFranchiseRev * 0.30;
               var projRealRoyalties = document.createElement("td");
               projRealRoyalties.id = "proj-real-royalties-" + f;
               projRealRoyalties.classList.add("progression");
               document.getElementById("prog-real-royalties").appendChild(projRealRoyalties);
               document.getElementById("proj-real-royalties-" + f).innerHTML = resultRealRoyaltie.toFixed(1);
          }
          let getComission = Number.parseFloat(document.getElementById("comission-" + f).innerHTML);
          let getRealRoyalties = Number.parseFloat(document.getElementById("proj-real-royalties-" + f).innerHTML);
          let calcTotalOrdersRev = getComission - getRealRoyalties;
          let projTotalOrdersRev = document.createElement("td");
          projTotalOrdersRev.id = "proj-total-revenue-" + f;
          projTotalOrdersRev.classList.add("progression");
          document.getElementById("total-orders-rev").appendChild(projTotalOrdersRev);
          document.getElementById("proj-total-revenue-" + f).innerHTML = calcTotalOrdersRev.toFixed(1);
     }

     let getFirstProjTotalProft = Number.parseFloat(document.getElementById("total-unico").innerHTML);
     let getFirstProjTOtalProfit2 = Number.parseFloat(document.getElementById("proj-total-revenue-1").innerHTML);
     let getFirstProjTotalProfit3 = (-1) * (getFirstProjTotalProft - getFirstProjTOtalProfit2);
     let firstProjTotalProft = document.createElement("td");
     firstProjTotalProft.id = "proj-total-profit-1";
     firstProjTotalProft.classList.add("progression");
     firstProjTotalProft.classList.add("red");
     document.getElementById("total-profit").appendChild(firstProjTotalProft);
     document.getElementById("proj-total-profit-1").innerHTML = getFirstProjTotalProfit3.toFixed(1);

     for (res1 = 2; res1 < 25; res1++) {
          let getprojTotalRev = Number.parseFloat(document.getElementById("proj-total-revenue-" + res1).innerHTML);
          let getSumMes = Number.parseFloat(document.getElementById("total-mes").innerHTML);
          let calcTotalProfit = getprojTotalRev - getSumMes;
          let projTotalProfit = document.createElement("td");
          projTotalProfit.id = "proj-total-profit-" + res1;
          projTotalProfit.classList.add("progression");
          document.getElementById("total-profit").appendChild(projTotalProfit);
          document.getElementById("proj-total-profit-" + res1).innerHTML = calcTotalProfit.toFixed(1);
          if(calcTotalProfit < 0){
               let redColor = document.getElementById("proj-total-profit-" + res1);
               redColor.classList.add("red");
          } else{
               let greenColor = document.getElementById("proj-total-profit-" + res1);
               greenColor.classList.add("green");
          }
     }
     let getFirstProjNetProft = Number.parseFloat(document.getElementById("proj-total-profit-1").innerHTML);
     let firstProjNetProfit = document.createElement("td");
     firstProjNetProfit.id = "proj-net-profit-1";
     firstProjNetProfit.classList.add("progression");
     firstProjNetProfit.classList.add("red");
     document.getElementById("net-profit").appendChild(firstProjNetProfit);
     document.getElementById("proj-net-profit-1").innerHTML = getFirstProjNetProft.toFixed(1);

     for (res = 2; res < 25; res++) {
          let RestProjNetProft = document.createElement("td");
          RestProjNetProft.id = "proj-net-profit-" + res;
          RestProjNetProft.classList.add("progression");
          document.getElementById("net-profit").appendChild(RestProjNetProft);
          let predec = res - 1;
          let getPart1 = Number.parseFloat(document.getElementById("proj-net-profit-" + predec).innerHTML);
          let getPart2 = Number.parseFloat(document.getElementById("proj-total-profit-" + res).innerHTML);
          let getRestProjNetProft = getPart1 + getPart2;
          document.getElementById("proj-net-profit-" + res).innerHTML = getRestProjNetProft.toFixed(1);
          if(getRestProjNetProft < 0){
               let redColor = document.getElementById("proj-net-profit-" + res);
               redColor.classList.add("red");
          } else{
               let greenColor = document.getElementById("proj-net-profit-" + res);
               greenColor.classList.add("green");
          }
     }
     finalResults();
}
function finalResults() {
     let titleFinalTr = document.createElement("tr");
     titleFinalTr.id = "titleFinalTr";
     titleFinalTr.classList.add("titleTr");
     document.getElementById("final-results").appendChild(titleFinalTr);
     let titleFinal = document.createElement("th");
     titleFinal.id = "title-final";
     titleFinal.classList.add("titleTh");
     document.getElementById("titleFinalTr").appendChild(titleFinal);
     document.getElementById("title-final").colSpan = "2";
     document.getElementById("title-final").innerHTML = "Resultado";

     let totalExpensesForO = document.createElement("tr");
     totalExpensesForO.id = "total-expenses-for-opening-business";
     totalExpensesForO.classList.add("totalExpensesForO");
     document.getElementById("final-results").appendChild(totalExpensesForO);

     let titleTotalExpensesForO = document.createElement("td");
     titleTotalExpensesForO.id = "title-total-expenses-for-opening-business";
     titleTotalExpensesForO.classList.add("title");
     document.getElementById("total-expenses-for-opening-business").appendChild(titleTotalExpensesForO);
     document.getElementById("title-total-expenses-for-opening-business").innerHTML = "Despesa total para abertura do negócio";

     let getValueTotalExpensesForO = Number.parseFloat(document.getElementById("total-unico").innerHTML);
     let valueTotalExpensesForO = document.createElement("td");
     valueTotalExpensesForO.id = "value-total-expenses-for-opening-business";
     valueTotalExpensesForO.classList.add("progression");
     document.getElementById("total-expenses-for-opening-business").appendChild(valueTotalExpensesForO);
     document.getElementById("value-total-expenses-for-opening-business").innerHTML = getValueTotalExpensesForO;

     let totalMonthlyExpenses = document.createElement("tr");
     totalMonthlyExpenses.id = "total-monthly-expenses";
     totalMonthlyExpenses.classList.add("totalMonthlyExpenses");
     document.getElementById("final-results").appendChild(totalMonthlyExpenses);

     let titleTotalMonthlyExpenses = document.createElement("td");
     titleTotalMonthlyExpenses.id = "title-total-monthly-expenses";
     titleTotalMonthlyExpenses.classList.add("title");
     document.getElementById("total-monthly-expenses").appendChild(titleTotalMonthlyExpenses);
     document.getElementById("title-total-monthly-expenses").innerHTML = "Despesas mensais";

     let getValueTotalMonthlyExpenses = Number.parseFloat(document.getElementById("total-mes").innerHTML);
     let valueTotalMonthlyExpenses = document.createElement("td");
     valueTotalMonthlyExpenses.id = "value-total-monthly-expenses";
     valueTotalMonthlyExpenses.classList.add("progression");
     document.getElementById("total-monthly-expenses").appendChild(valueTotalMonthlyExpenses);
     document.getElementById("value-total-monthly-expenses").innerHTML = getValueTotalMonthlyExpenses;

     let totalAnnualProfitAfterAllExpenses = document.createElement("tr");
     totalAnnualProfitAfterAllExpenses.id = "total-annual-profit-after-all-expenses";
     totalAnnualProfitAfterAllExpenses.classList.add("totalAnnualProfitAfterAllExpenses");
     document.getElementById("final-results").appendChild(totalAnnualProfitAfterAllExpenses);

     let titleTotalAnnualProfitAfterAllExpenses = document.createElement("td");
     titleTotalAnnualProfitAfterAllExpenses.id = "title-total-annual-profit-after-all-expenses";
     titleTotalAnnualProfitAfterAllExpenses.classList.add("title");
     document.getElementById("total-annual-profit-after-all-expenses").appendChild(titleTotalAnnualProfitAfterAllExpenses);
     document.getElementById("title-total-annual-profit-after-all-expenses").innerHTML = "Lucro anual após todas as despesas";

     let valueTotalAnnualProfitAfterAllExpenses = document.createElement("td");
     valueTotalAnnualProfitAfterAllExpenses.id = "value-totalAnnual-profit-after-all-expenses";
     valueTotalAnnualProfitAfterAllExpenses.classList.add("progression");
     document.getElementById("total-annual-profit-after-all-expenses").appendChild(valueTotalAnnualProfitAfterAllExpenses);
     for (apaae = 13; apaae < 25; apaae++) {
          getValueTotalAnnualProfitAfterAllExpenses = getValueTotalAnnualProfitAfterAllExpenses + Number.parseFloat(document.getElementById("proj-total-profit-" + apaae).innerHTML);
     }
     document.getElementById("value-totalAnnual-profit-after-all-expenses").innerHTML = getValueTotalAnnualProfitAfterAllExpenses.toFixed(1);

     let totalAverageMonthlyProfit = document.createElement("tr");
     totalAverageMonthlyProfit.id = "total-average-monthly-profit";
     totalAverageMonthlyProfit.classList.add("totalAverageMonthlyProfit");
     document.getElementById("final-results").appendChild(totalAverageMonthlyProfit);

     let titleTotalAverageMonthlyProfit = document.createElement("td");
     titleTotalAverageMonthlyProfit.id = "title-total-average-monthly-profit";
     titleTotalAverageMonthlyProfit.classList.add("title");
     document.getElementById("total-average-monthly-profit").appendChild(titleTotalAverageMonthlyProfit);
     document.getElementById("title-total-average-monthly-profit").innerHTML = "Lucro médio mensal";

     let getValueTotalAverageMonthlyProfit = Number.parseFloat(document.getElementById("value-totalAnnual-profit-after-all-expenses").innerHTML) / 24;
     let valueTotalAverageMonthlyProfit = document.createElement("td");
     valueTotalAverageMonthlyProfit.id = "value-total-average-monthly-profit";
     valueTotalAverageMonthlyProfit.classList.add("progression");
     document.getElementById("total-average-monthly-profit").appendChild(valueTotalAverageMonthlyProfit);
     document.getElementById("value-total-average-monthly-profit").innerHTML = getValueTotalAverageMonthlyProfit.toFixed(1);
     total24();
}

function total24() {
     let getTotal24 = Number.parseFloat(document.getElementById("proj-total-revenue-12").innerHTML);
     console.log(getTotal24);
     if (getTotal24 > 0) {
          document.getElementById("total-24").innerHTML = getTotal24 + " R$";
     } else {
          document.getElementById("total-24").innerHTML = "Preencha todos os campos";
     }
}
