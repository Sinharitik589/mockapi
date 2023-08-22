import { useEffect, useState } from "preact/hooks";
import Anim from "../components/Anim";
import Button from "../components/Button";
import RequestCard from "../components/RequestCard";
import Horizont from "../components/Horizont";
import Landing from "../components/Landing";
import About from "../components/About";
import HowToUse from "../components/HowToUse";
import RequestCards from "../components/RequestCards";

export default function Home() {
  console.log("rendered")

  const [val,setVal] = useState(0);

  return (
    <main >
        <Landing/>
        <About/>
        <HowToUse/>
        <RequestCards/>
    </main>
  )
}
