const algo = require('./sort');

function bubbleSort(_list){
    for(let i=0; i<_list.length-1; i++){
        for(let j=_list.length-1; j>i; j--){
            if (_list[j-1] > _list[j]) {
                let tmp = _list[j-1];
                _list[j-1] = _list[j];
                _list[j] = tmp;
            }
        }
    }
    return _list;
}

function create_list(size){
    let _list = [];
    for(let i=0;i<size;i++){
        let rand = Math.floor( Math.random() * 10000);
        _list.push(rand);
    }
    return _list;
}

function printList(list){
    for(let _i=0; _i<list.length; _i++){
        console.log(list[_i]);
    }
}

list = create_list(100);
console.log(list);
algo.bubble_sort(list);
console.log(list);