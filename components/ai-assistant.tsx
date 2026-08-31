"use client";

import { useEffect, useState } from "react";
import {
  BrainCircuit,
  FileText,
  Bot,
  ShieldCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatStep {
  kind: "system" | "message" | "status";
  side?: "left" | "right";
  label?: string;
  text: string;
  list?: string[];
}

interface Flow {
  id: string;
  channel: string;
  summary: string;
  steps: ChatStep[];
}

const FLOWS: Flow[] = [
  {
    id: "call-centre",
    channel: "3999 Call Centre",
    summary:
      "A caller asks for a nearby pharmacy. The AI knowledge base returns four results in 0.3 seconds and the agent reads them back to the caller, resolving the query in under 8 seconds.",
    steps: [
      { kind: "system", text: "Caller connects to 3999" },
      { kind: "message", side: "left", label: "Caller", text: "I need a pharmacy near Wilberforce" },
      { kind: "system", text: "Querying AI knowledge base" },
      {
        kind: "message",
        side: "right",
        label: "AI",
        text: "Found 4 results in 0.3s",
        list: [
          "PharmaPlus Wilberforce: 076 123 456",
          "Hill Station Pharmacy: 078 234 567",
          "Freetown Central Pharma: Open 24 hours",
        ],
      },
      { kind: "message", side: "right", label: "Agent", text: "Reading results to the caller" },
      { kind: "status", text: "Query resolved in under 8 seconds" },
    ],
  },
  {
    id: "whatsapp",
    channel: "WhatsApp Business",
    summary:
      "A customer messages the WhatsApp chatbot asking about delivery areas. The AI answers instantly from the business FAQ and the chatbot replies with delivery zones and estimated time, resolving the query in under 2 seconds.",
    steps: [
      { kind: "system", text: "Customer messages WhatsApp Business" },
      { kind: "message", side: "left", label: "Customer", text: "Do you deliver to Aberdeen?" },
      { kind: "system", text: "Querying AI knowledge base" },
      {
        kind: "message",
        side: "right",
        label: "AI",
        text: "Found answer in FAQ database",
        list: [
          "Delivery available in Aberdeen, Freetown, and Lumley",
          "Estimated delivery time: 30 to 45 minutes",
        ],
      },
      { kind: "message", side: "right", label: "Bot", text: "Sending delivery details to customer" },
      { kind: "status", text: "Query resolved in under 2 seconds" },
    ],
  },
  {
    id: "website-chat",
    channel: "Website Chat Widget",
    summary:
      "A website visitor asks about opening hours through the embedded chatbot. The AI finds the answer in one search and the chatbot displays the business hours instantly.",
    steps: [
      { kind: "system", text: "Visitor opens website chat widget" },
      { kind: "message", side: "left", label: "Visitor", text: "What are your opening hours?" },
      { kind: "system", text: "Querying AI knowledge base" },
      {
        kind: "message",
        side: "right",
        label: "AI",
        text: "Found 1 result in 0.2s",
        list: ["Monday to Friday, 8:00 AM to 5:00 PM"],
      },
      { kind: "message", side: "right", label: "Bot", text: "Displaying hours in chat widget" },
      { kind: "status", text: "Query resolved instantly" },
    ],
  },
  {
    id: "document-sync",
    channel: "Knowledge Base",
    summary:
      "A business uploads a new price list document. The pipeline parses and indexes it automatically, syncing the updated knowledge base across the call centre, WhatsApp, and website channels.",
    steps: [
      { kind: "system", text: "Business uploads new document" },
      { kind: "message", side: "left", label: "Admin", text: 'Uploaded "Service Price List.pdf"' },
      { kind: "system", text: "Parsing and indexing document" },
      {
        kind: "message",
        side: "right",
        label: "AI",
        text: "Extracted 42 sections and indexed successfully",
        list: [
          "Product pricing updated in knowledge base",
          "Available to agents and chatbots instantly",
        ],
      },
      { kind: "message", side: "right", label: "System", text: "Syncing knowledge base across all channels" },
      { kind: "status", text: "Indexed and synced in 4.1 seconds" },
    ],
  },
];

const FOOTER = "Powered by Mistral 7B · Qdrant · Ollama · Infrastructure by KNS, Sierra Leone";

const TYPING_MS = 700;
const SYSTEM_PAUSE_MS = 750;
const MESSAGE_PAUSE_MS = 1300;
const LIST_ITEM_BONUS_MS = 320;
const STATUS_PAUSE_MS = 2800;

function useChatFlow(flows: Flow[]) {
  const [flowIndex, setFlowIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const flow = flows[flowIndex];
  const step = flow.steps[stepIndex];

  useEffect(() => {
    if (reducedMotion) return;

    if (!step) {
      const timer = setTimeout(() => {
        setFlowIndex((f) => (f + 1) % flows.length);
        setStepIndex(0);
        setTyping(true);
      }, STATUS_PAUSE_MS);
      return () => clearTimeout(timer);
    }

    if (step.kind === "message" && typing) {
      const timer = setTimeout(() => setTyping(false), TYPING_MS);
      return () => clearTimeout(timer);
    }

    const pause =
      step.kind === "system"
        ? SYSTEM_PAUSE_MS
        : step.kind === "status"
          ? STATUS_PAUSE_MS
          : MESSAGE_PAUSE_MS + (step.list?.length ?? 0) * LIST_ITEM_BONUS_MS;

    const timer = setTimeout(() => {
      setStepIndex((i) => i + 1);
      setTyping(true);
    }, pause);
    return () => clearTimeout(timer);
  }, [flowIndex, stepIndex, typing, step, flows.length, reducedMotion]);

  const isTypingCurrent = !reducedMotion && !!step && step.kind === "message" && typing;
  const revealedSteps = reducedMotion
    ? flow.steps
    : flow.steps.slice(0, isTypingCurrent ? stepIndex : stepIndex + 1);

  return { flow, flowIndex, revealedSteps, typingStep: isTypingCurrent ? step : null };
}

function TypingBubble({ side }: { side: "left" | "right" }) {
  return (
    <div className={cn("flex animate-fade-in", side === "left" ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "rounded-2xl px-4 py-3.5",
          side === "left"
            ? "bg-white/10 rounded-bl-sm"
            : "bg-primary/15 border border-primary/25 rounded-br-sm"
        )}
      >
        <div className="flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

function ChatStepDisplay({ step }: { step: ChatStep }) {
  if (step.kind === "system") {
    return (
      <div className="flex justify-center animate-fade-in">
        <span className="text-[11px] text-white/45 bg-white/5 rounded-full px-3 py-1 text-center">
          {step.text}
        </span>
      </div>
    );
  }

  if (step.kind === "status") {
    return (
      <div className="flex justify-center pt-1 animate-fade-in">
        <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3.5 py-1.5">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
          {step.text}
        </span>
      </div>
    );
  }

  const side = step.side ?? "left";
  return (
    <div className={cn("flex animate-fade-in", side === "left" ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[82%] rounded-2xl px-4 py-2.5",
          side === "left"
            ? "bg-white/10 text-white rounded-bl-sm"
            : "bg-primary/15 border border-primary/25 text-white rounded-br-sm"
        )}
      >
        <p className="text-[11px] font-semibold text-white/60 mb-0.5">{step.label}</p>
        <p className="text-sm leading-relaxed">{step.text}</p>
        {step.list && (
          <ul className="mt-2 space-y-1 border-t border-white/10 pt-2">
            {step.list.map((item) => (
              <li key={item} className="text-xs text-white/80 flex items-start gap-1.5">
                <span className="text-primary shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BrainCircuit,
    title: "Intelligent Knowledge Retrieval",
    description:
      "Semantic search finds the right answer in real time, even when callers don't use exact keywords.",
  },
  {
    icon: FileText,
    title: "Document Ingestion Pipeline",
    description:
      "Businesses upload PDFs, Word documents, spreadsheets, or website URLs. Content is automatically indexed into the AI knowledge base.",
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    description:
      "Deploy an AI chatbot on your website or WhatsApp. It handles customer queries around the clock using your business knowledge base.",
  },
  {
    icon: ShieldCheck,
    title: "Private & On Premises",
    description:
      "All AI runs on local infrastructure in Sierra Leone. No data leaves the country, on open source, enterprise grade models.",
  },
];

export function AIAssistant() {
  const { flow, flowIndex, revealedSteps, typingStep } = useChatFlow(FLOWS);

  return (
    <section id="ai-assistant" className="section-padding bg-black scroll-mt-20 md:scroll-mt-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 heading-accent">
              AI Knowledge Base
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Every call to <span className="font-bold text-primary">3999</span>{" "}
              is handled by a trained agent backed by our AI engine, an
              intelligent knowledge base holding business information, FAQs,
              products, and service data.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <feature.icon
                    className="h-5 w-5 text-primary mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-white text-sm mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full opacity-40"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl border border-white/10 bg-[#0b0b0c] shadow-2xl overflow-hidden flex flex-col">
              <div className="flex flex-col items-center text-center gap-1 px-6 pt-6 pb-4 border-b border-white/10">
                <div className="h-10 w-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mb-1">
                  <Bot className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-white">Wi Sabi AI Agent</p>
                <p className="text-xs text-white/50">{flow.channel}</p>
              </div>

              <div
                className="p-5 md:p-6 flex flex-col justify-center gap-3 min-h-[360px] sm:min-h-[380px]"
                role="img"
                aria-label={`Animated illustration of an AI assisted conversation over ${flow.channel}. ${flow.summary}`}
              >
                {revealedSteps.map((step, i) => (
                  <ChatStepDisplay key={i} step={step} />
                ))}
                {typingStep && <TypingBubble side={typingStep.side ?? "left"} />}
              </div>

              <div className="px-5 md:px-6 pb-4 pt-3 border-t border-white/10 text-center">
                <p className="text-[11px] text-white/30">{FOOTER}</p>
              </div>

              <div className="flex items-center justify-center gap-1.5 pb-5">
                {FLOWS.map((f, i) => (
                  <span
                    key={f.id}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      i === flowIndex ? "w-6 bg-primary" : "w-1.5 bg-white/15"
                    )}
                    aria-hidden="true"
                  />
                ))}
                <span className="sr-only">
                  Showing flow {flowIndex + 1} of {FLOWS.length}: {flow.channel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
