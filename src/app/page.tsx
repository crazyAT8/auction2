import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const auctionTypes = [
  { name: "English", description: "Ascending price auction" },
  { name: "Dutch", description: "Descending price auction" },
  { name: "Sealed-bid", description: "Highest hidden bid wins" },
  { name: "Random Selection", description: "Winner chosen randomly" },
  { name: "Playable", description: "Interactive auction games" },
  { name: "Orderbook", description: "Continuous double auction" },
  { name: "Hold-to-Compete", description: "Longest holder wins" },
]

export default function Home() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex-1 overflow-auto py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Web3 Auction Platform</h1>
          <p className="text-lg text-center text-muted-foreground mb-8">
            Discover a new way of auctioning with our decentralized platform
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {auctionTypes.map((type) => (
              <Card key={type.name} className="bg-card hover:bg-card/80 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{type.name} Auction</CardTitle>
                  <CardDescription className="text-sm">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/auctions/${type.name.toLowerCase()}`}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}