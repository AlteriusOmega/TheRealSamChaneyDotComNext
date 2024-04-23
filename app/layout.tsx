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
        {/* Need to hide overflow due to brackets going outside page bounds */}
        <div className="">
        <div className="flex scrollbar-hide flex-nowrap">
          {/* <div className=" bg-darkTextPrimary mt-9">TEST</div> */}
          <div className="gradient-text frame-brace left hidden lg:block sticky pl-2 top-[30lvh]">{"{"}</div>
          <main className="w-full p-6">{children}</main>
          <img id="logo" src="/sam_chaney_logo.svg" className="gradient-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[800px] z-[-1]" />
          <div className="gradient-text frame-brace right hidden lg:block sticky pr-2 top-[30vh]">{"}"}</div>
          </div>
          </div>
      </body>
    </html>
  )
}