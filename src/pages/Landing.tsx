import { Companies } from "../components/Landing/Companies/Companies";
import { Footer } from "../components/Landing/Footer/Footer";
import { Header } from "../components/Landing/Header/Header";
import { Pricing } from "../components/Landing/Pricing/Pricing";
import { SectionHome } from "../components/Landing/SectionHome/SectionHome";

export function Landing() {
  return (
    <>
      <div className="min-h-screen bg-detail bg-[#300D7B] bg-cover bg-no-repeat">
        <Header />
        <SectionHome />
        <Companies />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
