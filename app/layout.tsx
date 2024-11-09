import '@app/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "CRUD Example",
    description: "A Next.js test application with CRUD functionality created by Landon :D"
}

const RootLayout = ( { children }) => {
  return (
    <html lang="en">
        <head>
        <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
        </head>
      <body className="nes-text" style={{"fontFamily": "kongtext"}}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
