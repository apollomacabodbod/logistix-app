import PricingHeroSection from "./_components/pricing-hero-section";
import PricingPlan from "./_components/pricing-plan";
import PricingPlanCards from "./_components/pricing-plan-cards";
import PricingYellowBox from "./_components/pricing-yellow-box";

export default function Pricing() {
  return (
    <>
      <PricingHeroSection />
      <PricingYellowBox />
      <PricingPlan />
      <PricingPlanCards />
    </>
  );
}
