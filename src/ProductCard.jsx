// src/ProductCard.jsx - A single product card component
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// This component shows one product as a card
function ProductCard({ name, price, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          {/* Product price */}
          <span className="text-lg font-bold text-foreground">{price}</span>
          {/* Buy button */}
          <Button size="sm">Buy Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
