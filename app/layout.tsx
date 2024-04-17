import "./globals.css"
import Nav from "./components/Nav";
import RouteColorHandler from "./components/RouteColorHandler";

export const metadata = {
  title: 'TheRealSamChaney.com',
  description: 'Will the real Sam Chaney please stand up?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en">
      <body>
        <RouteColorHandler />
        <Nav />
        <div className="content">
            <div className="gradient-text" style={{ fontSize: '25rem' }}>{"{"}</div>
            <main>{children}</main>
            <div className="gradient-text" style={{ fontSize: '25rem' }}>{"}"}</div>
        </div>
      </body>
    </html>
  )
}
