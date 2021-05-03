var input=process.argv.slice(2);//initiating input to store command line arguments
var transformedArray=[];//initiating array
var dict = {};//initiating dictionary
var output=""; //initiating output str

dict["0"]="Zero"; //creating dictionary
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
  transformedArray.push(toStr(input[i],dict));//pushing each int to toStr to convert to phonetic
}
for(var i=0;i<transformedArray.length;i++){//print loop
  if(!(i==transformedArray.length-1)){
    output+=transformedArray[i]+",";//adding each transformedArray element to the output str
  }
  else{
    output+=transformedArray[i]; //adding last element of transformedArray to ouput str
  }
}
console.log(output)

function toStr(input,dict){
  var output="";//initializing output of function
  for(var i=0;i<input.length;i++){
    output+=dict[input[i]];//adding each digit from dict into output str
  }

  return output;//returning
}
