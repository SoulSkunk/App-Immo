import { useState } from "react";

import Header from "./Header";

import toastUtils from "../assets/utils";
import { useNavigate } from "react-router-dom";

function Annonce() {
  // Creation de la variable d'etat qui va contenir la data recupéré du formulaire

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    // images: "",
  });

  //récupère les données rentrées dans le form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    //constante qui contient la methods et on dit que c'est fromData qu'on attend mais en stringify json pour etre lu
    const requestOption = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Baerer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/create-properties",
      requestOption
    );

    let data = await response.json();
    console.log("Annonce créée ");
    toastUtils("success", "Annonce créée !");
    console.log(data);
    console.log(formData);
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="form-container">
        {/* Au déclenchement du boutton S'inscrire CTA ca déclenche la function handleSumbit */}
        <form onSubmit={handleSubmit}>
          <h2>Annonce</h2>
          <div className="form-group">
            <label htmlFor="title">Quel est le titre de votre annonce ?</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Où se situe votre bien ?</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Ajouter une description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Precisez un prix</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="€"
              required
            />
          </div>
          <button type="submit">Publier </button>
        </form>
      </div>
    </>
  );
}

export default Annonce;
