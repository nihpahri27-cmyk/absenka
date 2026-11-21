import Link from "next/link";

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-card">
        <div className="brand-mark">A</div>
        <h1>ABSENKA</h1>
        <p>Absensi Pramuka yang cepat, modern, dan mudah digunakan.</p>
        <Link className="primary" href="/login">Masuk ke Aplikasi</Link>
      </div>
    </main>
  );
}
