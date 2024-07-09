"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";

import "@/app/utils/page.css";
import HeroSecond from "./components/HeroSecondComp";
import Client from "./components/Client";
import Foot from "./components/Foot";

export default function Home() {
  useEffect(() => {
    const { gsap } = require("gsap");
    const { ScrollTrigger, ScrollToPlugin } = require("gsap/all");
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let panels = gsap.utils.toArray(".panel");
    let observer = ScrollTrigger.normalizeScroll(true);
    let scrollTween;

    const handleTouchStart = (e) => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      capture: true,
      passive: false,
    });

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
          observer.disable();
          observer.enable();
        },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="panel first">
        <Hero />
      </section>
      <section className="panel second">
        <HeroSecond />
      </section>
      <section className="panel third">
        <Client />
      </section>

      {/* <section className="panel third">
        <Client />
      </section> */}

      <Foot />
    </>
  );
}
