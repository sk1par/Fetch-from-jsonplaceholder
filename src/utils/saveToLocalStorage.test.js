import saveToLocalStorage from './saveToLocalStorage';
jest.spyOn(window.localStorage.__proto__, 'setItem');
window.localStorage.__proto__.setItem = jest.fn();
  

it( 'setItem mock fn', () => {
    saveToLocalStorage('test');
    expect(localStorage.setItem).toHaveBeenCalled();
} );