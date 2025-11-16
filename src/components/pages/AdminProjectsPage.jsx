/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminProjetsPage() {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    libelle: "",
    description: "",
    technologies: "",
    image: "",
    lienGithub: "",
    lienDemo: "",
    dateDebut: "",
    dateFin: "",
    statut: "",
  });
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setForm({
      libelle: "",
      description: "",
      technologies: "",
      image: "",
      lienGithub: "",
      lienDemo: "",
      dateDebut: "",
      dateFin: "",
      statut: "",
    });
    setEditingId(null);
  };

  const fetchProjets = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/projets");
      setProjets(res.data);
      setError(null);
    } catch (e) {
      setError("Erreur lors du chargement des projets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjets();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      libelle: form.libelle,
      description: form.description,
      technologies: form.technologies
        ? form.technologies.split(",").map((t) => t.trim())
        : [],
      image: form.image,
      lienGithub: form.lienGithub,
      lienDemo: form.lienDemo,
      dateDebut: form.dateDebut || null,
      dateFin: form.dateFin || null,
      statut: form.statut,
      // on pourrait aussi gérer competencesUtilisees ici plus tard
    };

    try {
      if (editingId === null) {
        const res = await axios.post("http://localhost:3000/projets", payload);
        setProjets((prev) => [...prev, res.data]);
      } else {
        const res = await axios.put(
          `http://localhost:3000/projets/${editingId}`,
          payload
        );
        setProjets((prev) =>
          prev.map((p) => (p.id === editingId ? res.data : p))
        );
      }
      resetForm();
      setError(null);
    } catch (e) {
      setError("Erreur lors de l'enregistrement du projet");
    }
  };

  const handleEdit = (projet) => {
    setForm({
      libelle: projet.libelle || "",
      description: projet.description || "",
      technologies: Array.isArray(projet.technologies)
        ? projet.technologies.join(", ")
        : "",
      image: projet.image || "",
      lienGithub: projet.lienGithub || "",
      lienDemo: projet.lienDemo || "",
      dateDebut: projet.dateDebut || "",
      dateFin: projet.dateFin || "",
      statut: projet.statut || "",
    });
    setEditingId(projet.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce projet ?")) return;
    try {
      await axios.delete(`http://localhost:3000/projets/${id}`);
      setProjets((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      setError("Erreur lors de la suppression du projet");
    }
  };

  return (
    <div className="text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
        <span className="text-red-500">[</span> Administration des projets
        <span className="text-red-500">]</span>
      </h1>

      <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">
          {editingId === null ? "Ajouter un projet" : "Modifier un projet"}
        </h2>
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/30 border border-red-700 rounded px-3 py-2">
            {error}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm mb-1">Libellé</label>
            <input
              type="text"
              name="libelle"
              value={form.libelle}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Statut</label>
            <input
              type="text"
              name="statut"
              value={form.statut}
              onChange={handleChange}
              placeholder="En cours, Terminé..."
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Technologies (séparées par des virgules)
            </label>
            <input
              type="text"
              name="technologies"
              value={form.technologies}
              onChange={handleChange}
              placeholder="React, Tailwind CSS, Node.js..."
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">URL / image</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Lien GitHub</label>
            <input
              type="text"
              name="lienGithub"
              value={form.lienGithub}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Lien démo</label>
            <input
              type="text"
              name="lienDemo"
              value={form.lienDemo}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Date début</label>
            <input
              type="date"
              name="dateDebut"
              value={form.dateDebut}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Date fin</label>
            <input
              type="date"
              name="dateFin"
              value={form.dateFin}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-3 mt-2">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-4 py-2.5 text-sm transition-colors"
            >
              {editingId === null ? "Ajouter" : "Mettre à jour"}
            </button>
            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="text-sm text-gray-300 hover:text-white underline"
              >
                Annuler la modification
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Liste des projets</h2>
          {loading && (
            <span className="text-xs text-gray-300">Chargement...</span>
          )}
        </div>

        {!loading && projets.length === 0 && (
          <div className="text-sm text-gray-300">
            Aucun projet pour le moment.
          </div>
        )}

        {!loading && projets.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-black/40">
                <tr>
                  <th className="px-3 py-2 text-left">ID</th>
                  <th className="px-3 py-2 text-left">Libellé</th>
                  <th className="px-3 py-2 text-left">Statut</th>
                  <th className="px-3 py-2 text-left">Technologies</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projets.map((p) => (
                  <tr key={p.id} className="border-t border-gray-700/60">
                    <td className="px-3 py-2 align-top">{p.id}</td>
                    <td className="px-3 py-2 align-top">{p.libelle}</td>
                    <td className="px-3 py-2 align-top">{p.statut}</td>
                    <td className="px-3 py-2 align-top">
                      {Array.isArray(p.technologies)
                        ? p.technologies.join(", ")
                        : ""}
                    </td>
                    <td className="px-3 py-2 align-top flex flex-wrap gap-2">
                      <button
                        className="text-xs px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => handleEdit(p)}
                      >
                        Modifier
                      </button>
                      <button
                        className="text-xs px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => handleDelete(p.id)}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
