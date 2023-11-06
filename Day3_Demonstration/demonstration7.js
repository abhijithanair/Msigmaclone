export const myNumbers =[1,2,3,4];
const animals = ['Panda','Bear','Eagle'];

export function myLogger(){
    console.log(myNumbers , animals);
}
export default function petslogger(pets){
    console.log(pets);
}

import {myLogger, Alligator} from 'mod1.js';
import * Utils from 'mod1.js';
Utils.mylogger();