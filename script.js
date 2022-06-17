var groupeA=[{name:"Qatar",img:"./img/QAT.webp"},{name:"Ecuador",img:"./img/ECU.avif"}, 
{name:"Netherlands",img:"./img/NED.webp"},{name: "Senegal",img:"./img/SEN.avif"}];


var groupeB=[{name:"England",img:"./img/ENG.webp"},{name:"Iran",img:"./img/IRN.webp"}, 
{name:"Netherlands",img:"./img/NED.webp"},{name: "Senegal",img:"./img/SEN.avif"}];


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
function draw(){

    for (var a = 0; a < listeGroupe.length; a++) {

        if (a == 0) {
            document.write("<div class='row'>");
        }
        if (a == 2) {
            document.write("<div class='row'>");
        }
        if (a == 4) {
            document.write("<div class='row'>");
        }

        document.write(
            "<div class='col-6'><table class='table table-bordered border-primary'><thead class='table-primary'><th>N°</th><th>Nom</th> <th>Etat</th> </thead><tbody>"
            );

            document.write("<h1>groupe "+eval(a + 1)+"</h1>");
        for (var i = 0; i < listeGroupe[a].length; i++) {
            var myArray = [0, 1,2,3];    
            var a =  myArray[Math.floor(Math.random() * myArray.length)];
            var b =  myArray[Math.floor(Math.random() * myArray.length)];

if(i==a||i==b){
            document.write("  <tr><th>" + eval(i + 1) + "</th><th><img width='25px' src='" + listeGroupe[a][
                i
            ].img + "'> " + listeGroupe[a][i].name + "</th> <th> Qualifie</th>    </tr>");
        }else {
    document.write("  <tr><th>" + eval(i + 1) + "</th><th><img width='25px' src='" + listeGroupe[a][
        i
    ].img + "'> " + listeGroupe[a][i].name + "</th> <th> Qualifie</th>    </tr>");
}
        }

        document.write(" <tbody></table></div>")
        if ((a == 0)) {
            document.write("</div>");
        }
        if ((a == 2)) {
            document.write("</div>");
        }
        if ((a == 4)) {
            document.write("</div>");
        }
    }

}