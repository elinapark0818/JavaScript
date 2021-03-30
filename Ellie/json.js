'use strict';
// JSON : JavaScript Object Notation
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection 직렬화, 전송
// - independent programming language and platform 플랫폼에 상관없이

// object - string
// serialize
// deserialize

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name: 'tokki',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"), // 오브젝트에 있는 데이터가 아니기 때문에 제외된다
    jump: () => { //함수는 오브젝트에 있는 데이터가 아니기 때문에 제외된다
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'elina' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)


