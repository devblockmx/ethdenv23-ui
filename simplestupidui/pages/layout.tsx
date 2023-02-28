import './globals.css'

export const metadata = {
  title: 'Simple Stupid UI',
  description: 'Automatically generate a UI for your smart contract, hosted on our platform',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
