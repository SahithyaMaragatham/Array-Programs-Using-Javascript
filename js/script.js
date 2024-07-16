//array finding maximum and minimum
//maximum
let arr=[10,20,30,40,50];
function maximum(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log("Maximum"+" " + maximum(arr));
//minimum
let arr2 = [10, 20, 30, 40, 50];
function minimum(arr2) {
  let min = arr2[0]; 
  for (let i = 0; i < arr2.length; i++){
    if (arr2[i] < min){
      min = arr2[i];
    }
  }
  return min;
}
console.log("Minimum"+minimum(arr2));

//array creation and array initialization,manipulation
let a=[1,2,3,4,5];
console.log("create a array" + " " +a);//creation 
console.log("Accessing a element"+" " +a[4])//accessing
let b=[1,2,3,4,5];
b.push(7);//push
console.log("Push a element"+" " +b);
b.pop(3);//pop
console.log("Pop a element"+" " +b);

//sorting
let c=[22,33,11,44,66,77];
c.sort();
console.log("sorting a array"+" "+c);
//reverse
c.reverse();
console.log("reverse a array"+" " +c);

//filter()
let d=[10,20,30,33,34,44];
let res=d.filter(eligible);
function eligible(d){
    return d>=18;
}
console.log("Filter an array"+" "+res);

//map
let e=[2,3,4,5,6]
let result=e.map(square);
function square(e){
    return e*e;
}
console.log("Map"+" "+result);