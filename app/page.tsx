import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Globe, Mail, MessageCircle, ArrowRight, Star } from "lucide-react"
import Image from "next/image";



const IS_PRODUCTION = true;
const BASE = IS_PRODUCTION ? "/one-god" : "";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Unity Alliance</span>
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
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Donate Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/*
      <div className="absolute inset-0 bg-[url('/rabbie.png')] bg-cover bg-center opacity-45"></div>
       */}
        <Image
          // src="one-god/rabbie.png"
          src={`${BASE}/rabbie.png`}
          alt="Background"
          fill   // makes it cover the section
          className="object-cover opacity-50" // cover + opacity
          priority
        />
        
        <div className="relative container py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
              >
                Join Our Alliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
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
      <section id="mission" className="py-20 bg-muted/30">
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
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Defending All Faith Communities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    Protecting synagogues and churches from extremist attacks while safeguarding our
                    fundamental right to worship the One God freely and safely.
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

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Latest Updates</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Stay informed about our interfaith efforts and global solidarity initiatives across Jewish and Christian
                
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                {/*<div className="aspect-video bg-muted rounded-t-lg bg-[url('/three-faith-prayer-unity.png')] bg-cover bg-center"></div>*/}
                <div
                  className="aspect-video bg-muted rounded-t-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${BASE}/america.png)` }}
                />  
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    March 15, 2024
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    America at a Crossroads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Polarization is tearing at our shared story. See how One God is rebuilding unity around liberty, justice, and shared responsibility.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                {/*<div className="aspect-video bg-muted rounded-t-lg bg-[url('/interfaith-community-cooperation.png')] bg-cover bg-center"></div>*/}
                
                <div
                  className="aspect-video bg-muted rounded-t-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${BASE}/australia.png)` }}
                  />
                
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    March 10, 2024
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    Unity in Australia: Jews & Christians Stand Together
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Interfaith partnerships are strengthening Australia’s democratic identity and community safety in the face of rising extremism and hate.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                {/*  <div className="aspect-video bg-muted rounded-t-lg bg-[url('/one-god/diverse-youth-leadership.png')] bg-cover bg-center"></div>*/}

               <div
                  className="aspect-video bg-muted rounded-t-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${BASE}/europe.png)` }}
                />

                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    March 5, 2024
                  </Badge>
                  <CardTitle className="text-lg leading-tight">Abrahamic Youth Leadership Summit Launches</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Young Jewish and Christian leaders unite to combat hate speech and build bridges between
                    communities in 12 countries, emphasizing our shared heritage under One God.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Stand With Us Under One God</h2>
              <p className="text-xl text-muted-foreground text-balance">
                Whether Jewish or Christian, your voice strengthens our shared commitment to freedom and
                democracy. United under One God, we are unstoppable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Donate</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Fund critical operations, humanitarian aid, and advocacy campaigns worldwide.
                  </CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Make a Donation
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Volunteer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Join our global network of activists, organizers, and community leaders.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Get Involved
                  </Button>
                </CardContent>
              </Card>


            {/*
              <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-secondary/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Advocate</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    Amplify our message through social media, events, and community outreach.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    Spread the Word
                  </Button>
                </CardContent>
              </Card>
              */}

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
                      <p className="text-muted-foreground">contact@unityalliance.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-muted/50 rounded-lg">
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
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how you'd like to get involved..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Unity Alliance</span>
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
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Annual Reports
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Policy Papers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Educational Materials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Support Our Cause</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Donate Today
                  </Button>
                  <p className="text-xs text-muted-foreground">Your contribution helps us defend freedom worldwide.</p>
                </div>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Unity Alliance. All rights reserved. One God, one purpose, united since 2025.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
