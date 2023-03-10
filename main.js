// import {fee, cnpj, rent, ad, furn, equip, other} from './modules/GetElements.mjs';

function getFranchiseFee(franchiseFee = 0) {
     franchiseFee = document.getElementById("franchiseFee");
     // console.log(franchiseFee.value);
     return parseFloat(franchiseFee.value);
}

function getCnpj(cnpj = 0) {
     cnpj = document.getElementById("cnpj");
     // console.log(cnpj.value);
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
     }
     else{
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
     if (sum > 0) {
        document.getElementById("total-mes").innerHTML = sum + " R$";
   }
   else{
      document.getElementById("total-mes").innerHTML = "Preencha todos os campos";
   }
}
