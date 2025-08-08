import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">
              Encontre os melhores profissionais de odontologia
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Seu sorriso é a nossa prioridade.
            </p>

            <Button className="bg-purple-500 hover:bg-purple-400 w-fit">
              Encontre uma clínica
            </Button>
          </article>

          <div className="hidden-lg:block">
            <Image
              src={doctorImg}
              alt="Imagem de um médico"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
}
