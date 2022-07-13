const { render } = require("@testing-library/react");

test("increments counter",()=> {
    render(<counter/>);
    const counter = screen.getbytestid("counter");
    const incrementsBtn = screen.getByTestid("increment");
    
    fireEvent.click(incrementsBtn);
    //assert the expected result
    expect(counter).toHaveTestcountent("1");
    fireEvent.click(incrementsBtn);("2");
    ///assert the expected result

    expect(counter).toHaveTextcountent

    ///console.log('Testin is awsome..');


});
test("decrements counter",()=)


test('second test',function() {
    
    console.log('second test');


});