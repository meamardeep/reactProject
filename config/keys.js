// keys.js - decide which keys to return dev or prod
if(process.env.NODE_ENV === 'production'){
    // return production env keys
    module.exports = require('./prod');
}else{
    //return development env keys
    module.exports = require('./dev');
}

