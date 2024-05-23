//1

const fs = require('fs')
// fs.open('file.txt','r',(err)=>{
//     if(err){
//         throw 'error'
//     }
// })

fs.readFile('file.txt',(err, data)=>{
    if(err){
        throw 'error'
    }
    const textContent = data.toString();
    let index =0;
    console.log(textContent)
    for(let i =0; i< textContent.length; i++){
        if(textContent[i] == " "){
            index++
        }
    }
    index ++
    console.log(index)
})

//2

const xlsx = require('xlsx');

const example = [
    { 'Name': 'danny bulgakov', 'Grade': 95 },
    { 'Name': 'ben cohen', 'Grade': 70 },
    { 'Name': 'rachel green', 'Grade': 78 }
];

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.json_to_sheet(example);

xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

xlsx.writeFile(workbook, 'grades.xlsx');

const excel = xlsx.readFile('grades.xlsx');
const sheet1 = excel.SheetNames[0];
const worksheetData = excel.Sheets[sheet1];

const data = xlsx.utils.sheet_to_json(worksheetData);

let totalScore = 0;
let count = 0;

data.forEach(row => {
    const score = row['Grade'];
    if (typeof score === 'number') {
        totalScore += score;
        count++;
    }
});

const average = totalScore / count;
console.log('Average Score:', average);
