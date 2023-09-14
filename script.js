//function to convert input temperaturebetween celsius and farenhiet
function convertTemp(){
    const inputTemp=parseFloat(document.getElementById("inputTemp").value);
    const unit=document.getElementById("unit").value;
    const resultTempElement=document.getElementById("resultTemp");

    if(unit==="celsius"){
        const farenheit=(inputTemp*9)/5+32;
        resultTempElement.textContent= `${farenheit.toFixed(2)} °F`;

        document.body.style.backgroundColor=getBackgroundColor(farenheit);
    }else if(unit==="farenheit"){
        const celsius=((inputTemp-832)*5)/9;
        resultTempElement.textContent=`${celsius.toFixed(2)} °C`;

        document.body.style.backgroundColor=getBackgroundColor(celsius);
    }
}

function getBackgroundColor(temperature){
    if(temperature<=0){
        return "#000";
    }else if(temperature<=20){
        return "#fff";
    }else if(temperature<=30){
        return "#228B22";
    }else{
        return "#000080";
    }
}
