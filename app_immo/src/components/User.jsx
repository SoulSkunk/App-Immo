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

  return (
    <>
      <Header />
      <div className="infoPersoContainer">
        <h2>Informations Personnelles</h2>
        <span>Votre pseudo : {userData.username}</span>
        <br></br>
        <span>Votre email : {userData.email}</span>

        {Array.isArray(propertiesData) ? (
          <ul>
            {propertiesData.map((property) => (
              <li key={property.id}>
                {/* Remplacez les propriétés ci-dessous par celles que vous avez dans votre API */}
                <p>Nom de la propriété : {property.title}</p>
                <p>Description : {property.description}</p>
                <p>Prix : {property.price}</p>
                <p>Localisaton : {property.location}</p>
                {/* Ajoutez d'autres propriétés ici */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune propriété à afficher.</p>
        )}
      </div>
    </>
  );
}

export default User;
