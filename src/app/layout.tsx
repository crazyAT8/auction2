import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container flex items-center justify-between h-16">
                <MainNav />
                <UserNav />
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6">
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
