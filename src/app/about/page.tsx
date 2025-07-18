import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center">
      <h1>About</h1>
      <p>This is About Page.</p>
      <Button
        href="/"
        rel="noopener noreferrer"
      >
        Home
      </Button>
    </main>
  );
}
