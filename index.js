const order = require('./order.json')
const index = require('./index2.js')
const fs = require('fs');
const mapping = require('./mapping.json');


function OBJtoXML(obj) {
    var xml = '';
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            xml += '<' + key + '>' + OBJtoXML(obj[key]) + '</' + key + '>';
        } else {
            xml += '<' + key + '>' + obj[key] + '</' + key + '>';
        }
    }
    return xml;
}

fs.writeFileSync('order.xml', OBJtoXML(order));

