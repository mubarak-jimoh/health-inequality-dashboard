type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {

  return (
    <section id={id} className="py-10 scroll-mt-28" aria-labelledby={`${id}-title`}>

      <h2
        id={`${id}-title`}
        className="text-2xl md:text-3xl font-bold text-slate-800 border-b pb-2 mb-6"
      >
        {title}
      </h2>

      {children}

    </section>
  )
}
