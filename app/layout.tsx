import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ABSENKA — Absensi Pramuka",
  description: "Aplikasi modern untuk mengelola anggota dan absensi kegiatan Pramuka",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#153c73",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
