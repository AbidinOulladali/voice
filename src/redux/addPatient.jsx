import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { postPatient } from './action';

export default function AddPatient() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [cin, setCin] = useState('');
  const [sex, setSex] = useState('');
  const erreur = useSelector((state) => state.erreur);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data validation
    if (!nom || !prenom || !cin || !sex) {
      toast.error('Please fill in all fields');
      return;
    } else {
      toast.success('Patient added successfully');
    }

    dispatch(postPatient({ nom, prenom, cin, sex }));
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4">Fichier de Patient</h1>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom :
          </label>
          <input
            type="text"
            className="form-control"
            id="nom"
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">
            Prenom :
          </label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cin" className="form-label">
            CIN :
          </label>
          <input
            type="text"
            className="form-control"
            id="cin"
            onChange={(e) => setCin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-check-label">Sexe :</label>
          <div className="form-check">
            <input
              type="radio"
              name="radio"
              value="femme"
              className="form-check-input"
              onChange={(e) => setSex(e.target.value)}
            />
            <label className="form-check-label">Femme</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="radio"
              value="homme"
              className="form-check-input"
              onChange={(e) => setSex(e.target.value)}
            />
            <label className="form-check-label">Homme</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
        {erreur ? <p className="text-danger mt-3">{erreur}</p> : null}
      </form>
      <ToastContainer />
    </div>
  );
}
