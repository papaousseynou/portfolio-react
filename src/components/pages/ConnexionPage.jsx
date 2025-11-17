import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ConnexionPage = (sharedStateMutator) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogIn, setErrorLogIn] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorLogIn("");

    try {
      // 1. On récupère tous les users du JSON-server
      const res = await axios.get("http://localhost:3000/users");

      const users = res.data;
      // console.log("USERS FROM API", users);
      // console.log("FORM VALUES", form);
      // console.log(form);
      // 2. On cherche si un user correspond au username + password
      const userFound = users.find(
        (u) =>
          u.username.toLowerCase().trim() ===
            form.username.toLowerCase().trim() &&
          u.password === form.password.trim()
      );

      if (!userFound) {
        setErrorLogIn("Identifiants incorrects !");
        return;
      }

      // 3. Si OK, on peut sauvegarder les infos (localStorage par exemple)
      sharedStateMutator((prev) => ({
        ...prev,
        connected: true,
        user: {
          id: userFound.id,
          username: userFound.username,
          role: userFound.role,
          nom: userFound.nom,
          email: userFound.email,
        },
      }));

      toast.success(`Bienvenue ${userFound.username}`);

      localStorage.setItem("user", JSON.stringify(userFound));

      console.log("Connecté avec succès :", userFound);

      if (userFound.role === "admin") {
        navigate("/admin/competences");
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrorLogIn("Erreur lors de la connexion");
      toast.error("Erreur lors de la connexion", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl text-white">
            <span className="text-red-500">[</span>{" "}
            C&nbsp;o&nbsp;n&nbsp;n&nbsp;e&nbsp;x&nbsp;i&nbsp;o&nbsp;n{" "}
            <span className="text-red-500">]</span>
          </h1>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white/80 backdrop-blur border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8"
        >
          <div className="space-y-5 relative">
            <div>
              {errorLogIn && (
                <span className="absolute right-0 text-sm text-white bg-red-500 p-1 ">
                  {errorLogIn}
                </span>
              )}
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Identifiant ou e-mail
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={onChange}
                placeholder="ex: youzdouc@example.com"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
                autoComplete="username"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={onChange}
                  placeholder="Votre mot de passe"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-12 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={handlePasswordVisibility}
                  className="absolute inset-y-0 right-2 my-auto h-8 px-2 text-sm text-gray-600 hover:text-gray-900"
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showPassword ? "Masquer" : "Afficher"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-4 py-2.5 transition-colors"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-5 right-5 text-white text-sm">
        Y &nbsp; O &nbsp; U &nbsp; Z &nbsp; D &nbsp; O &nbsp; U &nbsp; C
        &nbsp;&nbsp;
        <span className="border border-red-500 rounded-full p-1">TM</span>
      </div>
    </div>
  );
};

export default ConnexionPage;
