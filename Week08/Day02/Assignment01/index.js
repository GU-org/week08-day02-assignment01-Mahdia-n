function bmiCalc(w,h){
    let bmi=w/Math.pow(h,2);
    return bmi;
}
let weight=prompt("Enter your weight in kg");
let height=prompt("Enter your height in m");
let bmi=bmiCalc(weight,height);
if(bmi<18.5){
    alert("Underweight");
}else if(bmi>=18.5 && bmi<24.9){
    alert("Normal weight");
}else if(bmi>=25 && bmi<29.9){
    alert("Overweight");
}else if(bmi>=30){
    alert("Obese");
}