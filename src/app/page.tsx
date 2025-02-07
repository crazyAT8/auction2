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
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Web3 Auction Platform</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Discover a new way of auctioning with our decentralized platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctionTypes.map((type) => (
            <Card key={type.name} className="bg-card hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle>{type.name} Auction</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/auctions/${type.name.toLowerCase()}`}>Explore</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}