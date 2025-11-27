import Image from 'next/image';  



function SobreMim() {
    return (
        <main>
            <section id="sobre" className="relative w-full md:h-screen h-screen lg:h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden lg:gap-40 px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
  
                <div className="w-full max-w-2xl lg:ml-[5%] z-10 text-white text-center lg:text-left">
                     
                
                    {/* Descrição com fonte manuscrita */}
                    <p className=' text-xl md:text-2xl tracking-wider max-w-2xl pb-6 text-gray-300'>
                         Sou <span className="text-purple-400 font-bold transition-colors duration-300 hover:text-blue-400">Lincoln Gasparin</span>, um Desenvolvedor Full Stack Jr apaixonado por criar soluções digitais inovadoras. Com habilidades em <span className="font-bold text-blue-400">JavaScript, TypeScript, React, Next.js, Node.js</span> e muito mais, estou sempre em busca de novos desafios para aprimorar minhas competências e contribuir para projetos impactantes.
                    </p>
                </div>
                <div className=''>
                    <Image
                                  src="/imagens/LvgLinkedin.png"
                                  alt="Foto de Lincoln Gasparin"
                                  width={400}
                                  height={400}
                                  className=" relative rounded-full  object-cover border-4 border-gray-700"
                                />
                </div>
                    
            </section>
        </main>      
    );
  }

  export default SobreMim;