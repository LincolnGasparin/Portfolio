

import Image from 'next/image';
import { Briefcase, GraduationCap, Star, Award, Mail, Phone, Linkedin, Github, Languages } from 'lucide-react';
import { resumeData } from '../lib/resume';



export default function Curriculo() {
  return (
    <section id="curriculo" className="bg-gray-900/50 py-20 px-4 sm:px-6 lg:px-8 text-gray-300">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-2xl shadow-black/50 rounded-lg overflow-hidden">
        {/* Cabeçalho do Currículo */}
        <header className="p-8 bg-gray-800/50 flex flex-col sm:flex-row items-center gap-8 border-b border-gray-700">
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000" 
            data-aos-once="true"
            className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-md opacity-50"></div>
            <Image
              src="/imagens/LvGCabeloPreto.png"
              alt="Foto de Lincoln Gasparin"
              width={128}
              height={128}
              className="relative rounded-full w-32 h-32 object-cover border-4 border-gray-700"
            />
          </div>
          <div 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="15000" 
            data-aos-once="true" className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-white">{resumeData.name}</h1>
            <h2 className="text-xl text-blue-400 font-medium mt-1">{resumeData.title}</h2>
            <p className="mt-3 text-gray-400 max-w-lg">{resumeData.summary}</p>
            <div className="mt-4 flex justify-center sm:justify-start flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Mail size={16} /> {resumeData.contact.email}</a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Linkedin size={16} /> LinkedIn</a>
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Github size={16} /> GitHub</a>
              <div className="flex items-center gap-2"><Phone size={16} /> {resumeData.contact.phone}</div>
            </div>
          </div>
        </header>

        {/* Corpo do Currículo */}
        <main className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Coluna Esquerda: Experiência e Educação */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-white border-b-2 border-blue-500/50 pb-2 mb-6 flex items-center gap-3"><Briefcase /> Experiência Profissional</h3>
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <article key={index} className="transition-transform duration-300 hover:scale-[1.02]">
                    <h4 className="text-lg font-semibold text-blue-300">{exp.role}</h4>
                    <p className="text-md text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white border-b-2 border-blue-500/50 pb-2 mb-6 flex items-center gap-3"><GraduationCap /> Educação</h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <article key={index}>
                    <h4 className="text-lg font-semibold text-blue-300">{edu.degree}</h4>
                    <p className="text-md text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Direita: Habilidades e Certificações */}
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-white border-b-2 border-blue-500/50 pb-2 mb-6 flex items-center gap-3"><Star /> Habilidades & Ferramentas</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span key={skill} className="bg-gray-800 text-blue-300 text-sm font-medium px-3 py-1 rounded-full transition-colors hover:bg-blue-500/20 hover:text-white">{skill}</span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-white border-b-2 border-blue-500/50 pb-2 mb-6 flex items-center gap-3"><Award /> Certificações</h3>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, index) => (
                  <article key={index}>
                    <h4 className="font-semibold text-blue-300">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer} - {cert.year}</p>
                  </article>
                ))}
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-bold text-white border-b-2 border-blue-500/50 pb-2 mb-6 flex items-center gap-3"><Languages /> Idiomas</h3>
              <div className="space-y-4">
                {resumeData.Languages.map((language, index) => (
                  <article key={index}>
                    <h4 className="font-semibold text-blue-300">{language.name}</h4>
                    <p className="text-sm text-gray-400">{language.level}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </section>
  );
}
