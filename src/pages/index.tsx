import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import logoAsset from "@/assets/logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Surredstone</title>
      </Head>
      <main className="min-h-screen w-screen flex flex-col gap-24 md:gap-10 justify-center items-center bg-gradient-to-br from-zinc-900 shadow-2xl shadow-white to-violet-950">
        <Image
          src={logoAsset}
          className="w-[stretch] mx-6 md:w-1/2"
          alt="Logo do Surredstone"
        />
        <nav>
          <ul className="flex text-center md:flex-row md:gap-16 flex-col gap-4">
            <li>
              <Link
                className="text-2xl text-violet-300 hover:text-violet-100 font-bold uppercase transition-colors"
                href="/commands"
              >
                Comandos
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl text-violet-300 hover:text-violet-100 font-bold uppercase transition-colors"
                href="/features"
              >
                Modificações
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
