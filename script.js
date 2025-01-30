
function calcular(){
    event.preventDefault();

    let ÁlcoolInput = document.getElementById("Álcool").value;
    let GasolinaInput = document.getElementById("Gasolina").value;
    let resultado = document.getElementById("resultado");
    let textresult = document.getElementById("text-result");

    let gasolinaspan = document.getElementById("gasolina-result");
    let alcoolspan = document.getElementById ("alcool-result");

    let calculo = (ÁlcoolInput / GasolinaInput);

   if (calculo < 0.7){
    // Aqui compensa usar Álcool
   textresult.innerHTML = "Compensa usar Álcool";
   }else{
    //Compensa usar Gasolina
 textresult.innerHTML = "Compensa usar Gasolina";
   }

   gasolinaspan.innerHTML = "Gasolina R$ " + GasolinaInput;
   alcoolspan.innerHTML = "Álcool R$" + ÁlcoolInput;



   resultado.classList.remove("hide")

}