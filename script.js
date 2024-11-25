function cal(){
    var operand1=document.getElementById('first').value;
    var operand2=document.getElementById('second').value;
    var operator=document.getElementById('operator').value;
    if(operator== '+'){
        var res=parseInt(operand1) + parseInt(operand2);
    }
    if(operator== '-'){
        var res=parseInt(operand1) - parseInt(operand2);
    }
    if(operator== '*'){
        var res=parseInt(operand1) * parseInt(operand2);
    }
    if(operator== '%'){
        var res=parseInt(operand1) % parseInt(operand2);
    }
    if(operator== '/'){
        var res=parseInt(operand1) / parseInt(operand2);
    }
    document.getElementById('res').value=res;
}