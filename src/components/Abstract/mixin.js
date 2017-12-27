export const mixin = function(obj,mixins){
    const newObj = obj;
    newObj.prototype = Object.create(obj.prototype);

    //console.log(newObj);
    

    for (let prop in mixins) {
        if (mixins.hasOwnProperty(prop)) {
            newObj.prototype[prop] = mixins[prop];
        }
    }

    return newObj;
}


