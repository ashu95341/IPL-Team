const bestBatsman = document.getElementById("bestBatsman")
const bestBowler = document.getElementById("bestBowler")

const playerCount = document.getElementById("playerCount")

if(localStorage.getItem("team")){
    console.log(localStorage.getItem("team"));
}
let team = localStorage.getItem("team");
let teamName = team.toUpperCase();
console.log(teamName);
const welcome = document.getElementById("welcome")

welcome.innerText = "Welcome to " + team + " team";


function getData(){
    const xhr = new XMLHttpRequest();
    
    xhr.open(
        "GET",
        "https://ipl-team-afc91-default-rtdb.firebaseio.com/teams.json",
        true
    );

    xhr.onreadystatechange = function(){
        if (xhr.readyState === xhr.DONE && xhr.status === 200){
            allPlayers = JSON.parse(xhr.response);
            // console.log(allPlayers.length);
            
            // console.log(allUsers.id) //undefined case
            showDataToDom();
        }
    };
    xhr.send();
}
getData();

const playerCard = document.getElementById("playerCard");
let sum = 0;
const batPrice = new Array();
const bolPrice = new Array();
function showDataToDom(){
    for(let i=0; i < allPlayers.length; i++){
        if(allPlayers[i].from == teamName){
            // console.log(i);
            sum++;
            const cardWrapper = document.createElement("div")
            const playerName = document.createElement("h4")
            
            
            
            playerName.innerText = allPlayers[i].playerName;
            playerName.classList.add("playername");
            // playerName.onclick = addPlayer();
               
            
            cardWrapper.append(playerName);
            playerCard.append(cardWrapper);
            
            //click events

            cardWrapper.onclick = userClicked;
            function userClicked(event){
                event.target.style.color = "red";
                localStorage.setItem("name", allPlayers[i].playerName);
                window.location.href = "./playerdetails.html";
            }

            

            
            if(allPlayers[i].from == teamName && allPlayers[i].description == "batsman" ){
                batPrice.push(allPlayers[i].price);
            };
            // Price.push(allPlayers[i].price);
            if(allPlayers[i].from == teamName && allPlayers[i].description == "bowler" ){
                bolPrice.push(allPlayers[i].price);
            };


            // function addPlayer(){
            //     // event.target.style.color= "red";
            //     // const playerClicked = document.querySelector(".player-name");
            //     // console.log(playerClicked)
            
            //     // playerClicked.addEventListener('click', addPlayer());
            //     localStorage.setItem("name", allPlayers[i].playerName);
            // }
            
            
        }
        
          
    }
    
    // console.log(sum);
    console.log(batPrice.map(Number));
    // console.log(bolPrice.map(Number));
    const batMax = batPrice.map(Number);
    const bolMax = bolPrice.map(Number);
    
    // console.log(Math.max(...max));
    const maxPriceBat = Math.max(...batMax);
    const maxPriceBol = Math.max(...bolMax);
    console.log(maxPriceBat);
    console.log(maxPriceBol);

    for(let i=0; i < allPlayers.length; i++){
        if(allPlayers[i].from == teamName && allPlayers[i].description == "batsman" && allPlayers[i].price == maxPriceBat){
            console.log(allPlayers[i].playerName);

            
            bestBatsman.innerHTML = "Best Batsman of Team is " + allPlayers[i].playerName;

        }

    };

    for(let i=0; i < allPlayers.length; i++){
        // console.log("bowler")
        if(allPlayers[i].from == teamName && allPlayers[i].description == "bowler" && allPlayers[i].price == maxPriceBol){
            console.log(allPlayers[i].playerName);

            
            bestBowler.innerHTML = "Best Bowler of Team is " + allPlayers[i].playerName;

        }

    };
    
    playerCount.innerHTML = "Total players in Team is " + sum;
    
    
    

}



