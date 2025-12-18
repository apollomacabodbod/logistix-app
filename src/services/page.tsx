import ServicesCovid from "./_components/services-covid";
import ServicesHeroSection from "./_components/services-hero-section";
import ServicesLogoPartner from "./_components/services-logo-partner";
import ServicesOurLogistic from "./_components/services-our-logistic";
import ServicesOurLogisticCards from "./_components/services-our-logistic-cards";
import ServicesTestimontials from "./_components/services-testimontials";
import ServicesTestimontialsCards from "./_components/services-testimontials-cards";
import ServicesTestimontialsYellowBox from "./_components/services-testimontials-yellow-box";

export default function Services() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesOurLogistic />
      <ServicesOurLogisticCards />
      <ServicesCovid />
      <ServicesLogoPartner />
      <ServicesTestimontialsYellowBox />
      <ServicesTestimontials />
      <ServicesTestimontialsCards />
    </>
  );
}
