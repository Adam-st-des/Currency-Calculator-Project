{
const calculate = (amount, currency)=> {
    
    const GBP= 5.3772;
    const CHF=4.4523;
    const USD=4.2979;
    const EUR=4.6010;
    const JPY= 3.3847;	
    const R= 0.2831;
    
    switch(currency){
 
        case "GBP":
        return amount/GBP;
    
        case "CHF":
        return amount/CHF;
        case "USD":
        return amount/USD;
        
        case "EUR":
        return amount/EUR;
    
        case "JPY":
        return amount/JPY;
    
        case "R":
        return amount/R;
        
        
}


}
const updateResultText = (amount, result, currency)=> {
    const formResult=document.querySelector(".form__result")
formResult.innerHTML=`${amount.toFixed(2)} PLN = <strong class="PLN">${result.toFixed(2)} ${currency}</strong>`


}
const onFormSubmit =(e)=> {
    e.preventDefault();
    const amountField=document.querySelector(".js-amount")
const currencyElement=document.querySelector(".js-currency")
    
const amount = +amountField.value;
    const currency = currencyElement.value;
    
    let result= calculate(amount, currency);
    updateResultText(amount, result, currency);

}

const init =()=>{
    const formElement=document.querySelector(".js-form")
    formElement.addEventListener("submit",  onFormSubmit)

}
init ();
}
