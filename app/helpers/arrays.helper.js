import { randomNumber } from './numbers.helper.js';

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))] ;
}

Array.prototype.randomIndex = function(){
    return randomNumber({
        range: this.length - 1
    })
}

Array.prototype.randomElements = function({qtd = 1}){
    let arr = this;
    const randomElements = [];
    while(qtd > 0){
        const randomIndex = arr.randomIndex();
        const fim = randomIndex  >= this.length ? undefined : randomIndex + 1;
        randomElements.push(arr.slice(randomIndex, fim)[0])
        qtd--
    }
    return randomElements;
};