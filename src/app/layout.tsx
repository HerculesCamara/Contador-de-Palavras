import './globals.css'

export const metadata = {
  charset: "UTF-8",
  title: 'Contador de Palavras',
  description: 'Contador de Palavras',
  author: 'Hércules Câmara',
  keywords: 'Contador, de, palavras, counter, words, word, conte, contar, quantas, palavras, tem, meu, texto',
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
