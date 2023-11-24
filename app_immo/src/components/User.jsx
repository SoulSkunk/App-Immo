import { useState, useEffect } from "react";
import Header from "./Header";
import "../style/cardAnnonce.css";

function User() {
  // Creation de la variable d'etat qui va contenir

  const [userData, setUserData] = useState({});
  const [propertiesData, setPropertiesData] = useState({});

  //Function de recup des informations du profil (tapé dans inscription)
  async function functionAsync() {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"), //vu qu'on a stocké le token dans le localStorage on peut le récupérer pour l'utiliser ici
      },
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/users/profile",
      requestOption
    );

    let data = await response.json();
    console.log("Profil validé ");
    setUserData(data);
    console.log(data);
    // setInputValue(value);
    // Mets ici la logique pour gérer l'envoi du formu
  }

  //Function async pour afficher les propriétés de l'utilisateur
  async function userFunction() {
    const requesttOption = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"), //vu qu'on a stocké le token dans le localStorage on peut le récupérer pour l'utiliser ici
      },
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/get-my-properties",
      requesttOption
    );

    let data = await response.json();
    setPropertiesData(data);
    console.log(data);
  }

  //Input des villes
  useEffect(() => {
    functionAsync();
    userFunction();
  }, []);

  async function delete_property(id) {
    const requesttOption = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/delete-properties/" + id,
      requesttOption
    );

    let data = await response.json();
    userFunction();
    console.log(data);
    console.log(id);
  }

  return (
    <>
      <Header />
      <div className="infoPersoContainer">
        <div className="box_top_txt">
          <h2>Informations Personnelles</h2>
          <h3>Bienvenue sur votre espace {userData.username} !</h3>

          <h3>{userData.email}</h3>
        </div>

        <div className="title_properties">
          <h2>Voici vos propriétés</h2>
        </div>

        {Array.isArray(propertiesData) ? (
          <ul className="annonces_area">
            {propertiesData.map((property) => (
              <li key={property.id}>
                {/* div qui contient l'affichage des mes annonces */}
                <div className="card_properties">
                  <span
                    className="croix"
                    onClick={() => {
                      delete_property(property.id);
                    }}
                  >
                    X
                  </span>
                  <div>
                    <img
                      src="https://images.trvl-media.com/lodging/25000000/24110000/24102400/24102382/438ef6d6.jpg?impolicy=resizecrop&rw=500&ra=fit"
                      alt=""
                    />
                  </div>
                  <div className="infoContainer">
                    <span className="price_style">{property.price} €</span>
                    <span className="title_style">{property.title}</span>
                    <span className="description_style">
                      {property.description}
                    </span>
                    <br />
                    <div className="location_style">
                      <span>{property.location}</span>
                    </div>

                    <br />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Aucune propriété à afficher.</h2>
        )}
      </div>
    </>
  );
}

export default User;
