import ZoomParallax from "./ZoomParallax/ZoomParallax.tsx";
import './global.sass'
import styles from './main.module.sass'
import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);
  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  )
}

export default App
