import Header from "@/components/layout/header/header";
import Image from "next/image";
import NewWorlds from "./newWorld";
import Trending from "./trending";
import HappeningNow from "./happeningNow";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <NewWorlds />
      <Trending />
      <HappeningNow />
      <Footer/>
    </main>
  );
}
