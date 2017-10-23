var $ = require('jquery');
import Typed from 'typed.js';

//Get data in form and Return Object:

//https://jsbin.com/zarakid/edit?html,js,output
// toDo with fech.

let getFormData =()=>{
    var elemets = document.getElementsByName('gform').elements;
    var fields = Object.keys(elemets).map( k => {
        if(elemets[k]){
            return elemets[k].name;
        }else if(elemets[k].length > 0){
            return elemets[k].item(0).name;
        }
    }).filter(function (item, pos, self) {
        return self.indexOf(item) == pos && item
    });

    const data = {};


    return data;
};

let validEmail = email =>{
    var regularExpresion  = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regularExpresion.test(email);
}


