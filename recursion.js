function sum(i){
    if(i==1){
        return i;
    }
    return i+sum(i-1);
}
console.log(sum(5))




function factorial(i){
    if(i==0){
        return 1;
    }
    if(i==1){
        return 1;
    }
    return i*factorial(i-1) 
}
a= factorial(5)
console.log(a)