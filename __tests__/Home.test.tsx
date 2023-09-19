import {render, screen} from '@testing-library/react'
import Home from '@/app/page'


it('Should have Hello text', ()=>{
    render(<Home/>)
    const word = screen.getByText('Hello World')
    expect(word).toBeInTheDocument()
})