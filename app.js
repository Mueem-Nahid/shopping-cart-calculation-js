const price_per_phone = parseInt(document.getElementById("phone_cost").innerText);
const price_per_case = parseInt(document.getElementById("case_cost").innerText);
const tax = parseInt(document.getElementById("tax").innerText);

//---------for phone------------
document.getElementById("phone_inc").addEventListener("click", function(){
    changeValue("phone_input", 1, "phone_cost", 1);  
})

document.getElementById("phone_dec").addEventListener("click", function(){
    changeValue("phone_input", 0, "phone_cost", 1);  
})

//---------for case------------
document.getElementById("case_inc").addEventListener("click", function(){
    changeValue("case_input", 1, "case_cost", 0);  
})

document.getElementById("case_dec").addEventListener("click", function(){
    changeValue("case_input", 0, "case_cost", 0);  
})

function changeValue(id, check, price_id, item)
{
    let value = parseInt(document.getElementById(id).value) ;
    if(value>=0)
    {
        if(check==1)
        {
            value++;
        }else{
            if(value!=0)
            {
                value--;
            }     
        }
        totalCost(value, price_id, item);
        document.getElementById(id).value=value;
    }
}

function totalCost(value, price_id, item)
{
    
    const phone_price =  price_per_phone;
    const case_price = price_per_case;
    var phone_total_cost;
    var case_total_cost;
    if(item == 1)
    {
        phone_total_cost = phone_price*value;
        document.getElementById(price_id).innerText=phone_total_cost;
    }
    else if(item == 0)
    {
        case_total_cost = case_price*value;
        document.getElementById(price_id).innerText=case_total_cost;
    }
    var subtotal = parseInt(document.getElementById("phone_cost").innerText) + parseInt(document.getElementById("case_cost").innerText);
    
    document.getElementById("subtotal").innerText = subtotal;
    const total = subtotal + (subtotal*(tax/100));
    document.getElementById("total").innerText = total;

}