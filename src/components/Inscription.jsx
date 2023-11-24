import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toastUtils from "../assets/utils";
import { Link } from "react-router-dom";
import "../style/Formulaires.css";
import Header from "./Header";

function Inscription() {
  let navigate = useNavigate();
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

  //Function d'envoie de la data récupérée du form
  async function handleSubmit(e) {
    e.preventDefault();
    //constante qui contient la methods et on dit que c'est fromData qu'on attend mais en stringify json pour etre lu
    const requestOption = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/users/register",
      requestOption
    );

    let data = await response.json();
    console.log("Vous êtes bien inscrit ");
    toastUtils("success", "Vous êtes bien inscrit");
    console.log(data);

    console.log(formData); // {username: 'qsd', email: 'kylian.broccolichi@mediaschool.me', confirmEmail: 'kylian.broccolichi@mediaschool.me', password: 'sd'}
    navigate("/connection");
  }

  return (
    <>
      <Header />
      <div className="form-container">
        {/* Au déclenchement du bouton S'inscrire CTA, cela déclenche la fonction handleSubmit */}
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Inscription</h2>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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
        <div className="form-links">
          <Link to="/connection">Déjà un compte ? Connectez-vous</Link>
          <Link to="/">Je le ferai plus tard</Link>
        </div>
      </div>
    </>
  );
}

export default Inscription;
