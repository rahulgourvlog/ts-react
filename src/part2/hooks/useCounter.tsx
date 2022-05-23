import { useState } from "react";
//import { init } from "./App"
export const useCounter:any = (init:number) => {
    const [value,Setvalue]=useState(1);
const inc=(n:number)=>{
    Setvalue(value+n)
}

const dec=(n:number)=>{
    Setvalue(value-n)
}

const set=(n:number)=>{
    Setvalue(n)
}
return{value,inc,dec,set}
};
