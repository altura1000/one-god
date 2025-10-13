'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Globe, Mail, ArrowRight } from "lucide-react"
import Image from "next/image";
import Cards from "./Articles";

import ContactForm from "./contactForm";

import Link from "next/link";

const IS_PRODUCTION = false;
const BASE = IS_PRODUCTION ? "/one-god" : "";

// onClick={() => handleScroll("mission")}

export default function Main() {
  const handleScroll = (id : string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const targetY = target.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const duration = 1000; // 1 second
  const startTime = performance.now();

  const easeInOutQuad = (t : any) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animate = (currentTime : any) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, startY + (targetY - startY) * eased);
    if (elapsed < duration) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};



  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
             <Image
              src = {`${BASE}/logo.png`}
              alt="One God logo"
              width={32}          
              height={32}
              className="h-25 w-25"  // אפשר גם לשלוט דרך Tailwind
            />
            <span className="text-xl font-bold text-green-600">One God</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#mission"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Mission
            </a>
            <a
              href="#news"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              News
            </a>
            <a
              href="#join"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Join Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link href="/support" target="_blank" rel="noopener noreferrer">
              Support
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      {/*<section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">*/}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <Image
          // src="one-god/rabbie.png"
          src={`${BASE}/rabbie.png`}
          alt="Background"
          fill   // makes it cover the section
          className="object-cover opacity-50" // object-cover cover + opacity
          priority
        />
        
        <div className="relative flex items-center justify-center min-h-screen bg-cover bg-cente">

          

          <div className="max-w-4xl mx-auto text-center space-y-8 ">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
              One God, One Purpose, United Since 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-primary">One God</span>, One Voice.
              <br />
              United for <span className="text-accent">Freedom</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Jews and Christians united under One God, defending our shared values of freedom, democracy, and
              human dignity. Together, we stand against extremist threats that seek to divide our communities and
              undermine our way of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
                onClick={() => handleScroll("contact")}
                // contact
              >
                Join Our Alliance
                <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                onClick={() => handleScroll("mission")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
              >
                Our Shared Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-muted/30 relative flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Sacred Mission Under One God</h2>
              <p className="text-xl text-muted-foreground text-balance">
                 Jews and Christians unite to protect the pillars of
                democracy and human dignity against those who seek to destroy our communities through hatred and
                extremism.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {/* <Shield className="h-8 w-8 text-primary" /> --primary: oklch(0.55 0.15 160); */}
                  <Image
                    src="/wakeup.png"
                    alt="Wake Up Icon"
                    width={62}  // מתאם ל-h-8 (8*4px ב-Tailwind)
                    height={62} // מתאם ל-w-8
                    className="text-primary" // אם רוצים צבע כמו אייקון הקודם (יכול להיות שלא ישפיע על תמונה רגילה)
                  />
                  
                  </div>
                  <CardTitle className="text-xl">Defending All Faith Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Protesting against attacks on synagogues and churches from extremists, while advocating for the right to worship the One God freely and safely.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Promoting Peace & Tolerance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Advocating for peaceful coexistence and mutual respect among all peoples while supporting democratic
                    values and territorial integrity against terrorist threats worldwide.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Interfaith Unity Against Hate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Building bridges between Jewish and Christian communities to counter antisemitism,
                    religious persecution, and radical ideologies.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News Section - relative flex items-center justify-center min-h-screen bg-cover bg-center */}
      <section id="news" className="py-20 relative flex items-center justify-center">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Latest Updates</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Stay informed about our interfaith efforts and global solidarity initiatives across Jewish and Christian
                
              </p>
            </div>


             <Cards BASE = {BASE} />

          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-primary/5 relative flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Stand With Us Under One God</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Whether Jewish or Christian, your voice strengthens our shared commitment to freedom and
                democracy. United under One God, we are unstoppable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 ">
              <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Fund critical operations, humanitarian aid, and advocacy campaigns worldwide.
                  </CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/support" target="_blank" rel="noopener noreferrer">
                      Make a Support
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Join Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Join our global network of activists, organizers, and community leaders.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => handleScroll("contact")}
                  >
                    Get Involved
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative flex items-center justify-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Join Our Interfaith Alliance</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Ready to stand together? Connect with fellow believers from Jewish and Christian.
                committed to defending our shared values under One God.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-muted-foreground">unitedonegod@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
                  
                  {/*
                  <h3 className="font-semibold text-lg mb-3">Community Safety Hotline</h3>
                  <p className="text-muted-foreground mb-4">
                    If your synagogue or church community is facing threats or harassment, contact our 24/7
                    interfaith response team for immediate support and resources.
                  </p>
                  <Button
                    variant="outline"
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    Emergency Support
                  </Button>

                  */}


                </div>
              </div>

              <ContactForm/>

             
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12 relative flex items-center justify-center">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  
                  {/*<Shield className="h-6 w-6 text-primary" />*/}
                  
                  <span className="font-bold text-lg text-green-600">One God</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jews and Christians united under One God, defending our shared heritage of freedom,
                  democracy, and human dignity against all forms of extremism.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#news" className="text-muted-foreground hover:text-foreground transition-colors">
                      Latest News
                    </a>
                  </li>
                  <li>
                    <a href="#join" className="text-muted-foreground hover:text-foreground transition-colors">
                      Get Involved
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Resources</h4>
                  <Link href="/policy" target="_blank" rel="noopener noreferrer">
                    Policy
                  </Link>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Support Our Cause</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/support" target="_blank" rel="noopener noreferrer">
                      Support Today
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground">Your contribution helps us defend freedom worldwide.</p>
                </div>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © All rights reserved. One God, one purpose, united since 2025.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}