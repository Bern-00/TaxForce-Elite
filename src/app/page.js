"use client";
import { useState } from 'react';
// Assure-toi que ton fichier supabaseClient a bien les clés en dur pour ce test
import { supabase } from '../lib/supabaseClient';
import { questions } from '../lib/questions';
import confetti from 'canvas-confetti';

export default function Home() {
  const [step, setStep] = useState('welcome');
  const [candidate, setCandidate] = useState({ fullName: '', email: '', phone: '', experience: '' });
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [checkLoading, setCheckLoading] = useState(false);

  const handleInputChange = (e) => setCandidate({ ...candidate, [e.target.name]: e.target.value });
  const handleAnswer = (qid, opt) => setAnswers({ ...answers, [qid]: opt });

  // Fonction pour compter les mots
  const getWordCount = (text) => text.trim().split(/\s+/).filter(w => w.length > 0).length;

  // --- 1. BOUTON START (Vérifications) ---
  const startTest = async (e) => {
    e.preventDefault();
    
    // A. Validation Remplissage
    if (!candidate.fullName || !candidate.email || !candidate.phone) {
      alert("Please fill in all details.");
      return;
    }

    // B. Validation Longueur Experience (100 - 250 mots)
    const wc = getWordCount(candidate.experience);
    if (wc < 100) return alert(`Experience description is too short (${wc} words). Please write at least 100 words.`);
    if (wc > 250) return alert(`Experience description is too long (${wc} words). Please summarize to under 250 words.`);

    // C. Vérification Email Unique (Anti-doublon)
    setCheckLoading(true);

    if (!supabase) {
        alert("Erreur système : Pas de connexion Supabase.");
        setCheckLoading(false);
        return;
    }

    try {
        // CORRECTION ICI : 'candidates' en minuscules
        const { data, error } = await supabase
            .from('candidates')
            .select('email')
            .eq('email', candidate.email);

        if (error) {
            console.error("Erreur de vérification email:", error);
            // On laisse passer en cas d'erreur réseau pour ne pas bloquer l'utilisateur honnête
        } else if (data && data.length > 0) {
            alert("⛔ ACCESS DENIED: This email address has already completed the assessment.");
            setCheckLoading(false);
            return; // ON BLOQUE L'ACCÈS
        }
        
        // Tout est bon, on lance le test
        setStep('test');

    } catch (err) {
        console.error("Erreur critique:", err);
    }
    setCheckLoading(false);
  };

  // --- 2. BOUTON SUBMIT (Sauvegarde) ---
  const submitTest = async () => {
    setLoading(true);
    let calcScore = 0;
    
    // Calcul du score (5 points par question)
    questions.forEach(q => { 
        if (answers[q.id] === q.correctAnswer) calcScore += 5; 
    });
    setScore(calcScore);

    console.log("Sauvegarde en cours vers Supabase...");

    // SAUVEGARDE DANS LA BASE DE DONNÉES
    // CORRECTION ICI : Table 'candidates' et Colonne 'status' en minuscules
    const { error } = await supabase.from('candidates').insert([{ 
        full_name: candidate.fullName,
        email: candidate.email,
        phone: candidate.phone,
        experience: candidate.experience,
        answers: answers,
        score: calcScore,
        status: 'New'  // CORRECTION : 'status' minuscule
    }]);

    if (error) {
        console.error("ERREUR DE SAUVEGARDE :", error);
        alert("Erreur technique lors de la sauvegarde : " + error.message);
    } else {
        console.log("Sauvegarde réussie !");
        
        // Envoi de l'email via ton API (Resend)
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                body: JSON.stringify({ email: candidate.email, name: candidate.fullName, score: calcScore })
            });
        } catch (mailError) {
            console.error("Erreur d'envoi d'email (non bloquant):", mailError);
        }

        if(calcScore >= 50) confetti();
        setStep('result');
    }
    setLoading(false);
  };

  // Variables pour l'affichage visuel du compteur
  const currentWC = getWordCount(candidate.experience);
  const isValidWC = currentWC >= 100 && currentWC <= 250;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 font-sans text-slate-800">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight mb-2">TaxForce Elite</h1>
        <p className="text-slate-500 font-medium">Intuit TurboTax Live Agent Assessment</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-slate-200">
        
        {/* STEP 1: WELCOME & FORM */}
        {step === 'welcome' && (
          <form onSubmit={startTest} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Candidate Registration</h2>
            
            <input required name="fullName" placeholder="Full Name" onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-slate-50 outline-none focus:ring-2 ring-blue-500" />
            <input required name="email" type="email" placeholder="Email Address" onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-slate-50 outline-none focus:ring-2 ring-blue-500" />
            <input required name="phone" placeholder="Phone Number" onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-slate-50 outline-none focus:ring-2 ring-blue-500" />
            
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience (100-250 words)</label>
                <textarea 
                    name="experience" 
                    placeholder="Describe your customer service and tax experience..." 
                    onChange={handleInputChange} 
                    className={`w-full p-3 border rounded-lg bg-slate-50 outline-none h-40 focus:ring-2 ${isValidWC ? 'border-green-500 ring-green-500' : 'border-gray-300 ring-blue-500'}`} 
                />
                <div className="flex justify-between mt-1 text-xs">
                    <span className={isValidWC ? "text-green-600 font-bold" : "text-red-500 font-bold"}>
                        {currentWC} / 250 words
                    </span>
                    <span className="text-gray-400">Min: 100</span>
                </div>
            </div>

            <button 
                type="submit" 
                disabled={checkLoading} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all mt-2 disabled:opacity-50"
            >
                {checkLoading ? 'Verifying eligibility...' : 'Start Assessment'}
            </button>
          </form>
        )}

        {/* STEP 2: TEST */}
        {step === 'test' && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold border-b pb-4 text-slate-700">Assessment</h2>
            
            {questions.map((q, index) => (
              <div key={q.id} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{q.category}</span>
                <p className="font-semibold text-lg mt-2 mb-4 text-slate-800">{index + 1}. {q.question}</p>
                <div className="space-y-3">
                  {q.options.map((option) => (
                    <label key={option} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${answers[q.id] === option ? 'bg-blue-100 border-blue-500' : 'bg-white hover:bg-gray-100'}`}>
                      <input type="radio" name={`q-${q.id}`} onChange={() => handleAnswer(q.id, option)} className="mr-3 h-4 w-4 text-blue-600" />
                      <span className="text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button 
                onClick={submitTest} 
                disabled={loading} 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all"
            >
              {loading ? 'Submitting Results...' : 'Submit Assessment'}
            </button>
          </div>
        )}

        {/* STEP 3: RESULT */}
        {step === 'result' && (
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold mb-2">Assessment Completed</h2>
            <div className="bg-slate-100 p-6 rounded-xl inline-block my-6 border">
              <span className="block text-sm text-gray-500 uppercase">Your Score</span>
              <span className={`text-5xl font-extrabold ${score >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                {score}%
              </span>
            </div>
            <p className="text-gray-600">
                Thank you, {candidate.fullName}.<br/>
                Our team has received your application and will review it shortly.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}