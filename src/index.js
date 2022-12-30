import Validator from './app/Validator';

const validVar = new Validator('test');
const vartest = validVar.validateUserName();

console.log(vartest);
