import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-20 sm:p-20">
      <header className="flex items-center justify-center gap-4">
        <a className="text-link">Home</a> | 
        <a className="text-link">About</a>
      </header>
      <main className="flex flex-col gap-4 items-center justify-center">
        <h1>Boilerplate React Next.js TypeScript TailwindCSS</h1>
        <p>This is very easy and simple starter set of React.js, Next.js, TypeScript, and TailwindCSS.</p>
        <p>Feel free to copy and use it!</p>
          <a
            className="button"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <a
          className="image-link"
          href="https://github.com/kizuyoko/boilerplate-react-nextjs-typescript-tailwind/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub"
            width={30}
            height={30}
          /> 
         
        </a> 
        <a
          className="image-link"
          href="https://www.linkedin.com/in/kizuyoko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn"
            width={30}
            height={30}
          /> 
        </a>
      </footer>
    </div>
  );
}
