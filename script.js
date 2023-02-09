const cards = document.querySelectorAll('.card');
const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
const currents = document.querySelectorAll('.time');
const previouses = document.querySelectorAll('.lastTime');

daily.addEventListener('click',()=>{
    daily.style.color ='white';
    weekly.style.color ='';
    monthly.style.color ='';
    fetch('./data.json')
    .then(response => response.json())
    .then(data=>getDaily(data))

    function getDaily(data) {
        currents.forEach((current, idx)=>{
            current.innerHTML = data[idx].timeframes.daily.current + 'hrs';
        })
        previouses.forEach((prev, idx)=>{
            prev.innerHTML = 'Yesterday - '+ data[idx].timeframes.daily.previous +'hrs';
        })
    }
})
weekly.addEventListener('click',()=>{
    weekly.style.color ="white";
    daily.style.color ='';
    monthly.style.color ='';
    fetch('./data.json')
    .then(response => response.json())
    .then(data=>getWeekly(data))

    function getWeekly(data) {
        currents.forEach((current, idx)=>{
            current.innerHTML = data[idx].timeframes.weekly.current + 'hrs';
        })
        previouses.forEach((prev, idx)=>{
            prev.innerHTML = 'Last Week - '+ data[idx].timeframes.weekly.previous +'hrs';
        })
    }
})
monthly.addEventListener('click',()=>{
    monthly.style.color ="white";
    weekly.style.color ='';
    daily.style.color ='';
    fetch('./data.json')
    .then(response => response.json())
    .then(data=>getMonthly(data))

    function getMonthly(data) {
        currents.forEach((current, idx)=>{
            current.innerHTML = data[idx].timeframes.monthly.current + 'hrs';
        })
        previouses.forEach((prev, idx)=>{
            prev.innerHTML = 'Last Month - '+ data[idx].timeframes.monthly.previous +'hrs';
        })
    }
})



