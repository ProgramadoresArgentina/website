import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Nav from '@/app/nav';
import { Footer } from '@/components/footer';

const metadata = {
  title: 'Programadores Argentina - Comunidad',
  description: 'Programadores en Argentina. Un espacio para conectar y ayudarte a encontrar trabajo. Encuentra programadores de argentina para tu negocio o empresa.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="dark">
          <Nav />
          <div>{children}</div>
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
