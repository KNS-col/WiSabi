"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="bg-success/5 border border-success/20 rounded-xl p-8 text-center animate-fade-in"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="h-12 w-12 text-success mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="text-xl font-bold text-black mb-2">Message Sent</h3>
        <p className="text-dark-gray">
          Thank you. Your message has been received. Our team will get back to
          you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            className="mt-2"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-error mt-1" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            className="mt-2"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-error mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          className="mt-2"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-error mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          className="mt-2"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-error mt-1" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          className="mt-2"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-error mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-error" role="alert">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Spinner size="sm" className="border-white/40 border-t-white" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
