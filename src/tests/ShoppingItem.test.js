import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShoppingItem from '../../src/components/ShoppingItem'

test('Should call handleClick when button is clicked', ()=>{

    //arrange
    const handleTickMock = jest.fn();
    render(<ShoppingItem item={{id:"id", name:"Milk", checked:false}} handleTick={handleTickMock} />);

    //act
    const dataTestIDMilk = screen.getByTestId("shopping-item-button-Milk");
    fireEvent(dataTestIDMilk, new MouseEvent("click", { bubbles: true, cancelable: false }));
    
    //assert
    expect(handleTickMock.mock.calls.length).toBe(1);
    expect(handleTickMock.mock.calls[0][0]).toBe("id"); //mocks.calls is an array
})
