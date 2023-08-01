const request = new XMLHttpRequest();

request.open("GET", "https://api.adviceslip.com/advice");
request.send();
request.onload = () =>{
    console.log(request);    
    if(request.status == 200){
        console.log(JSON.parse(request.response));
        var advice = JSON.parse(request.response);
        console.log("the number of the advice : " + advice.slip.id);
        console.log("the advice : " + advice.slip.advice);
        document.getElementById("Advice-id").innerHTML = advice.slip.id;
        document.getElementById("advice").innerHTML = advice.slip.advice;
    }else{
        console.log("Erorr cant load");
    }
}

function refresh(){
    document.location.reload(true);
}