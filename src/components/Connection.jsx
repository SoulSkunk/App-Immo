import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import toastUtils from "../assets/utils";

function Connection() {
  let navigate = useNavigate();
  // Creation de la variable d'etat qui va contenir la data recupéré du formulaire

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Ajout du token dans une variable d'etat par défaut vaut null
  const [token, setToken] = useState(null);

  //récupère les données rentrées dans le form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Function d'envoie de la data récup du form
  //Function de connection
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
      "https://apihackaton1.osc-fr1.scalingo.io/users/login",
      requestOption
    );

    let data = await response.json();
    console.log("Vous êtes connecté ");
    toastUtils("success", "Vous êtes connecté");
    console.log(data);
    localStorage.setItem("token", data.token);
    setToken(data.token);
    console.log(formData); // {username: 'qsd', email: 'kylian.broccolichi@mediaschool.me', confirmEmail: 'kylian.broccolichi@mediaschool.me', password: 'sd'}
    navigate("/");
  }

  //Function de deconnection
  function handleDeco() {
    setToken(null); //en gros supprime le token
    localStorage.removeItem("token");
    console.log("Vous êtes déconnecté " + token);
    toastUtils("error", "Vous vous êtes déconnecté");
  }

  return (
    <>
      <Header />
      <div className="form-container">
        {/* Au déclenchement du boutton S'inscrire CTA ca déclenche la function handleSumbit */}
        <form onSubmit={handleSubmit}>
          <h2>Connection</h2>
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
          <button type="submit">Se connecter</button>
        </form>
        {token && <button onClick={handleDeco}>Se déconnecter</button>}
      </div>
    </>
  );
}

export default Connection;
