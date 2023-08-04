import data from './data.json' assert {type: 'json'};

const summaryContainer = document.querySelector('#summaryContainer');
const resultScore = document.querySelector('#resultScore');
const resultQualify = document.querySelector('#resultQualify');
const resultDescription = document.querySelector('#resultDescription');
let sumScore = 0;
let totalScore = 0;
let qualification;

data.forEach(obj =>{
    let item = setItem(obj.category,obj.icon,obj.score);
    summaryContainer.append(item);
    sumScore += obj.score;
})

totalScore = Math.round(sumScore / data.length);
resultScore.innerHTML = totalScore;
qualification = qualifyScore(totalScore);
resultQualify.innerHTML = qualification[0];
resultDescription.innerHTML = qualification[1];


function setItem(category,iconUrl,score){
    let summaryItem = document.createElement('div');
    summaryItem.classList.add('summary__item',`item__${category.toLowerCase()}`);
    summaryItem.innerHTML = 
    `<div class="summary__tag">
        <img src="${iconUrl}">
        <p class="summary__tag-name">${category}</p>
    </div>
    <div class="summary__score">
        <p>${score}</p>
        <p class="grey-font">/ 100</p>`;
    return summaryItem;
}

function qualifyScore(score){
    let title;
    let description;
    let results = [];
    if (score > 70){
        title = 'Great';
        description = 'You scored higher than 65% of the people who have taken these tests.'
    } else if ( 30 < score) {
        title = 'Average';
        description = 'You scored similar to 50% of the people who have taken these tests.'
    } else if (score < 30){
        title = 'Bad';
        description = 'You scored less than 65% of the people who have taken these tests.'
    }
    results.push(title,description);
    return results;
}