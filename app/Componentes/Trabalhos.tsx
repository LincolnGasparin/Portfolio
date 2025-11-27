import Image from 'next/image';
import { projects } from '../lib/projects';

// Lista de projetos para exibir

function Trabalhos() {
    return (
      <section id="trabalhos" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Meus Trabalhos
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Confira alguns dos projetos que desenvolvi.
            </p>
          </div>

          {/* Grid para os cards dos projetos */}
          <div data-aos="fade-right" 
          data-aos-once="true" 
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {projects.map((project) => (
              <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="relative block group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.6)] hover:scale-105">
                <Image src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} width={800} height={600} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-2">{project.title}</h3>
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="bg-purple-600/50 text-purple-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );  
  }
  
  export default Trabalhos;