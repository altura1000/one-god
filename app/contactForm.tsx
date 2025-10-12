'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
          <CardDescription>We'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <br />
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
              <Input
                id="firstName"
                value={firstName}
                className="border-2 border-primary focus:border-primary focus:ring-0 rounded-md"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
              <Input
                id="lastName"
                className="border-2 border-primary focus:border-primary focus:ring-0 rounded-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              className="border-2 border-primary focus:border-primary focus:ring-0 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea
              id="message"
              placeholder="Tell us how you'd like to get involved..."
              
              className="min-h-[120px] border-2 border-primary focus:border-primary focus:ring-0 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && <p className="text-green-500 mt-2">✅ Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 mt-2">❌ Failed to send message. Try again later.</p>}
        </CardContent>
      </form>
    </Card>
  );
}
