import React from 'react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-neutral pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-primary">{title}</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}