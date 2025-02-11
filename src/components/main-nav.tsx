import Link from "next/link"
import { Gavel } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/" className="flex items-center space-x-2">
        <Gavel className="h-5 w-5" />
        <span className="font-bold text-sm sm:text-base">Web3 Auctions</span>
      </Link>
      <nav className="hidden sm:flex space-x-4">
        <Link href="/auctions" className="text-sm font-medium transition-colors hover:text-primary">
          Explore
        </Link>
        <Link href="/create" className="text-sm font-medium transition-colors hover:text-primary">
          Create Auction
        </Link>
      </nav>
    </div>
  )
}

