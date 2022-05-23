import { useState } from "react";
//push, pop, clear, reset, map 
export const useList = (arr:any) => {
const[list,Setlist]=useState<any>(arr);
const [pre,setPre]=useState(arr)
const push=(no:any)=>{
    Setlist([...list,no])
}
const pop=()=>{
    list.pop()
    Setlist([...list])
}
const clear=()=>{
    Setlist([])
}
const reset=()=>{
    Setlist([...pre])
}

const map=(l:any)=>{
    let datanew=list.map(l)
    Setlist([...datanew])
}

return[list,{push,pop,clear,reset,map}]



};
