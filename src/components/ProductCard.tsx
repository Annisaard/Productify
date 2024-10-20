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
            src={product?.image}
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
          <Button className="cursor-pointer p-0 hover:bg-none" variant="ghost">
            <Bookmark className="size-5" />
          </Button>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div>test</div>
      </CardContent>

      <CardFooter className="space-x-4 mt-auto"></CardFooter>
    </Card>
  );
};
export default ProductCard;
