import { useState } from "react";

const ConnexionPage = () => {
  const [form, setForm] = useState({ identifiant: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion", form);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-screen flex items-center justify-center px-4 py-10 w-1/2">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl text-white">
            <span className="text-red-500">[</span> C&nbsp;o&nbsp;n&nbsp;n&nbsp;e&nbsp;x&nbsp;i&nbsp;o&nbsp;n{" "}
            <span className="text-red-500">]</span>
          </h1>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white/80 backdrop-blur border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="identifiant"
                className="block text-sm font-medium mb-1"
              >
                Identifiant ou e-mail
              </label>
              <input
                id="identifiant"
                name="identifiant"
                type="text"
                value={form.identifiant}
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
    </div>
  );
};

export default ConnexionPage;
