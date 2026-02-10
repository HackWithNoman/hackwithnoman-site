import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section className="flex flex-col items-center">
        <h1 className="text-3xl mb-3 font-bold">Noman Ahmed</h1>
        <h2 className="max-w-lg px-3 text-center">
          Front-End Developer | React, TypeScript, Tailwind CSS | Building
          Production-Ready Templates @GridPixels
        </h2>
      </section>

      <section className="mt-8 text-center">
        <h2 className="mb-3">Follow Me On</h2>
        <div className="flex justify-between gap-6">
          <Link href={"https://github.com/HackWithNoman"}>
            <FaGithub size={26} />
          </Link>
          <Link href={"https://www.linkedin.com/in/hackwithnoman/"}>
            <FaLinkedin size={26} />
          </Link>
          <Link href={"https://x.com/HackWithNoman"}>
            <FaTwitter size={26} />
          </Link>
          <Link href={"https://www.youtube.com/@HackWithNoman"}>
            <FaYoutube size={26} />
          </Link>
        </div>
      </section>
    </div>
  );
}
