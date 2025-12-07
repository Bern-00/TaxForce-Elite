"use client";
import { useEffect, useState } from 'react';
// Attention aux deux points ".." pour remonter les dossiers
import { supabase } from '../../lib/supabaseClient';

export default function Admin() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(false);

  // Petite sécurité basique
  const checkAccess = () => {
    if(password === "intuit2025") setAccess(true); // Ton mot de passe admin
    else alert("Wrong password");
  };

  useEffect(() => {
    if(access) fetchData();
  }, [access]);

  const fetchData = async () => {
    // On récupère tout le monde
    const { data, error } = await supabase
      .from('candidates')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.log("Erreur Supabase:", error);
    if (data) setCandidates(data);
    setLoading(false);
  };

  if (!access) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md">
          <h1 className="mb-4 font-bold">Admin Login</h1>
          <input type="password" placeholder="Password" className="border p-2 rounded w-full mb-4" onChange={e => setPassword(e.target.value)}/>
          <button onClick={checkAccess} className="bg-blue-600 text-white p-2 rounded w-full">Enter</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">Admin Dashboard - TaxForce Elite</h1>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Score</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Email/Phone</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {candidates.map((person) => (
                <tr key={person.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{person.full_name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${person.score >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {person.score}/100
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div>{person.email}</div>
                    <div>{person.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs" title={person.experience}>
                    {person.experience}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(person.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}