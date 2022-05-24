const order = require('./order.json')
const fs = require('fs');


module.exports=function(obj) {
    var xml = '';
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            xml += '<' + key + '>' + module.exports(obj[key]) + '</' + key + '>';
        } else {
            xml += '<' + key + '>' + obj[key] + '</' + key + '>';
        }
    }
    return xml
}

fs.writeFileSync(`order.xml`, module.exports(order));

