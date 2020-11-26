function display(){
    var status;
    function display1(login){
        var v=login();
        if(v==1){
            status=1;
        }
        else{
            document.getElementById("err").style.color="red";
           alert( "Incorrect username or password");
            status=0;

        }
    }
function validate() {

    var uname="admin";
    var password="12345";
    var username=document.getElementById("num").value;
    var passwd=document.getElementById("pwd").value;

    if((username==uname) && (passwd==password)){
       return 1;
       }
    else{
       return 0;
        }
    }
    
    display1(validate);
    if(status==0){
        return false;
    }
    else{
        return true;
    }
}
