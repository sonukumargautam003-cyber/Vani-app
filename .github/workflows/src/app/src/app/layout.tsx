export const metadata = {
  title: "Vani - India's AI Video Platform",
  description: "Think it. Say it. Make it. Share it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
