const input=document.querySelector(".input");
const convert=document.querySelector(".convert");
const length1=document.getElementById("meter");
const volume=document.getElementById("liter");
const mass=document.getElementById("gram");
console.log(length1);
console.log(volume);
console.log(mass);

function convertvalue(){
    let a=input.value;
    if(a=="")
        alert("please enter a value")
    else{
        let inputvalue= parseFloat(a);
        console.log(inputvalue);
        let convertedmeter = Math.floor((inputvalue/3.281)*1000)/1000;
        let convertedfeet=Math.floor((inputvalue*3.281)*1000)/1000;
        let convertedliter = Math.floor((inputvalue/.264172)*1000)/1000;
        let convertedgalon=Math.floor((inputvalue*(0.264172))*1000)/1000;
        let convertedkg = Math.floor((inputvalue/2.204)*1000)/1000;
        let convertedpound=Math.floor((inputvalue*2.204)*1000)/1000;
       
        length1.innerHTML= inputvalue+" meters = "+convertedfeet+" feet | "+inputvalue+" feet = "+convertedmeter+" meters";
        volume.innerHTML= inputvalue+" liters = "+convertedgalon+" galons | "+inputvalue+" galons = "+convertedliter+" liters";
        mass.innerHTML= inputvalue+" kilograms = "+convertedpound+" pounds | "+inputvalue+" pounds = "+convertedkg+" kilograms";
       
    }
}