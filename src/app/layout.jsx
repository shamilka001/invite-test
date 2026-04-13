import "./globals.css";

export const metadata = {
  title: "Invitation",
  description: "Wedding Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}