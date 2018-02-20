function decypherPhrase(object, string) {
    let newObj = {};

    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            newObj[object[property]] = property;
        }
    }
    return cypherPhrase(newObj,string);

    }