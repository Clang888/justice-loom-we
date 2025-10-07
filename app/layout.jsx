import "./globals.css";

export const metadata = {
  title: "Just Law Education",
  description: "Easy-to-use legal guidance for self-represented people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
