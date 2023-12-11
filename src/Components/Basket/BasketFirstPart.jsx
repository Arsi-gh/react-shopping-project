import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import BasketItem from "./BasketItem";

export default function BasketFirstPart() {
  return (
    <>
      <h3 className="font-bold text-lg flex gap-2 items-center">
        <ShoppingCartIcon className="w-[2rem]" /> Your basket :{" "}
      </h3>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>
      <BasketItem/>
    </>
  );
}
