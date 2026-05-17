import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { IntelligenceGap } from "./components/IntelligenceGap";
import { WhenClientsEngage } from "./components/WhenClientsEngage";
import { OurServices } from "./components/OurServices";
import { OurClients } from "./components/OurClients";
import { OurApproach } from "./components/OurApproach";
import { CaseStudies } from "./components/CaseStudies";
import { IntelligenceTools } from "./components/IntelligenceTools";
import { WhyFinacquis } from "./components/WhyFinacquis";
import { StartConversation } from "./components/StartConversation";
import { AboutFinacquis } from "./components/AboutFinacquis";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <IntelligenceGap />
        <WhenClientsEngage />
        <OurServices />
        <OurClients />
        <OurApproach />
        <CaseStudies />
        <IntelligenceTools />
        <WhyFinacquis />
        <StartConversation />
        <AboutFinacquis />
      </main>
      <Footer />
    </div>
  );
}
