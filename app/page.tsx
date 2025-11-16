import AnalyticsPage from "@/assets/analytics/page";
import Slider from "@/assets/banner/page";
import LuxuryInteriorsHero from "@/assets/description/page";
import Discount from "@/assets/discount/page";
import Image from "next/image";

export default function Home() {
  return (
    
    <div>
      <Slider />
      <Discount/>
      <LuxuryInteriorsHero/>
    </div>
  );
}
