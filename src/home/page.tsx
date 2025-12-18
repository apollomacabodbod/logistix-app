import HomeCovid from "./_components/home-covid";
import HomeHeroSection from "./_components/home-hero-section";
import HomeLogisticSolution from "./_components/home-logistic-solution";
import HomeLogoPartner from "./_components/home-logo-partner";
import HomeNews from "./_components/home-news";
import HomeOurLogisticServices from "./_components/home-our-logistic-services";
import HomeOurLogisticServicesCards from "./_components/home-our-logistic-services-cards";
import HomeTestimontials from "./_components/home-testimontials";
import HomeTestimontialsCards from "./_components/home-testimontials-cards";
import HomeTestimontialsYellowBox from "./_components/home-testimontials-yellow-box";
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
      <HomeCovid />
      <HomeLogoPartner />
      <HomeTestimontialsYellowBox />
      <HomeTestimontials />
      <HomeTestimontialsCards />
      <HomeNews />
    </>
  );
}
