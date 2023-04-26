import './globals.css'

export const metadata = {
  title: 'Contador de Palavras',
  description: 'Contador de Palavras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-700'>{children}</body>
    </html>
  )
}
