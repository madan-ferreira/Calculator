// import {fee, cnpj, rent, ad, furn, equip, other} from './modules/GetElements.mjs';
var click = false;

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

function update(){
     if (click == false){
          monthProg();
     } 
     click = true;
}
function monthProg(monthProg, titleProgTr){
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
          month.classList.add("progression");
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
          let titleOrderM = document.createElement("td")
          titleOrderM.id = "titleOrderM";
          titleOrderM.classList.add("title");
          document.getElementById("orderMonth").appendChild(titleOrderM);
          document.getElementById("titleOrderM").innerHTML = "Número de pedidos por mês";


          costAllOrders = document.createElement("tr");
          costAllOrders.id = "costAllOrders";
          costAllOrders.classList.add("costAllOrders");
          document.getElementById("projections").appendChild(costAllOrders);
          let titleCost = document.createElement("td")
          titleCost.id = "title-cost";
          titleCost.classList.add("title");
          document.getElementById("costAllOrders").appendChild(titleCost);
          document.getElementById("title-cost").innerHTML = "Custo de todas as viagens";

          comissionProj = document.createElement("tr");
          comissionProj.id = "comissionProj";
          comissionProj.classList.add("comissionProj");
          document.getElementById("projections").appendChild(comissionProj);
          let titleComission = document.createElement("td")
          titleComission.id = "title-comission";
          titleComission.classList.add("title");
          document.getElementById("comissionProj").appendChild(titleComission);
          document.getElementById("title-comission").innerHTML = "Comissão para todos os pedidos";

          let costMonth = document.createElement("tr");
          costMonth.id = "cost-month";
          costMonth.classList.add("costMonth");
          document.getElementById("projections").appendChild(costMonth);
          let titleCostM = document.createElement("th")
          titleCostM.id = "title-costM";
          titleCostM.classList.add("titleTh");
          document.getElementById("cost-month").appendChild(titleCostM);
          document.getElementById("title-costM").colSpan = "25";
          document.getElementById("title-costM").innerHTML = "Todas as despesas";

          for (let i = 1, j = 0; i < 25; i++) {
               let number = document.createElement("td");
               number.id = "number-per-day-" + i;
               number.classList.add("progression");
               document.getElementById("numberPerDay").appendChild(number);

          }

          document.getElementById("number-per-day-24").innerHTML = endNumberInt;

          for (let n = 1, f = 1; n < 24, f < 25; n++, f++) {
               numberProg = (endNumber / 24) * n;
               let numberProgInt = parseInt(numberProg);
               document.getElementById("number-per-day-" + n).innerHTML = numberProgInt;

               let calcOrderM = (numberProgInt * 30);
               let ordersM = document.createElement("td");
               ordersM.id = "order-month-" + f;
               ordersM.classList.add("progression");
               document.getElementById("orderMonth").appendChild(ordersM);
               document.getElementById("order-month-" + f).innerHTML = calcOrderM.toFixed(0);

               let calcCostAll = calcOrderM * getAveragePrice()
               let costAll = document.createElement("td");
               costAll.id = "cost-all-" + f;
               costAll.classList.add("progression");
               document.getElementById("costAllOrders").appendChild(costAll);
               document.getElementById("cost-all-" + f).innerHTML = calcCostAll.toFixed(0);

               let calcComission = calcCostAll * comission;
               let comissionProj = document.createElement("td");
               comissionProj.id = "comission-" + f;
               comissionProj.classList.add("progression");
               document.getElementById("comissionProj").appendChild(comissionProj);
               document.getElementById("comission-" + f).innerHTML = calcComission.toFixed(0);
          }
          projCosts();
     }

