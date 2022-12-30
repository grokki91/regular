import Validator from '../app/Validator';

describe(('Check function Validator'), () => {
  test(('Check correct validation'), () => {
    const validation = new Validator('Gamer');
    expect(validation.validateUserName()).toBeTruthy();
  });
  test(('Check empty validation'), () => {
    const validation = new Validator('');
    expect(validation.validateUserName()).toBeFalsy();
  });
  test(('Check first symbol "-" validation'), () => {
    const validation = new Validator('-Gamer');
    expect(validation.validateUserName()).toBeFalsy();
  });
  test(('Check end symbol "4" validation'), () => {
    const validation = new Validator('SuperPlayer4');
    expect(validation.validateUserName()).toBeFalsy();
  });
});
