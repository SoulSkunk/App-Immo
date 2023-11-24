import { useState, useEffect } from "react";
import Header from "./Header";
import "../style/Formulaires.css";

function Home() {
  const [propertiesData, setPropertiesData] = useState({});

  async function getAllProperties() {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/properties",
      requestOption
    );

    let data = await response.json();

    setPropertiesData(data);
    console.log(data);
    // setInputValue(value);
    // Mets ici la logique pour gérer l'envoi du formu
  }

  useEffect(() => {
    getAllProperties();
  }, []);

  return (
    <>
      <Header />
      <div className="infoPersoContainer"></div>
      {Array.isArray(propertiesData) ? (
        <ul>
          {propertiesData.map((property) => (
            <li key={property.id}>
              <p>Nom de la propriété : {property.title}</p>
              <p>Description : {property.description}</p>
              <p>Prix : {property.price}</p>
              <p>Localisaton : {property.location}</p>
              <p> {property.email}</p>

              {/* Ajoutez d'autres propriétés ici */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune propriété à afficher.</p>
      )}
    </>
  );
}

export default Home;
