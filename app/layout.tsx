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
        <div className="flex items-center">
          <div className="gradient-text text-[25rem] m-[-30px] ml-[-70px] mt-[-210px]">{"{"}</div>
          <main>{children}</main>
          <div className="gradient-text text-[25rem] m-[-40px] mr-[-60px] mt-[-210px]">{"}"}</div>
        </div>
      </body>
    </html>
  )
}
