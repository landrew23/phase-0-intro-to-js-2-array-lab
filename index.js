
const cats = ["Milo", "Otis", "Garfield"];
cats.length=0;
cats.push("Milo", "Otis", "Garfield");


function destructivelyAppendCat(go){
go = cats.push('Ralph')
return go
}
function destructivelyPrependCat(stop){
 stop = cats.unshift('Bob')  
 return stop 
}
function destructivelyRemoveLastCat(bye){
bye = cats.pop()
return bye
}
function destructivelyRemoveFirstCat(well){
    well = cats.shift()
    return well
}
function appendCat(yes){
 yes = cats.slice();
 let result = [...cats,"Broom" ];
 return result

}
function prependCat(no){
no = cats.slice();
let result = ["Arnold", ...cats]
return result
}

function removeLastCat(front){
 front = cats.slice(0,2);
 return front   
}

function removeFirstCat(back){
 back = cats.slice(1);
 return back   
}