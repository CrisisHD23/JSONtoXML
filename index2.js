//this function will map the order.json file with the mapping.json file

module.exports = function(mappedData, originData){
    let data = {};
    for(let i = 0; i < originData.length; i++){
        let item = originData[i];
        let mappedItem = mappedData[item.id];
        data[mappedItem.id] = {};
        for(let key in mappedItem){
            if(key === 'id'){
                data[mappedItem.id][key] = item.id;
            } else {
                data[mappedItem.id][key] = item[key];
            }
        }
    }
    return data;
}
