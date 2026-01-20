export const metadata = {
  title: "Proof of Build | Web3 Developer Portfolio",
  description: "Built by Aarav Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white min-h-screen">
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}

