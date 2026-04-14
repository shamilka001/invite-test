import "./globals.css";
import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
export const metadata = {
  title: "Invitation",
  description: "Wedding Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}