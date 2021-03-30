const container = document.getElementById("player-container");


let playerName = localStorage.getItem("name");
console.log(playerName);

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
            // console.log(allPlayers);
            
            // console.log(allUsers.id) //undefined case
            showDataToDom();
        }
    };
    xhr.send();
}
getData();


function showDataToDom(){
    for(let i=0; i < allPlayers.length; i++){
        if(allPlayers[i].playerName == playerName){
            // console.log(allPlayers[i].description)
            const image = document.createElement('img');
            
            const name = document.createElement("h3");
            name.innerHTML = allPlayers[i].playerName;

            const team = document.createElement("h3");
            team.innerHTML = allPlayers[i].from;

            const price = document.createElement("h3");
            price.innerHTML = allPlayers[i].price;
            
            const playingStatus = document.createElement("h3");
            
            
            
            if(allPlayers[i].isPlaying === "true"){
                    
                    playingStatus.innerHTML = "playing";
            }else{
                    playingStatus.innerHTML = "on-bench";
            }

            const role = document.createElement('h3');
            role.innerHTML = allPlayers[i].description;
                
            





            container.append(name);
            container.append(team);
            container.append(price);
            container.append(playingStatus);
            container.append(role);


        }
    }
}