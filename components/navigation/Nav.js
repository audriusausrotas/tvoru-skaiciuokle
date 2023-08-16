import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-center gap-20 p-3 text-2xl font-bold text-white bg-slate-400">
      <Link href="/">Skaiciuokle</Link>
      <Link href="/kainos">Kainos</Link>
    </div>
  );
}
