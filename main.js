var input=process.argv.slice(2);
var transformedArray=[];
var dict = {};
var output="";

dict["0"]="Zero";
dict["1"]="One";
dict["2"]="Two";
dict["3"]="Three";
dict["4"]="Four";
dict["5"]="Five";
dict["6"]="Six";
dict["7"]="Seven";
dict["8"]="Eight";
dict["9"]="Nine";
for(var i=0; i<input.length;i++){
  transformedArray.push(toStr(input[i],dict));
}
for(var i=0;i<transformedArray.length;i++){
  if(!(i==transformedArray.length-1)){
    output+=transformedArray[i]+",";
  }
  else{
    output+=transformedArray[i];
  }
}
console.log(output)

function toStr(input,dict){
  var output="";
  for(var i=0;i<input.length;i++){
    output+=dict[input[i]];
  }

  return output;
}
