import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Main from '../../src/components/MainComponent'

//test functionality (UI or UX)

// test that page does render with 3 items, textbox and title
test('Should display page title and textbox to add items to shopping list', async () => {
    //arrange
    render(<Main />);

    //act
    const title = screen.getByText("My Shopping List");
    const textbox = screen.getByRole("textbox");
    const additembutton = screen.getByText("Add me!");
    
    //assert
    expect(title).toBeInTheDocument();
    expect(await screen.findAllByText('My Shopping List')).toHaveLength(1);
    expect(textbox).toBeInTheDocument();
    expect(additembutton).toBeInTheDocument();
    expect(await screen.findAllByText('Add me!')).toHaveLength(1);
    expect(await screen.findAllByText('Tick!')).toHaveLength(3);
  });

// test for adding item 
test('Should display new shopping item when new item is added to the list', async () => {
    //arrange
    render(<Main />); //read doc for all the functionality for testing

    //act
    const textbox = screen.getByRole("textbox");
    fireEvent.change(textbox, {target: {value: "Mint"}});
    const additembutton = screen.getByText("Add me!");//how to get a button 
    fireEvent(additembutton, new MouseEvent("click", { bubbles: true, cancelable: false }));
    
    //assert
    expect(screen.getByText("Mint")).toBeInTheDocument();
    expect(await screen.findAllByText('Tick!')).toHaveLength(4); //to check that you have 4 tick buttons
  });

// test for ticking item
test('Should only be able to tick item button once', async () => {
  //arrange
  render(<Main />);

  //act
  //const milkItemStyle = screen.getByText("Milk").style
  //const milkItemStyle = screen.getByText("Milk")
  //const milkItemButton = screen.getByText("Milk").closest(".item")
  //const milkItemButton = screen.getByText("Milk").closest(".item").closest("button")
  const buttons = await screen.findAllByText("Tick!");
  const milkItemButton = buttons[0];
  const datatestidmilk = await screen.getByTestId("shopping-item-button-Milk");
  //fireEvent(milkItemButton, new MouseEvent("click", { bubbles: true, cancelable: false }))
  fireEvent(datatestidmilk, new MouseEvent("click", { bubbles: true, cancelable: false }));
  const milkItemStyle = screen.getByText("Milk");
  
  //assert
  expect(datatestidmilk).toBeDisabled();
  //expect(milkItemButton).toBeDisabled()
  //expect(milkItemStyle).toHaveStyle("text-decoration: line-through;")
  //await waitFor(()=>expect(milkItemStyle.style.textDecoration).toBe('line-through'));
  expect(milkItemStyle.className).toBe("ticked");
  //expect(milkItemStyle.style.textDecoration).toBe("line-through")
  
});

// can't add item if you add invaid character
test('Should alert to enter valid text if invalid characters entered', async () => {
  //arrange
  render(<Main />);

  //act
  const textbox = screen.getByRole("textbox");
  const alertSpy = jest.spyOn(window,'alert');
  fireEvent.change(textbox, {target: {value: "@"}});
  const additembutton = screen.getByText("Add me!");
  fireEvent(additembutton, new MouseEvent("click", { bubbles: true, cancelable: false }));
  
  //assert
  expect(alertSpy).toHaveBeenCalledTimes(1);
  expect(window.alert).toHaveBeenCalledWith("Please enter a value");
  expect(await screen.findAllByText('Tick!')).toHaveLength(3);
});

test('Should not add item to list when invalid input given', async () => {
  //arrange
  render(<Main />);

  //act
  const textbox = screen.getByRole("textbox");
  fireEvent.change(textbox, {target: {value: "@"}});
  const additembutton = screen.getByText("Add me!");
  fireEvent(additembutton, new MouseEvent("click", { bubbles: true, cancelable: false }));
  
  //assert
  expect(await screen.findAllByText('Tick!')).toHaveLength(3);
});

// api call to back end system then check that render is working correctly (example of other things to test in other apps)
