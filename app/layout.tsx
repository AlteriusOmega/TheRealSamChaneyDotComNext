import "./globals.css"
import Nav from "./components/Nav";
import RouteColorHandler from "./components/RouteColorHandler";
import { Crimson_Text } from "next/font/google";

export const metadata = {
  title: 'TheRealSamChaney.com',
  description: 'Will the real Sam Chaney please stand up?',
}

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-crimson-text"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <>
      <html lang="en" className={`${crimsonText.variable}`}>
        <body className="">
          <RouteColorHandler />
          <Nav />
          <div className="flex scrollbar-hide min-h-[77vh]">
            <div className="gradient-text frame-brace left hidden lg:block sticky pl-2 top-[30lvh]">{"{"}</div>
            <main className="w-full p-6 scrollbar-hide">{children}</main>
            <div id="logo" className="z-[-1]">
              {/* SVG width to height ratio should be 0.73 */}
              <div className="logo-mask w-[44vh] h-[60vh] sm:w-[58vh] sm:h-[80vh] opacity-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6"></div>
            </div>
            <div className="gradient-text frame-brace right hidden lg:block sticky pr-2 top-[30vh]">{"}"}</div>
            </div>
        </body>
      </html>
    </>
  )
}