import Image from "next/image";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });


export default function Home() {
  return (
    <div className="flex justify-center font-sans">
      <main className="flex max-w-3xl flex-col items-center justify-between gap-y-6 py-32 px-16 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <section className="flex flex-col gap-4 w-full">
          <article className="hover:bg-[#4F4557] cursor-pointer p-4 rounded-2xl transition-colors duration-300 border-2 hover:border-2 border-amber-50/0 hover:border-amber-50/30">
            <h2 className={`${outfit.className} text-2xl font-semibold truncate`}>Trump analiza opciones para frenar precios de la energía mientras ataques de Irán agitan los mercados</h2>
            <p className={`${outfit.className} text-xl line-clamp-4`}>Se espera que el presidente de Estados Unidos, Donald Trump, revise el lunes un conjunto de opciones para controlar los precios del petróleo, que se han disparado a más de 100 dólares por barril debido a la guerra con Irán, según dos personas familiarizadas con el asunto.</p>
          </article>
          <article className="hover:bg-[#4F4557] p-4 rounded-2xl transition-colors duration-300 border-2 hover:border-2 border-amber-50/0 hover:border-amber-50/30">
            <h2 className={`${outfit.className} text-2xl font-semibold truncate`}>Trump analiza opciones para frenar precios de la energía mientras ataques de Irán agitan los mercados</h2>
            <p className={`${outfit.className} text-xl line-clamp-4`}>Se espera que el presidente de Estados Unidos, Donald Trump, revise el lunes un conjunto de opciones para controlar los precios del petróleo, que se han disparado a más de 100 dólares por barril debido a la guerra con Irán, según dos personas familiarizadas con el asunto.</p>
          </article>
          <article className="hover:bg-[#4F4557] p-4 rounded-2xl transition-colors duration-300 border-2 hover:border-2 border-amber-50/0 hover:border-amber-50/30">
            <h2 className={`${outfit.className} text-2xl font-semibold truncate`}>Trump analiza opciones para frenar precios de la energía mientras ataques de Irán agitan los mercados</h2>
            <p className={`${outfit.className} text-xl line-clamp-4`}>Se espera que el presidente de Estados Unidos, Donald Trump, revise el lunes un conjunto de opciones para controlar los precios del petróleo, que se han disparado a más de 100 dólares por barril debido a la guerra con Irán, según dos personas familiarizadas con el asunto.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
