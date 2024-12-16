import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4">Newsletter</h3>
      <p className="mb-4">Restez informé de nos dernières offres</p>
      {subscribed ? (
        <div className="text-green-400">
          Merci pour votre inscription !
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="px-4 py-2 rounded-l-lg flex-1 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
          >
            S'inscrire
          </button>
        </form>
      )}
    </div>
  );
}