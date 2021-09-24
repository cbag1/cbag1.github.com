const api_url='data.json';
async function getDataDaily(){
    const response = await fetch(api_url);
    const data= await response.json();
    console.log(data[0]['timeframes']['daily']['current']);
    document.getElementById('work-value').innerHTML=data[0]['timeframes']['daily']['current']+" hrs";
    document.getElementById('work-previous').innerHTML="Last Week - "+data[0]['timeframes']['daily']['previous']+" hrs";

    document.getElementById('play-value').innerHTML=data[1]['timeframes']['daily']['current']+" hrs";
    document.getElementById('play-previous').innerHTML="Last Week - "+data[1]['timeframes']['daily']['previous']+" hrs";
    
    document.getElementById('study-value').innerHTML=data[2]['timeframes']['daily']['current']+" hrs";
    document.getElementById('study-previous').innerHTML="Last Week - "+data[2]['timeframes']['daily']['previous']+" hrs";

    document.getElementById('exercise-value').innerHTML=data[3]['timeframes']['daily']['current']+" hrs";
    document.getElementById('exercise-previous').innerHTML="Last Week - "+data[3]['timeframes']['daily']['previous']+" hrs";

    document.getElementById('social-value').innerHTML=data[4]['timeframes']['daily']['current']+" hrs";
    document.getElementById('social-previous').innerHTML="Last Week - "+data[4]['timeframes']['daily']['previous']+" hrs";

    document.getElementById('self-value').innerHTML=data[5]['timeframes']['daily']['current']+" hrs";
    document.getElementById('self-previous').innerHTML="Last Week - "+data[5]['timeframes']['daily']['previous']+" hrs";
}


getDataDaily();

async function getDataWeekly(){
    const response = await fetch(api_url);
    const data= await response.json();
    console.log(data[0]['timeframes']['weekly']['current']);
    document.getElementById('work-value').innerHTML=data[0]['timeframes']['weekly']['current']+" hrs";
    document.getElementById('work-previous').innerHTML="Last Week - "+data[0]['timeframes']['weekly']['previous']+" hrs";

    document.getElementById('play-value').innerHTML=data[1]['timeframes']['weekly']['current']+" hrs";
    document.getElementById('play-previous').innerHTML="Last Week - "+data[1]['timeframes']['weekly']['previous']+" hrs";
    
    document.getElementById('study-value').innerHTML=data[2]['timeframes']['weekly']['current']+" hrs";
    document.getElementById('study-previous').innerHTML="Last Week - "+data[2]['timeframes']['weekly']['previous']+" hrs";

    document.getElementById('exercise-value').innerHTML=data[3]['timeframes']['weekly']['current']+" hrs";
    document.getElementById('exercise-previous').innerHTML="Last Week - "+data[3]['timeframes']['weekly']['previous']+" hrs";

    document.getElementById('social-value').innerHTML=data[4]['timeframes']['weekly']['current']+" hrs";
    document.getElementById('social-previous').innerHTML="Last Week - "+data[4]['timeframes']['weekly']['previous']+" hrs";

    document.getElementById('self-value').innerHTML=data[5]['timeframes']['weekly']['current']+" hrs";
    document.getElementById('self-previous').innerHTML="Last Week - "+data[5]['timeframes']['weekly']['previous']+" hrs";
}



async function getDataMonthly(){
    const response = await fetch(api_url);
    const data= await response.json();
    console.log(data[0]['timeframes']['monthly']['current']);
    document.getElementById('work-value').innerHTML=data[0]['timeframes']['monthly']['current']+" hrs";
    document.getElementById('work-previous').innerHTML="Last Week - "+data[0]['timeframes']['monthly']['previous']+" hrs";

    document.getElementById('play-value').innerHTML=data[1]['timeframes']['monthly']['current']+" hrs";
    document.getElementById('play-previous').innerHTML="Last Week - "+data[1]['timeframes']['monthly']['previous']+" hrs";
    
    document.getElementById('study-value').innerHTML=data[2]['timeframes']['monthly']['current']+" hrs";
    document.getElementById('study-previous').innerHTML="Last Week - "+data[2]['timeframes']['monthly']['previous']+" hrs";

    document.getElementById('exercise-value').innerHTML=data[3]['timeframes']['monthly']['current']+" hrs";
    document.getElementById('exercise-previous').innerHTML="Last Week - "+data[3]['timeframes']['monthly']['previous']+" hrs";

    document.getElementById('social-value').innerHTML=data[4]['timeframes']['monthly']['current']+" hrs";
    document.getElementById('social-previous').innerHTML="Last Week - "+data[4]['timeframes']['monthly']['previous']+" hrs";

    document.getElementById('self-value').innerHTML=data[5]['timeframes']['monthly']['current']+" hrs";
    document.getElementById('self-previous').innerHTML="Last Week - "+data[5]['timeframes']['monthly']['previous']+" hrs";
}



// console.log(getData());

