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
        {/* Need to hide overflow due to brackets going outside page bounds */}
        <div className="flex h-[90vh]">
          <div className="gradient-text frame-brace left sticky pl-2 pr-6 top-48">{"{"}</div>
          <main className="w-full">{children}</main>
            <img id="logo" src="/sam_chaney_logo.svg" className="gradient-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[800px] z-[-1]" />
          <div className="gradient-text frame-brace right sticky pr-2 pl-6 top-48">{"}"}</div>
        </div>
      </body>
    </html>
  )
}
