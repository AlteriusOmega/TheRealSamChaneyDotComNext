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
        <div className="content">
            <div className="gradient-text" style={{ fontSize: '25em' }}>{"{"}</div>
            <main>{children}</main>
            <Nav />
            <div className="gradient-text" style={{ fontSize: '25em' }}>{"}"}</div>
        </div>
      </body>
    </html>
  )
}
