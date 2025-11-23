import Slider from "@/assets/banner/page";
import LuxuryInteriorsHero from "@/assets/description/page";
import Discount from "@/assets/discount/page";
import Reviews from "@/components/Reviews";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="w-full">
      <Slider />
      <Discount/>
      <LuxuryInteriorsHero/>
      <Products />
      <Reviews />
    </div>
  );
}