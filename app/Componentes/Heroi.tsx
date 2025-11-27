import Spline from "@splinetool/react-spline"
import MensagemBalao from "./MensagemBalao";

function Heroi() {
  return (
    <section id="heroi" className="">
        <div className="flex flex-col items-center ">
     
                <div className=" w-full h-screen">
                    <Spline className='w-full h-full' scene="https://prod.spline.design/udJw9nGZBEeCvnfH/scene.splinecode"/>
                    
                    {/* Caixa "Brinque comigo" */}
                    <div 
                        className={`
                            absolute top-[20%] left-[55%] lg:top-[20%] lg:left-[60%]
                            transform -translate-x-1/2 -translate-y-1/2
                            text-white text-sm font-semibold 
                           rounded-lg 
                        `}
                    >
                        <MensagemBalao />
                    </div>
                </div>
                 <h1
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="3000"
                        className='absolute bottom-0 left-20 text-4xl md:text-6xl tracking-wider my-8 leading-tight text-white max-w-lg text-center lg:mr-10'>
                        Seja bem-vindo 
                        <br />
                        ao meu portfólio!
                    </h1>
        </div>                
    </section>
  );
}

export default Heroi
