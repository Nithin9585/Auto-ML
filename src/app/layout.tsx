import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>  
  <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >  
    <Navbar/>
        {children}
        </ThemeProvider>
        <Footer />

       
      </body>
    </html>
  );
}
