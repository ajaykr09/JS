function func1(){
    var temp=prompt("Enter the Temperature in Celcius: ");
    temp*=9;
    temp/=5;
    temp+=32;
    alert(temp+"• Fahrenheit");
}
function func2(){
    var temp=prompt("Enter the Temperature in Fahrenheit: ");
    temp-=32;
    temp*=5;
    temp/=9;
    alert(temp+"• Celcius");
    
}