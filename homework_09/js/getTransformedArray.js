getTransformedArray = (arr,tr) => {  
    var newArr = [];
    forEach(arr,function(i){
        newArr.push(tr(i));
    }
    );
    return newArr;
}