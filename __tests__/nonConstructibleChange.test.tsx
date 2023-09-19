import { nonConstructibleChange } from '@/services/controllers'

// Functional unitary test of nonConstructibleChange function thats verify the function works properly

describe('Non Constructible Change Tests', ()=>{
    it('Testing array with no elements' ,()=>{
        expect(nonConstructibleChange([])).toBe(1);
    
    });
    it('Testing array with one element', ()=>{
        expect(nonConstructibleChange([1])).toBe(2);
        expect(nonConstructibleChange([7])).toBe(8);
    });
    it('Testing array with 2 or more elements', ()=>{
        expect(nonConstructibleChange([1,2,5])).toBe(4);
        expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
    });
})