import './globals.css'

export const metadata = {
  title: 'TaxForce Elite - Assessment',
  description: 'Recruitment Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}