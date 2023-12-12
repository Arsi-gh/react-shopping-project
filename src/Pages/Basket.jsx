import { useState } from "react";
import {BasketFirstPart} from "../Components/Basket/BasketFirstPart"
import BasketSecondPart from "../Components/Basket/BasketSecondPart";
import BasketLastPart from "../Components/Basket/BasketLastPart";
import BasketProgress from "../Components/Basket/BasketProgress";
import BasketSide from "../Components/Basket/BasketSide";

const BASKET_PARTS = [<BasketFirstPart/> , <BasketSecondPart/> , <BasketLastPart/> ]

export default function Basket() { 

  const [basketIndex , setBasketIndex] = useState(0)
  return (
    <>
      <BasketProgress basketIndex={basketIndex} basketHandler={setBasketIndex}/>
      <main className="flex gap-2 m-4 mx-20 p-2 max-lg:flex-col-reverse max-md:text-sm max-md:mx-1">
        <BasketSide basketIndex={basketIndex} basketHandler={setBasketIndex}/>
        <div className="lg:w-2/3 flex flex-col h-fit gap-3 bg-zinc-100 p-4 rounded-xl flex-1 text-neutral-800">
            {BASKET_PARTS[basketIndex]}
        </div>
      </main>
    </>
  );
}