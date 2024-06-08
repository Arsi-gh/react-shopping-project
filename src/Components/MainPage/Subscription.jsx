import { CurrencyDollarIcon, GiftIcon, MoonIcon, ReceiptRefundIcon, RocketLaunchIcon, SparklesIcon, TicketIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function Subscription() {
  return (
    <section className="custom-container flex gap-2 items-center justify-center max-md:flex-col">
      <Sub tier="one" transport={5} month={5} cashback={5} offers={5} />
      <Sub tier="three" transport={15} month={15} cashback={15} offers={15} customCss="md:scale-110 md:shadow-xl md:outline outline-2 outline-green-500 outline-offset-2"/>
      <Sub tier="two" transport={10} month={10} cashback={10} offers={10} />
    </section>
  );
}

const Sub = ({tier , transport , month , cashback , offers , customCss}) => {
  return (
    <div className={`my-12 bg-white md:p-6 md:px-10 p-3 space-y-3 items-center rounded-xl border text-neutral-700 ${customCss} max-md:flex flex-wrap gap-x-8`}>
      <h3 className="text-3xl font-semibold max-md:w-full">Tier {tier} sub</h3>
      <p>{month} month</p>
      <hr />
      <p>{offers} special offers</p>
      <hr />
      <p>monthly offers</p>
      <hr />
      <p className="flex justify-between items-center">{cashback} % cash back<CurrencyDollarIcon className="w-5"/></p>
      <hr />
      <p className="flex justify-between items-center">{transport} free transport<TruckIcon className="w-5"/></p>
      <hr />
      <p className="flex justify-between items-center">all time delievry<MoonIcon className="w-5"/></p>
      <hr />
      <p className="flex justify-between items-center">1 week refund time<ReceiptRefundIcon className="w-5"/></p>
      <hr />
      <p className="flex justify-between items-center">special offers<SparklesIcon className="w-5"/></p>
      <hr />
      <p className="flex justify-between items-center">fast travel<RocketLaunchIcon className="w-5"/></p>
      <hr />
      <p className="flex justify-between items-center">free gifts<GiftIcon className="w-5"/></p>
      <button className="gradient p-2 font-semibold rounded-lg w-full">Subscribe</button>
    </div>
  );
};








