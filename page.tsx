"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, CheckCircle2, Users, ListChecks, DollarSign, MapPin, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedGradient } from "@/components/animated-gradient"
import { MouseFollower } from "@/components/mouse-follower"

export default function LandingPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const heroRef = useRef(null)

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedGradient />

      <MouseFollower />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-serif text-primary">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
              <Heart className="h-7 w-7 fill-primary" />
            </motion.div>
            Forever Yours
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost">Sign In</Button>
              </motion.div>
            </Link>
            <Link href="/signup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Get Started
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src="/images/design-mode/background%201%20page%20it%20project.webp"
            alt="Beautiful wedding ceremony"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 py-24 text-center md:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span>Your Dream Wedding Starts Here</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-5xl font-serif leading-tight text-foreground md:text-6xl lg:text-7xl text-balance"
            >
              Plan Your Dream Wedding with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Grace & Ease
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10 text-lg text-muted-foreground md:text-xl leading-relaxed text-pretty max-w-2xl mx-auto"
            >
              Everything you need to organize your perfect day in one beautiful place. From guest lists to budgets,
              vendors to inspiration boards—we've got you covered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/signup">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Heart className="h-5 w-5" />
                    Start Planning My Wedding
                  </Button>
                </motion.div>
              </Link>
              <Link href="/login">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-background/50 backdrop-blur text-lg px-8 py-6"
                  >
                    Sign In
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              Free forever • No credit card required • Join 10,000+ happy couples
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* ...rest of file unchanged ... */}
    </div>
  )
}
