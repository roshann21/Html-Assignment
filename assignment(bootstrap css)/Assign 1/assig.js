var array = []
function myFunctionadd() {

    var fname = document.getElementById('x1').value;
    var lname = document.getElementById('x2').value;
    var roll = document.getElementById('x3').value;
    var edu= document.getElementById('x4').value;
    if (fname == "" || lname == "" || roll == "" || edu == "")
    {
        alert("Please enter all the inputs properly");
    }
    else {
        var record = {
            first: fname,
            last: lname,
            Rno: roll,
            eductn:edu
            
        }
        array[array.length] = record

        document.getElementById('x1').value = "";
        document.getElementById('x2').value = "";
        document.getElementById('x3').value = "";
        document.getElementById('x4').value = "";
        console.log(array);


    }
}
function myFunctiondetail() {
    console.log(array);
    x = "";
    // for(var i=0;i<=array.length;i++)
    for (val of array) {
        x = x + `
            <tr>
                        <th style="color:rgb(246, 11, 11)">${val.first}</th>
                        <th style="color:rgb(246, 11, 11)">${val.last}</th>
                        <th style="color:rgb(246, 11, 11)">${val.Rno}</th>
                        <th style="color:rgb(246, 11, 11)">${val.eductn}</th>
                    </tr>
            `
    }
    console.log(x);
    document.getElementById("result").innerHTML = x;
}

