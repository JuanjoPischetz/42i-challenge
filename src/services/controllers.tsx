/*
    Smallest Difference:

    This function receives 2 arrays of positive integers as arguments, then search for the smallest
    difference between a pair and returns the smallest difference.
*/
export const smallestDifference =(arr1 : number[], arr2 : number[])=>{
    let difference : number = Math.abs((arr1[0]-arr2[0]))
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0 ; j<arr2.length; j++){
            let carry = Math.abs((arr1[i]-arr2[j]))
            difference > carry ? difference = carry : null
        }
    }
    return difference
}

/*
    Non Constructible Change:

    This function receives an array of positive integers as argument and returns the minimun sum that
    can´t be formed by adding up elements from the array.

    It have to break cases, when array length is cero returns 1 and if array length is 1, 
    returns array[0] + 1.

    if array length > 1 sorts the array (ascending order) then return the accumulative sumatory adding one
    when sum + 1 < array[i]. finally returns sum + 1 if iterates untill the end. 
*/

export const nonConstructibleChange = (arr : number[])=>{
    if (arr.length === 0 ) return 1
    if(arr.length === 1) return arr[0]+1
    arr.sort((a,b)=>a-b)
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++){
        if(sum + 1 < arr[i]){
            return sum + 1
        }
        else sum = sum + arr[i]
    }
    return sum + 1
}


/*
    This function takes a string and returns an integer array.
    -Removes whitespaces characters
    -Removes comas till find a number
    -Splits the string into a string array using coma as delimiter
    -Parse each element to integers
*/

export const transformToIntegerArray = (argument : string) =>{
    const cleanArgument = argument.replace(/ /g, "")
    const startsWithNumber = cleanArgument.replace(/^[^\d]*(\d)/, '$1');
    const eliminatedComas = startsWithNumber.replace(/,+/g, ",")
    const preliminarArray = eliminatedComas.split(',')
    const result = preliminarArray.map((element) => parseInt(element,10))
    return result
}