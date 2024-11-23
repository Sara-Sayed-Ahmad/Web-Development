// Task-2: Calculates the total sum and the average of the numbers
const calculates = () =>{
    const numArray = [60, 70, 99, 83, 65, 45, 88, 94, 50, 33];
    let average = 0;
    
    const totalSum = numArray.reduce((sum, num) => sum + num, 0);
    average = totalSum / numArray.length;
    
    return `Total Sum = ${totalSum}\n Average = ${average}`;
}
console.log(calculates());

// ------------------------------------------------------------

//Task-3: Removes all duplicates from the array
const RemoveDuplicate = () =>{
    const array = ["Apple", "Orange", "Banana", "Orange", "Grapes", "Tomato", "Apple", "Banana"]; 

    let withoutDupl = new Set();
    let duplicate = new Set();

    array.forEach(arr => {
        if(withoutDupl.has(arr)){
            duplicate.add(arr);
        }
        else{
            withoutDupl.add(arr);
        }
    });
    return [...withoutDupl];
}
console.log(RemoveDuplicate());