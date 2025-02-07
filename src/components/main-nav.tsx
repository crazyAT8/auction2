import Link from "next/link"
import { Gavel } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <Gavel className="h-6 w-6" />
        <span className="font-bold">Web3 Auctions</span>
      </Link>
      <Link href="/auctions" className="text-sm font-medium transition-colors hover:text-primary">
        Explore
      </Link>
      <Link href="/create" className="text-sm font-medium transition-colors hover:text-primary">
        Create Auction
      </Link>
    </div>
  )
}

