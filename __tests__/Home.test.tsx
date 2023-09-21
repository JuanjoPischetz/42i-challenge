import {render, screen} from '@testing-library/react'
import Home from '@/app/page'


it('Should have Welcome', ()=>{
    render(<Home/>)
    const word = screen.getByText(/Welcome/)
    expect(word).toBeInTheDocument()
})

/**
    Simple UI test. I just learn how to use Jest and testing for this challenge, never tested before
    (manual testing only, trying to break my code).
    I really hope to learn a lot of UI testing in your company.
 */