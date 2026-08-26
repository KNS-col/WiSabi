"use client";

import { useEffect, useRef, useState } from "react";
import { howItWorks } from "@/lib/config";
import { cn } from "@/lib/utils";

const STEP_EMOJI = ["🧑‍💼", "🖥️", "📞", "🎧", "📈"];
const TOTAL = howItWorks.length;
const LINE_MS = 1100;
const TEXT_DELAY_MS = 200;

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView: inView || reducedMotion, reducedMotion };
}

function StepIcon({ index, size }: { index: number; size: "md" | "sm" }) {
  const circle = size === "md" ? "h-24 w-24 sm:h-28 sm:w-28" : "h-20 w-20";
  const badge = size === "md" ? "h-7 w-7 text-xs" : "h-6 w-6 text-[11px]";
  const emoji = size === "md" ? "text-4xl" : "text-3xl";

  return (
    <div className="relative">
      <div
        className={`flex ${circle} items-center justify-center rounded-full border-4 border-primary bg-white shadow-sm`}
      >
        <span className={emoji} aria-hidden="true">
          {STEP_EMOJI[index]}
        </span>
      </div>
      <span
        className={`absolute -top-1 -right-1 flex ${badge} items-center justify-center rounded-full bg-primary font-bold text-white ring-2 ring-white`}
      >
        {howItWorks[index].step}
      </span>
    </div>
  );
}

function StepText({ index, align }: { index: number; align: "center" | "left" }) {
  const step = howItWorks[index];
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <>
      <h3 className={`font-bold text-black text-sm mb-2 leading-snug ${textAlign}`}>
        {step.title}
      </h3>
      {"checklist" in step ? (
        <ul className="text-left space-y-1">
          {step.checklist.map((item) => (
            <li key={item} className="text-xs text-dark-gray">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className={`text-xs text-dark-gray leading-relaxed ${textAlign}`}>
          {step.description}
        </p>
      )}
    </>
  );
}

export function HowItWorksFlow() {
  const { ref, inView, reducedMotion } = useInView();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
          How We Sabi Works
        </h2>
        <div
          className="mx-auto mb-6 h-1 w-12 rounded-full bg-primary"
          aria-hidden="true"
        />
        <p className="text-center text-dark-gray max-w-2xl mx-auto mb-14 md:mb-16">
          From field registration to customers finding your business: five
          steps that change everything.
        </p>

        <div ref={ref}>
          {/* Desktop / tablet: horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative grid grid-cols-5 h-24 sm:h-28 items-center mb-6">
              <div
                className={cn(
                  "absolute left-[10%] right-[10%] top-1/2 h-1 origin-left -translate-y-1/2 bg-primary transition-transform ease-out",
                  inView ? "scale-x-100" : "scale-x-0"
                )}
                style={
                  reducedMotion ? undefined : { transitionDuration: `${LINE_MS}ms` }
                }
                aria-hidden="true"
              />
              {howItWorks.map((step, i) => {
                const iconDelay = (i / (TOTAL - 1)) * LINE_MS;
                return (
                  <div key={step.step} className="relative z-10 flex justify-center">
                    <div
                      className={cn(
                        "transition-all duration-500 ease-out",
                        inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      )}
                      style={
                        reducedMotion
                          ? undefined
                          : { transitionDelay: `${iconDelay}ms` }
                      }
                    >
                      <StepIcon index={i} size="md" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-5 gap-4">
              {howItWorks.map((step, i) => {
                const textDelay = (i / (TOTAL - 1)) * LINE_MS + TEXT_DELAY_MS;
                return (
                  <div
                    key={step.step}
                    className={cn(
                      "px-2 max-w-[13rem] mx-auto transition-all duration-500 ease-out",
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    )}
                    style={
                      reducedMotion
                        ? undefined
                        : { transitionDelay: `${textDelay}ms` }
                    }
                  >
                    <StepText index={i} align="center" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col items-center gap-10">
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-500 ease-out",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={
                  reducedMotion ? undefined : { transitionDelay: `${i * 150}ms` }
                }
              >
                <div className="mb-4">
                  <StepIcon index={i} size="sm" />
                </div>
                <div className="max-w-[17rem]">
                  <StepText index={i} align="center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
