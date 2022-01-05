function countTrue(arr) {
    let count = 0;
    arr.forEach(item => {
        if (item == true) {
            count += 1;
        }
    });
}

countTrue([true, false, true]);