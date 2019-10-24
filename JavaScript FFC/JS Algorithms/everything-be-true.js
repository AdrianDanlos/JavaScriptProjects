function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        let array = [undefined, null, false, 0, "", NaN];
        if(array.includes(collection[i][pre]))
            return false;
    }
    return true;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
/*
* PRO SOLUTION
* function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}
* */
