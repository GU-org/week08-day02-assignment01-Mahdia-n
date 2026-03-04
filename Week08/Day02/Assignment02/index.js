function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    

if((year %4==0 && year% 100!==0) || (year%400==0)){
    alert(year +" is a leap year");
}
else{
    alert(year +" is not a leap year.")
}

    

/**************Don't change the code below****************/    

} 
isLeap(2400)


