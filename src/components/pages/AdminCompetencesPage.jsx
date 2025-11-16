/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminCompetencesPage() {
  const [competences, setCompetences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    libelle: "",
    description: "",
    niveau: "",
    categorie: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setForm({
      libelle: "",
      description: "",
      niveau: "",
      categorie: "",
      image: "",
    });
    setEditingId(null);
  };

  const fetchCompetences = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/competences");
      setCompetences(res.data);
      setError(null);
    } catch (e) {
      setError("Erreur lors du chargement des compétences");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompetences();
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
      niveau: Number(form.niveau) || 0,
      categorie: form.categorie,
      image: form.image,
    };

    try {
      if (editingId === null) {
        // Création
        const res = await axios.post(
          "http://localhost:3000/competences",
          payload
        );
        setCompetences((prev) => [...prev, res.data]);
      } else {
        // Mise à jour
        const res = await axios.put(
          `http://localhost:3000/competences/${editingId}`,
          payload
        );
        setCompetences((prev) =>
          prev.map((c) => (c.id === editingId ? res.data : c))
        );
      }
      resetForm();
      setError(null);
    } catch (e) {
      setError("Erreur lors de l'enregistrement de la compétence");
    }
  };

  const handleEdit = (competence) => {
    setForm({
      libelle: competence.libelle || "",
      description: competence.description || "",
      niveau: competence.niveau?.toString() || "",
      categorie: competence.categorie || "",
      image: competence.image || "",
    });
    setEditingId(competence.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cette compétence ?")) return;
    try {
      await axios.delete(`http://localhost:3000/competences/${id}`);
      setCompetences((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      setError("Erreur lors de la suppression de la compétence");
    }
  };

  return (
    <div className="text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
        <span className="text-red-500">[</span> Administration des compétences
        <span className="text-red-500">]</span>
      </h1>

      <div className="bg-white/5 border border-gray-700 rounded-lg p-4 sm:p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">
          {editingId === null
            ? "Ajouter une compétence"
            : "Modifier une compétence"}
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
            <label className="block text-sm mb-1">Catégorie</label>
            <input
              type="text"
              name="categorie"
              value={form.categorie}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Niveau (0-100)</label>
            <input
              type="number"
              name="niveau"
              value={form.niveau}
              onChange={handleChange}
              min="0"
              max="100"
              className="w-full rounded-lg border border-gray-600 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              URL / chemin de l'image
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
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
          <h2 className="text-lg font-semibold">Liste des compétences</h2>
          {loading && (
            <span className="text-xs text-gray-300">Chargement...</span>
          )}
        </div>

        {!loading && competences.length === 0 && (
          <div className="text-sm text-gray-300">
            Aucune compétence pour le moment.
          </div>
        )}

        {!loading && competences.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-black/40">
                <tr>
                  <th className="px-3 py-2 text-left">ID</th>
                  <th className="px-3 py-2 text-left">Libellé</th>
                  <th className="px-3 py-2 text-left">Catégorie</th>
                  <th className="px-3 py-2 text-left">Niveau</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {competences.map((c) => (
                  <tr key={c.id} className="border-t border-gray-700/60">
                    <td className="px-3 py-2 align-top">{c.id}</td>
                    <td className="px-3 py-2 align-top">{c.libelle}</td>
                    <td className="px-3 py-2 align-top">{c.categorie}</td>
                    <td className="px-3 py-2 align-top">{c.niveau}</td>
                    <td className="px-3 py-2 align-top flex flex-wrap gap-2">
                      <button
                        className="text-xs px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => handleEdit(c)}
                      >
                        Modifier
                      </button>
                      <button
                        className="text-xs px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => handleDelete(c.id)}
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
