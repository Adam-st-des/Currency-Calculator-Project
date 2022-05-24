const formElement=document.querySelector(".js-form")
const formResult=document.querySelector(".form__result")
const amountField=document.querySelector(".js-amount")
const currency=document.querySelector(".js-currency")


const GBP= 5.3772;
    const CHF=4.4523;
    const USD=4.2979;
    const EUR=4.6010;
    const JPY= 3.3847;	
    const R= 0.2831;
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
     
    const amount = +amountField.value;
    const curr = currency.value;
    let result;
    switch(curr){
 
        case "GBP":
        result=amount/GBP;
        break;
        case "CHF":
        result=amount/CHF;
        break;
        case "USD":
        result=amount/USD;
        break;
        case "EUR":
        result=amount/EUR;
        break;
        case "JPY":
        result=amount/JPY;
        break;
        case "R":
        result=amount/R;
        break;
        
}
formResult.innerHTML=`${amount.toFixed(2)} PLN = <strong class="PLN">${result.toFixed(2)} ${curr}</strong>`




})


    
        




