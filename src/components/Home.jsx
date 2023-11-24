import { useState, useEffect } from "react";
import Header from "./Header";
import "../style/Formulaires.css";
import "../style/cardAnnonce.css";
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
        <ul className="annonces_area_home">
          {propertiesData.map((property) => (
            <li key={property.id}>
              {/* div qui contient l'affichage des mes annonces */}
              <div className="card_properties">
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
                    <span>
                      {property.location.charAt(0).toUpperCase() +
                        property.location.slice(1)}
                    </span>
                  </div>
                  <br />
                  <span>Contact : {property.email}</span>

                  <br />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Aucune propriété à afficher.</h2>
      )}
    </>
  );
}

export default Home;
