import './globals.css'
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Results Summary - Frontend Mentor',
  description: 'HTML y CSS (With Tailwind CSS) - Frontend Mentor'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  )
}
