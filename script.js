
int = document.getElementById("int")
var output = document.querySelector(".out")
function calculateElectricityBill(unit){
    


 if(unit < 100)  
    {  
        billToPay = unit * 2.25;  
    }  

    else if(unit < 200){  
        billToPay = 100 * 2.25 + (unit - 100) * 3.25;  
    }  
    
    else if(unit < 300)  
    {  
        billToPay = 100 * 2.25 + 200 * 3.25 + (unit - 200) * 5.40;  
    }  
     else if (unit < 400)
 {
billToPay = 100 * 2.25 + 200 * 3.25 + 300 * 5.40 + (unit - 300)*6.80
}

else int.value ==="";
 document.getElementById("result").innerHTML = ""
return Math.round(billToPay);

}
document.getElementById("sum"). addEventListener("click", ()=>{
  const ok = calculateElectricityBill(int.value)
  const okay = calculateElectricityBill(int.value)
  const oka = calculateElectricityBill()


})

sum.addEventListener("click", function(){
output.style.display="block"
})


int = document.getElementById("int")
var output = document.querySelector(".out")
function calculateElectricityBill(unit){

 if(unit < 100)  
    {  
        billToPay = unit * 2.25;  
    }  

    else if(unit < 200){  
        billToPay = 100 * 2.25 + (unit - 100) * 3.25;  
    }  
    
    else if(unit < 300)  
    {  
        billToPay = 100 * 2.25 + 200 * 3.25 + (unit - 300) * 5.40;  
    }  
     else if (unit < 400)
 {
billToPay = 100 * 2.25 + 200 * 3.25 + 300 * 5.40 + (unit - 400)*6.80
}

 return document.getElementById("result").innerHTML = `Energy amount: ${billToPay}

   <br> Fixed charge: 30 <br> Total Bill: ${(billToPay + 30 )}`
}
document.getElementById("sum"). addEventListener("click", ()=>{
  const ok = calculateElectricityBill(int.value)
  output.style.display = "block"
})