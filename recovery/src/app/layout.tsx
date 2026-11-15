import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cotiza tu viaje | ARICEBA',
  description: 'Solicita una propuesta de viaje personalizada con ARICEBA.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="es"><body>{children}</body></html>
}
