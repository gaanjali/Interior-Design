import './globals.css';  // Ensure you have a globals.css file


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Interior Design</title>
      </head>
      <body>
        {children}
      

      </body>
    </html>
  );
}
