//fuction to suff array
function suffAry(array) {
    for (let i = array.length - 1; i > 0; i--) {
        //random number;
        var j = Math.floor(Math.random() * (i - 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

//function to show result
function show() {
    var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var aryy1 = suffAry(arry);

    document.write("After Shuff = [", aryy1, "]");
}