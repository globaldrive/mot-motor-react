import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/global.scss";
import { Providers } from "@/store/provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Интернет магазин техники для отдыха, охоты и рыбалки: лодочные моторы, лодки ПВХ, лодки РИБ-ПВХ под мотор, SUP доски, квадроциклы, мотобуксировщики, снегоходы, снегоуборщики, сноуборды (snowboard)",
  description: "Generated by create next app"
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontsNextClassname = inter.className;
  return (
    <html lang="ru">
      <Providers>
        <body className={fontsNextClassname}>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
