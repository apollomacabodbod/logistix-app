import HomeHeroSection from "./_components/home-hero-section";
import HomeLogisticSolution from "./_components/home-logistic-solution";
import HomeOurLogisticServices from "./_components/home-our-logistic-services";
import HomeOurLogisticServicesCards from "./_components/home-our-logistic-services-cards";
import HomeWhyChooseUs from "./_components/home-why-choose-us";
import Carousel from "./_components/home-why-choose-us-cards";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeLogisticSolution />
      <HomeOurLogisticServices />
      <HomeOurLogisticServicesCards />
      <HomeWhyChooseUs />
      <Carousel />
    </>
  );
}
