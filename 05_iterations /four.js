const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}
for (const key in myObject){
//    console.log(`${key} is shortcut for ${myObject[key]}`);
}
const programmingLanguages = ['js', 'cpp', 'py', 'rb', 'swift'];
for (const key in programmingLanguages){
//    console.log(programmingLanguages[key]);
}
const myMap = new Map();
myMap.set('IN', "INDIA");
myMap.set('US', "UNITED STATES");
myMap.set('UK', "UNITED KINGDOM");
for (const key in myMap){
//    console.log(key, ':', myMap[key]); //this will not work as expected because Map is not an object but will not throw an error either.
}
