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
      <main className="min-h-screen flex flex-col gap-10 justify-center items-center bg-gradient-to-br origin-top-left from-violet-900 shadow-2xl shadow-white to-violet-800">
        <Image src={logoAsset} className="w-1/2" alt="Logo do Surredstone" />
        <nav>
          <ul className="flex gap-12">
            <li>
              <Link
                className="text-2xl text-violet-300 hover:text-violet-100 font-bold uppercase transition-colors"
                href="#"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl text-violet-300 hover:text-violet-100 font-bold uppercase transition-colors"
                href="#"
              >
                Teste
              </Link>
            </li>
            <li>
              <Link
                className="text-2xl text-violet-300 hover:text-violet-100 font-bold uppercase transition-colors"
                href="#"
              >
                Coisas
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
