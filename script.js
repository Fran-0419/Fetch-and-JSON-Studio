// TODO: add code here
//for (astronaut of json)

window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            const container = document.getElementById("container");
            let counter = 1;
            for (astronaut of json){
                
                container.innerHTML += `
                <div class= "astronaut">
                    <div class="bio">
                    <h3>${counter}</h3>
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <p>Hours in space: ${astronaut.hoursInSpace}</p>
                        <p class="status" >Active: ${astronaut.active}</p>
                        <p>Skills: ${astronaut.skills} </p>
                    </div>
                    <img class="avatar" src=${astronaut.picture} alt="astronauts"></img>
                </div>
                
                ` ;
                if(astronaut.active === true){
                    document.getElementsByClassName("status").style.color = "green";
                }
                counter++
            }
        });

    });
});