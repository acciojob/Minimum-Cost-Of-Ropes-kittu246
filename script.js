function calculateMinCost() {
  //your code here
  let finalsum =0;
  
    while(n>1){
      arr.sort((a,b) => a-b);

      let sum = arr[0]+arr[1];

      //console.log(sum);

      arr.splice(0,2,sum);

      finalsum = finalsum + sum  ;
      n--;

    }

    return finalsum;
  
  
}  
