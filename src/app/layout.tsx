import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import type React from "react" // Added import for React
import "./globals.css";


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} bg-background text-foreground flex flex-col h-full overflow-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col h-full">
            <header className="border-b shrink-0">
              <div className="container flex items-center justify-between h-16">
                <MainNav />
                <UserNav />
              </div>
            </header>
            <main className="flex-1 overflow-hidden">{children}</main>
            <footer className="border-t py-6 shrink-0">
              <div className="container text-center text-sm text-muted-foreground">
                © 2025 Web3 Auction Platform. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
