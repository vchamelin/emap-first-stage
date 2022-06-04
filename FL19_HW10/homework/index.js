'use strict';

function startAddCount(userInfo){
    let countNowClick = 0;
    const secondTimer = 5000;

    const btnClickMe = document.getElementById('btn-click_me');

    let listener = function(){
        countNowClick++;
        console.log(countNowClick);
    }

    btnClickMe.addEventListener('click', listener, false);

    setTimeout(function(){
        alert(countNowClick);
        btnClickMe.removeEventListener('click', listener, false);
        
        userInfo.countClick = countNowClick;
        compareBestResalt(userInfo);
    },secondTimer);
}

const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', function() {
    const nickname = document.getElementById('nickname').value;
    if(nickname !== ''){
        let userInfo = {
            name : nickname
        }
        startAddCount(userInfo);
    } else {
        const textEmptyNickname = 'Empty nickname';
        alert(textEmptyNickname);
    }
});

function compareBestResalt(userInfo){
    sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
    let keySession = Object.keys(sessionStorage)[0];
    if(sessionStorage.getItem(keySession) < userInfo.countClick){
        sessionStorage.clear();
        sessionStorage.setItem(userInfo.name, userInfo.countClick);
    }

    
    let keyLocal = Object.keys(localStorage)[0];
    if(localStorage.getItem(keyLocal) < userInfo.countClick){
        localStorage.clear();
        localStorage.setItem(userInfo.name, userInfo.countClick);
    }
}

const btnBestNowResult = document.getElementById('btn-show_now_result');
btnBestNowResult.addEventListener('click', function() {
    sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
    if(sessionStorage.getItem(Object.keys(sessionStorage)[0]) === null){
        sessionStorage.setItem('Nickname', 0);
    }
    alert(`Best result is: ${sessionStorage.getItem(Object.keys(sessionStorage)[0])}`);
});

const btnBestAllResult = document.getElementById('btn-show_all_result');
btnBestAllResult.addEventListener('click', function() {
    let key = Object.keys(localStorage)[0];
    if(localStorage.getItem(key) === null || localStorage.getItem(key) === undefined){
        localStorage.setItem('Nickname', 0);
    }
    key = Object.keys(localStorage)[0];
    alert(`Best result for the whole time is: ${localStorage.getItem(key)} by ${key}`);
});

const btnDelNowResult = document.getElementById('btn-del_now_result');
btnDelNowResult.addEventListener('click', function() {
    sessionStorage.clear();
});

const btnDelAllResult = document.getElementById('btn-del_all_result');
btnDelAllResult.addEventListener('click', function() {
    localStorage.clear();
});
