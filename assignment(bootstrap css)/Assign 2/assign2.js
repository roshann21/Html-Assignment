var a =null;
function StartTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('x1').innerHTML =  h + ":" + m + ":" + s;
    a=setTimeout(StartTime,1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
  function stopTime(){

    clearTimeout(a);
  }