"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}

