interface HeroSectionProps {
  title: string
  banglaTitle: string
  subtitle: string
  mascotSrc: string
  ctaText: string
  ctaHref: string
}

export function HeroSection({ title, banglaTitle, subtitle, mascotSrc, ctaText, ctaHref }: HeroSectionProps) {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h1 className="text-display-xl text-navy mb-2">{title}</h1>
          <p className="text-heading-md text-body-muted mb-4">{banglaTitle}</p>
          <p className="text-body-lg text-body mb-8">{subtitle}</p>
          <a href={ctaHref} className="btn-primary inline-block">
            {ctaText}
          </a>
        </div>
        <div className="shrink-0">
          <img src={mascotSrc} alt="Pandi mascot" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96" />
        </div>
      </div>
    </section>
  )
}
