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
      <body className="">
        <RouteColorHandler />
        <Nav />
        <div className="flex scrollbar-hide min-h-[85vh]">
          <div className="gradient-text frame-brace left hidden lg:block sticky pl-2 top-[30lvh]">{"{"}</div>
          <main className="w-full p-6">{children}</main>
          <div id="logo" className="">
            {/* SVG width to height ratio should be 0.73 */}
            <div className="logo-mask w-[584px] h-[800px] opacity-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6"></div>
          </div>
          <div className="gradient-text frame-brace right hidden lg:block sticky pr-2 top-[30vh]">{"}"}</div>
          </div>
      </body>
    </html>
  )
}