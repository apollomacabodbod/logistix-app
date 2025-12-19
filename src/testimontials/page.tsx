import TestimontialsCards from "./_components/testimontials-cards";
import TestimontialsHeroSection from "./_components/testimontials-hero-section";
import TestimontialsOurCustomers from "./_components/testimontials-our-customers";
import TestimontialsYellowBox from "./_components/testimontials-yellow-box";

export default function Testimontials() {
  return (
    <>
      <TestimontialsHeroSection />
      <TestimontialsYellowBox />
      <TestimontialsOurCustomers />
      <TestimontialsCards />
    </>
  );
}
