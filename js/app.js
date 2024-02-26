const APIKEY = "93c8b70b50806c83e4b0016013d7423b";

/* Appel a l'API openweather avec ville en parametre de fonction*/
let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          console.log(data);
          document.querySelector("#city").innerHTML = data.name;
          document.querySelector("#temp").innerHTML =
            '<i class="fa-solid fa-temperature-three-quarters" style="color: #ffffff;"></i>' +
            data.main.temp +
            "°";
          document.querySelector("#humidity").innerHTML =
            '<i class="fa-solid fa-droplet" style="color: #ffffff;"></i>' +
            data.main.humidity +
            "%";
          document.querySelector("#wind").innerHTML =
            '<i class="fa-solid fa-wind" style="color: #ffffff;"></i>' +
            data.wind.speed +
            "Km/h";
        })
      )
      .catch((err) => console.log("Erreur : " + err));
};

/*Ecouteur d'evenement sur la soumission du formulaire */ 
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;//Récuperer la ville que l'utilisateur a saisie

  apiCall(ville);
});
 apiCall('Dakar');

