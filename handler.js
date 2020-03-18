//const func1 = require('./dynamo').func1();

import { func1 } from './dynamo';

exports.hello = async function (event, context) {
  console.log(func1);
  console.log(`log: ${await func1}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: ""
    }),
  };
};
