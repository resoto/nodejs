const bubble_sort = (list) => {
    for(let i=0; i<list.length-1; i++){
        for(let j=list.length-1; j>i; j--){
            if (list[j-1] > list[j]) {
                let tmp = list[j-1];
                list[j-1] = list[j];
                list[j] = tmp;
            }
        }
    }
    return list;
}

const selection_sort = (list) => {
    let min_index,tmp;
    for(let i=0; i<list.length; i++){
        min_index = i;
        for(let j=i; j<list.length; j++){
            if(list[j] < list[min]){
                min_index = j;
            }
            tmp = list[min_index];
            list[min_index] = list[i];
            list[i] = tmp;
        }
    }
    return list;
}

module.exports = { bubble_sort, selection_sort };