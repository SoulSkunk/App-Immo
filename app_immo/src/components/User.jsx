import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import "../Formulaires.css";

function User() {
  // Creation de la variable d'etat qui va contenir la data recupéré du formulaire

  const [formData, setFormData] = useState({
    location: "",
    phoneNumber: "",
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
    setInputValue(value);
    // Mets ici la logique pour gérer l'envoi du formu
    console.log(formData); // {email: 'kylian.broccolichi@mediaschool.me', password: 'sd'}
  };

  //Input des villes
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <Header />
      <div className="form-container">
        {/* Au déclenchement du boutton S'inscrire CTA ca déclenche la function handleSumbit */}
        <form onSubmit={handleSubmit}>
          <h2>Votre profil</h2>
          <div className="form-group">
            <label htmlFor="location">Indiquez votre ville</label>
            <select name="location" onChange={handleChange}>
              <option value="lyon">Lyon</option>
              <option value="nice">Nice</option>
              <option value="cannes">Cannes</option>
              <option value="monaco">Monaco</option>
              <option value="antibes">Antibes</option>
              <option value="paris">Paris</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Numéro de téléphone</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Validé</button>
        </form>
      </div>
    </>
  );
}

export default User;
