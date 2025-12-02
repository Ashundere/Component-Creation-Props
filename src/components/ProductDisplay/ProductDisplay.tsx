import type { ProductDisplayProps } from "../../types";


export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription,
  showStockStatus,
  onAddToCart
}) => {
  return (
    <div className={"user-profile"}>
      <div className="flex flex-col justify-between items-center row-start-1">
        <h1>{product.name}</h1>
        <h2 className="text-blue-600 font-bold">{'$'+ product.price}</h2>
        <p>{showDescription? product.description: null}</p>
        <p className="text-green-400">{showStockStatus? "In Stock":"Out of Stock"}</p>
        <button className = "bg-blue-300 border-blue-500 text-blue-700" onClick = {() => {onAddToCart?.(product.id)}}>Add to Cart</button>
      </div>
    </div>
  );
};