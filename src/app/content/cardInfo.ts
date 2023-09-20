export interface contentBody {
    title:string,
    body:string,
    path:string
}

export const cardContent : contentBody[] = [
    {
        title:'Smallest Difference',
        body:'Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.',
        path:'/smallestdifference'
    },
    {
        title:'Non-Constructible Change',
        body:'Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.',
        path:'/nonconstructiblechange'
    },
]