export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "10px", background: "#eee" }}>
          <h2>Welcome To My Blogs</h2>
        </header>

        {children}

        <footer style={{ padding: "10px", background: "#eee" }}>
          © 2025 Blog App
        </footer>
      </body>
    </html>
  );
}
