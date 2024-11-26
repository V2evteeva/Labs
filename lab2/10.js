'use strict';

const phones = {
    Mary: '+380663457896',
    Jordan: '+380952135444'
};

const findPhone = (name) => phones[name];

console.log(findPhone('Jordan'));