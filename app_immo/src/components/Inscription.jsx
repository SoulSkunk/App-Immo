import { useState } from "react";
import Header from "./Header";
import "../Formulaires.css";

function Inscription() {
  // Creation de la variable d'etat qui va contenir la data recupéré du formulaire

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
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
    console.log(formData); // {username: 'qsd', email: 'kylian.broccolichi@mediaschool.me', confirmEmail: 'kylian.broccolichi@mediaschool.me', password: 'sd'}
  };

  return (
    <>
      <Header />
      <div className="form-container">
        {/* Au déclenchement du boutton S'inscrire CTA ca déclenche la function handleSumbit */}
        <form onSubmit={handleSubmit}>
          <h2>Inscription</h2>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username} //Lie le form à la variable
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmEmail">Confirmer l'Email</label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </>
  );
}

export default Inscription;
