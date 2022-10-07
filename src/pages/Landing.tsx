import { Companies } from "../components/Landing/Companies/Companies";
import { Footer } from "../components/Landing/Footer/Footer";
import { Header } from "../components/Landing/Header/Header";
import { Pricing } from "../components/Landing/Pricing/Pricing";
import { SectionHome } from "../components/Landing/SectionHome/SectionHome";

export function Landing() {
  return (
    <>
      <div className="min-h-screen bg-detail bg-[#210068] bg-cover bg-no-repeat backdrop-blur-[25px]">
        <Header />
        <SectionHome />
        <Companies />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
