"use client";
import { useEffect } from "react";
// import Client from "./components/Client";s
import Hero from "./components/Hero";
// import HeroSecond from "./components/HeroSecond";
// import Solutions from "./components/SolutionsScroll";
// import MainFooter from "./components/MainFooter";
// import SolutionsSecondComp from "./components/SolutionsSecondComp";
import "@/app/utils/page.css";
import HeroSecond from "./components/HeroSecond";
import Client from "./components/Client";
import Solutions from "./components/SolutionsScroll";
import Foot from "./components/Foot";
import SolutionsSecondComp from "./components/SolutionSecond";

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
      <section className="panel third">
        <Solutions />
      </section>
      <section className="panel fourth">
        <SolutionsSecondComp />
      </section>
      <section className="panel fivth relative">
        <Foot />
      </section>


      {/* <section className="panel fourth">
        <Hero />
      </section>
      <section className="panel fifth">
        <Hero />
      </section>
      <section className="panel sixth">
        <Hero />
      </section>
      <section className="panel seventh">
        <Hero />
      </section>
      <section className="panel eigth">
        <Hero />
      </section> */}

      {/* <section className="panel third"> */}
      {/* <Solutions /> */}
      {/* </section> */}
      {/* <section className="panel fourth">
        <SolutionsSecondComp />
      </section> */}
      {/* <section className="panel fifth">
        <Client />
      </section>
      <section className="panel sixth">
        <MainFooter />
      </section> */}
      {/* Alternatively, you can use these sections for testing */}
      {/* <section className="panel red">ONE</section>
      <section className="panel orange">TWO</section>
      <section className="panel purple">THREE</section>
      <section className="panel green">FOUR</section>
      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
          />
        </a>
      </header> */}
    </>
  );
}
