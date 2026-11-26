// src/dashbord.jsx - Dashboard component (main content area)
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ProductCard from "./ProductCard";
import TaskList from "./TaskList";

// This is the main dashboard content
function Dashboard() {
  // Stats data - each stat has a title, value, and icon
  const stats = [
    { title: "Total Revenue", value: "$45,231", icon: DollarSign, change: "+20.1%" },
    { title: "Customers", value: "2,350", icon: Users, change: "+15.3%" },
    { title: "Orders", value: "1,234", icon: ShoppingCart, change: "+8.7%" },
    { title: "Growth", value: "12.5%", icon: TrendingUp, change: "+4.2%" },
  ];

  // Products data
  const products = [
    { name: "Wireless Headphones", price: "$99", description: "Premium sound quality" },
    { name: "Smart Watch", price: "$199", description: "Track your fitness goals" },
    { name: "Laptop Stand", price: "$49", description: "Ergonomic design" },
  ];

  return (
    // Main content container with padding
    <main className="flex-1 p-6 bg-background overflow-auto">
      {/* Welcome message */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">
          Welcome back, John! 👋
        </h2>
        <p className="text-muted-foreground mt-1">
          Here is what is happening with your projects today.
        </p>
      </div>

      {/* Stats cards - 4 cards in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardDescription>{stat.title}</CardDescription>
                <stat.icon className="size-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-green-600 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Two-column layout: Products + Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Products */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Popular Products
          </h2>
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>

        {/* Right column - Tasks */}
        <TaskList />
      </div>
    </main>
  );
}

export default Dashboard;
