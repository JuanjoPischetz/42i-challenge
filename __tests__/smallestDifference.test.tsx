import { smallestDifference } from "@/services/controllers";

// Functional unitary test of smallestDifference function thats verify the function works properly


describe('Smallest Difference Tests',()=>{
    let a = [1, 3, 15, 11, 2];
    let b = [23, 127, 235, 19, 8];
    it('it should be 3',()=>{
        expect(smallestDifference(a,b)).toBe(3)
    })
    it('it should be 10',()=>{
        a=[10, 5, 40];
        b=[50, 90, 80];
        expect(smallestDifference(a,b)).toBe(10)
    })
})