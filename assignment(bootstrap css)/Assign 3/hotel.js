function myFuntion(){
    var x = document.getElementById("p1").value;
    var y = document.getElementById("p2").value;
    var z = document.getElementById("p3").value;
    
    var expense;
    if(z=="Deluxe"){
        if(y>5){

            expense = x * 2000 * y-x*250*y
        }
        else
            expense = x * 2000*y;
    }

    if(z=="Bussiness"){
        
        if(y>3){
            expense =x * 1000 * y - x * 100 * y;
        }
        else
            expense = x * 1000 * y;
    }
    if(z=="Economy")
    {
        expense = x * 500 * y;
    }

    document.getElementById('a1').value=expense

}