var groupeA=[{name:"Qatar",img:"./img/QAT.webp"},{name:"Ecuador",img:"./img/ECU.avif"}, 
{name:"Netherlands",img:"./img/NED.webp"},{name: "Senegal",img:"./img/SEN.avif"}];


var groupeB=[{name:"England",img:"./img/ENG.webp"},{name:"Iran",img:"./img/IRN.webp"}, 
{name:"Netherlands",img:"./img/NED.webp"},{name: "Wales",img:"./img/WAL.webp"}];


var groupeC=[{name:"Argentina",img:"./img/ARG.webp"},{name:"Saudi Arabia",img:"./img/KSA.webp"}, 
{name:"Mexico",img:"./img/MEX.avif"},{name: "Poland",img:"./img/POL.webp"}];

var groupeD=[{name:"France",img:"./img/FRA.webp"},{name:"Australia",img:"./img/AUS.webp"}, 
{name:"Denmark",img:"./img/DEN.webp"},{name: "Tunisia",img:"./img/TUN.webp"}];


var groupeE=[{name:"Spain",img:"./img/ESP.avif"},{name:"Costa Rica",img:"./img/CRC.avif"}, 
{name:"Germany",img:"./img/GER.avif"},{name: "Japan",img:"./img/JPN.webp"}];


var groupeF=[{name:"Belgium",img:"./img/BEL.webp"},{name:"Canada",img:"./img/CAN.webp"}, 
{name:"Morocco",img:"./img/MAR.webp"},{name: "Croatia",img:"./img/CRO.avif"}];


var groupeG=[{name:"Brazil",img:"./img/BRA.avif"},{name:"Serbia",img:"./img/SRB.avif"}, 
{name:"Switzerland",img:"./img/SUI.webp"},{name: "Cameroon",img:"./img/CMR.webp"}];

var groupeH=[{name:"Portugal",img:"./img/POR.avif"},{name:"Ghana",img:"./img/GHA.webp"}, 
{name:"Uruguay",img:"./img/URU.webp"},{name: "South Korea",img:"./img/KOR.avif"}];


var listeGroupe=[groupeA,groupeB,groupeC,groupeD,groupeE,groupeF,groupeG,groupeH]
var hasard =[]
function qual(){
for(var draw =0 ; draw <16; draw++){
    var myArray = [0, 1,2,3];    
  var a =  myArray[Math.floor(Math.random() * myArray.length)];
  hasard.push(a);
}
console.log(hasard);}

