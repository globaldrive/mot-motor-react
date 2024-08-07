import { Inter } from "next/font/google";

import "@/assets/styles/global.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Providers } from "@/store/provider";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Интернет магазин техники для отдыха, охоты и рыбалки: лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски, квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды (snowboard)",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontsNextClassname = inter.className;
  return (
    <html lang="ru">
      <Providers>
        <body className={fontsNextClassname}>
          <Header />
          <main className="flex flex-col gap-6 grow md:gap-11 lg:gap-14">
            {children}
          </main>
          <Footer />
          <div id="modal-root"></div>
        </body>
      </Providers>
    </html>
  );
}
