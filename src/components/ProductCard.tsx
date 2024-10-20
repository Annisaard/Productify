import { useWishlistStore } from "@/store/wishlistSlice";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: IProductItem;
  key?: number;
}
export const ProductCard = ({ product, key }: ProductCardProps) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const isLowStock = product.stock <= 5;
  const stockColor = isLowStock ? "text-red-500" : "text-green-500";

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  return (
    <Card
      key={key}
      className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
    >
      <CardHeader className="p-0 gap-0">
        <div className="h-full overflow-hidden relative">
          <Image
            src={product.thumbnail}
            alt="product-image"
            width={100}
            height={100}
            className="size-full object-cover"
          />
          <div className="absolute top-2 left-4">
            <Badge>{product.category}</Badge>
          </div>
        </div>
        <CardTitle className="py-6 pb-4 px-3 flex justify-between items-center">
          <span className="text-primary ml-2">{product.title}</span>
          <Button
            className="cursor-pointer p-0 hover:bg-none"
            variant="ghost"
            onClick={handleWishlistClick}
          >
            <Bookmark className="size-5 " fill={isWishlisted ? "#ffff" : "#0000"} />
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-xl font-bold">${product.price}</p>
        <p className="text-sm text-gray-500">Discount: {product.discountPercentage}%</p>
      </CardContent>

      <CardFooter className="flex justify-between mt-auto">
        <p className="text-sm">Rating: ⭐{product.rating}</p>
        <p className={`${stockColor} text-sm`}>{isLowStock ? "Low Stock" : "In Stock"}</p>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
