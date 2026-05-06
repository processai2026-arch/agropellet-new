import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "@/components/CountUp";
import { useSanity } from "@/hooks/useSanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/imageBuilder";
import type { HeroData } from "@/lib/sanityTypes";
import heroBg from "@/assets/hero-bg.webp";

// ── Fallback data shown while CMS is loading or unavailable ──────────────────
const FALLBACK: Required<HeroData> = {
  badge: "India's Trusted Biomass Supply Chain Partner",
  title: "Turning Agricultural Waste into",
  titleHighlight: "Industrial Energy",
  subtitle:
    "Smart supply chains. Sustainable energy. We help industries reduce fuel costs and increase profitability with reliable biomass solutions.",
  ctaPrimary: "Get a Free Quote",
  ctaPhone: "+91 9940099060",
  image: null as unknown as HeroData["image"],
  stats: [
    { value: 500, suffix: "+", label: "Tons/Month Supplied" },
    { value: 30, suffix: "%", label: "Avg. Cost Savings" },
    { value: 50, suffix: "+", label: "Industry Clients" },
    { value: 100, suffix: "%", label: "Sustainable Fuel" },
  ],
};

const HeroSection = () => {
  const { data, loading } = useSanity<HeroData>(heroQuery);

  const hero = {
    badge: data?.badge ?? FALLBACK.badge,
    title: data?.title ?? FALLBACK.title,
    titleHighlight: data?.titleHighlight ?? FALLBACK.titleHighlight,
    subtitle: data?.subtitle ?? FALLBACK.subtitle,
    ctaPrimary: data?.ctaPrimary ?? FALLBACK.ctaPrimary,
    ctaPhone: data?.ctaPhone ?? FALLBACK.ctaPhone,
    stats: data?.stats?.length ? data.stats : FALLBACK.stats,
  };

  // Build the phone href (strip spaces/dashes)
  const phoneHref = `tel:+${hero.ctaPhone.replace(/\D/g, "")}`;

  // Background image: prefer Sanity CDN only when an asset ref exists
  const hasSanityImage = !!data?.image?.asset;
  const bgStyle = hasSanityImage
    ? {
        backgroundImage: `url(${urlFor(data!.image!).width(1920).quality(80).url()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {hasSanityImage ? (
        <div className="absolute inset-0" style={bgStyle} role="img" aria-label="Biomass field" />
      ) : (
        <picture>
          {/* fallback to bundled asset */}
          <img
            src={heroBg}
            alt="Biomass field with industrial plant"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      )}

      <div className="absolute inset-0 gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />

      {/* Loading shimmer */}
      {loading && (
        <div className="absolute inset-0 bg-black/30 animate-pulse z-5" />
      )}

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary-foreground border border-primary/30 mb-6">
          {hero.badge}
        </span>

        <h1
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6"
          style={{ color: "hsl(0 0% 100%)" }}
        >
          {hero.title}{" "}
          <span className="text-gradient-eco">{hero.titleHighlight}</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-medium px-2"
          style={{ color: "hsl(0 0% 85%)" }}
        >
          {hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-xl shadow-lg"
            >
              {hero.ctaPrimary} <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
          <a href={phoneHref}>
            <Button
              size="lg"
              className="gap-2 text-base px-8 py-6 rounded-xl bg-background/10 backdrop-blur-sm border border-primary/40 text-white hover:bg-primary/20 hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span className="hidden sm:inline">Call </span>
              {hero.ctaPhone}
            </Button>
          </a>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient-eco">
                <CountUp value={stat.value} suffix={stat.suffix} duration={1.8} />
              </div>
              <div className="text-sm mt-1" style={{ color: "hsl(0 0% 70%)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;