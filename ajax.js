function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var out = "<table cellpadding='20'  id='Table1'><tr><th> </th><th> </th></tr>";
            for(var i=0; i<response.length; i++) {
                out += "<tr><td><input class='hello' type='checkbox' value=i onclick=countChecked(this)>" +"</td><td>" + response[i].title +"</td></tr>";
            }
            document.getElementById("shopList").innerHTML ="<br>"+ out + "</table>"+ "<br>";
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}


function countChecked(){
    let myPromise= new Promise(function(myResolve, myReject) {
    var check=document.querySelectorAll('input[type="checkbox"]');
    var count=0;
    for(var i=0;i<check.length;i++){
    if(check[i].checked==true&&check[i].disabled==false){
    count++;
    }
    if(count<5){
    continue;
    }
    else{
    myResolve(check);
    }
    } 
    });
    
    myPromise
    .then(function(check){
    alert('Congrats 5 Tasks have been Successfully Completed.');
    for(var i=0;i<check.length;i++){
    check[i].disabled=true;
    }
    }) 
    .catch(function(){
    alert('Error on selection');
    }); 
   }
   
   function editOption(){
    var inputCheck=document.querySelectorAll('#customCheck1');
    for(var i=0;i<inputCheck.length;i++){
    inputCheck[i].checked=false;
    inputCheck[i].disabled=false;
    }
   }  