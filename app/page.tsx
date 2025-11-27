
"use client";
import { useEffect } from 'react';
import MinhaNavBar from './Componentes/MinhaNavBar';
import SobreMim from './Componentes/SobreMim';
import Trabalhos from './Componentes/Trabalhos';
import Curriculo from './Componentes/Curriculo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heroi from './Componentes/Heroi';

export default function Home() {
  useEffect(() => {
    // Inicializa o AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <MinhaNavBar />
      <main>
        <Heroi />
        <SobreMim />
        <Trabalhos />
        <Curriculo />
      </main>
    </>
  );
}
