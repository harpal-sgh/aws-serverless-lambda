//const func1 = require('./dynamo');
import * as abc  from './dynamo';

//import  './dynamo';

exports.hello = async function (event, context) {
  console.log(abc.func1('hi', 'test'));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: ""
    }),
  };
};


exports.hello2 = async function (event, context) {
  console.log(abc.func1('hi', 'test'));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: ""
    }),
  };
};