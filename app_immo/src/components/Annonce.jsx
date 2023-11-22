import { useState } from "react";
import Header from "./Header";
import "../Formulaires.css";

function Annonce() {
  // Creation de la variable d'etat qui va contenir la data recupéré du formulaire

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    // pictures: "",
    description: "",
    price: "",
  });

  //récupère les données rentrées dans le form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Function d'envoie de la data récup du form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mets ici la logique pour gérer l'envoi du formu
    console.log(formData); // {email: 'kylian.broccolichi@mediaschool.me', password: 'sd'}
  };

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
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
}

export default Annonce;
