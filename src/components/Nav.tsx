export type NavSection = {
  id: string
  title: string
}

type NavProps = {
  sections: NavSection[]
}

export default function Nav({ sections }: NavProps) {

  return (
    <nav
      className="bg-slate-900 text-white p-4 sticky top-0 shadow z-50"
      aria-label="Sections"
    >

      <div className="max-w-6xl mx-auto flex flex-wrap gap-x-6 gap-y-2 justify-between items-center">

        <p className="font-bold text-lg">
          Health Inequality Dashboard
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">

          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:text-blue-300 underline-offset-4 hover:underline"
            >
              {section.title}
            </a>
          ))}

        </div>

      </div>

    </nav>
  )
}
