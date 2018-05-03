import style from "./_scss/main.scss";
require('expose-loader?$!jquery');

console.log(`I've been required by webpack`)

const arr = [1,2,3];
const es6func = () => console.log(...arr);

es6func();

console.log(window.jQuery);