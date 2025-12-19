import "./globals.css";
import { Toaster } from "sonner"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TerraDev",
	description: "App free Movies",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className="overflow-x-hidden" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 overflow-x-hidden`}
			>
				{children}
				<Toaster richColors position="top-right" />
			</body>
		</html>
	);
}
