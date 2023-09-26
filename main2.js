const result = document.getElementById("result"); 
result.value = "0";
function numClick(val){
  if(result.value == "0" && val == "0"){
     result.value = "0";
    }else if(result.value == "0" && val =="00"){
     result.value = "0";
    }else if(result.value == "0" && val == "."){
     result.value = "0.";
    }else if(result.value == "0"){
     result.value = val;
    }else if(result.value.slice(-1) == "+" && val == "."){
     result.value = result.value + "0.";
    }else if(result.value.slice(-1) == "-" && val == "."){
     result.value = result.value + "0.";
    }else if(result.value.slice(-1) == "*" && val == "."){
     result.value = result.value + "0.";
    }else if(result.value.slice(-1) == "/" && val == "."){
     result.value = result.value + "0.";
    }else{
     result.value += val;  
    } 
}

function opeClick(val){
  if(result.value.slice(-1) == "+"){
    result.value = result.value.slice(0,-1) + val;
  }else if(result.value.slice(-1) == "-"){
    result.value = result.value.slice(0,-1) + val;
  }else if(result.value.slice(-1) == "*"){
    result.value = result.value.slice(0,-1) + val;
  }else if(result.value.slice(-1) == "/"){
    result.value = result.value.slice(0,-1) + val;
  }else if(result.value.slice(-1) == "." && val == "+"){
    result.value = result.value;
  }else if(result.value.slice(-1) == "." && val == "-"){
    result.value = result.value;
  }else if(result.value.slice(-1) == "." && val == "*"){
    result.value = result.value;
  }else if(result.value.slice(-1) == "." && val == "/"){
    result.value = result.value;
  }else{
    result.value += val;
  }
}
function equalClick(){
  result.value = eval(result.value);
}
function acClick(){
  result.value = "0";
}