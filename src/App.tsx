import Nav from "./components/Nav"
import Section from "./components/Section"
import GapChart from "./components/GapChart"

import {
  education,
  gap,
  lifeExpectancy,
  longTermIllness,
  priorityAreas,
  sources
} from "./data"

const sections = [
  { id: "overview", title: "Overview" },
  { id: "health", title: "Health Outcomes" },
  { id: "education", title: "Education" },
  { id: "inclusion", title: "Inclusion Health" },
  { id: "priorities", title: "Priority Areas" },
  { id: "sources", title: "Sources" }
]

function App() {

  return (
    <div className="bg-slate-50 min-h-screen">

      <Nav sections={sections} />

      <main className="max-w-6xl mx-auto p-6">

        {/* OVERVIEW */}

        <Section id="overview" title="Health inequality in Medway and Kent">

          <p className="text-gray-700 mb-6 max-w-3xl">
            The UK experiences major health inequality driven by deprivation,
            education gaps and access to healthcare services. The Index of
            Multiple Deprivation (IMD) helps identify the areas most affected
            by these inequalities. This dashboard brings together three gaps
            that show how much where you live, and who you are, changes your
            chances of a long and healthy life.
          </p>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-lg shadow">
              <dt className="text-gray-600">Life expectancy gap, four miles apart</dt>
              <dd className="text-4xl font-bold text-slate-900">{gap(lifeExpectancy)} years</dd>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <dt className="text-gray-600">Attainment gap for SEN support pupils</dt>
              <dd className="text-4xl font-bold text-slate-900">{gap(education)} points</dd>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <dt className="text-gray-600">Long-term illness gap for Traveller communities</dt>
              <dd className="text-4xl font-bold text-slate-900">{gap(longTermIllness)} points</dd>
            </div>

          </dl>

        </Section>

        {/* HEALTH OUTCOMES */}

        <Section id="health" title="Health Outcomes">

          <p className="text-gray-700 mb-6 max-w-3xl">
            Communities facing deprivation experience higher rates of
            chronic illness and lower healthy life expectancy. A man in
            Cuxton can expect to live to 83.5. Four miles away in Chatham,
            it is 73.4.
          </p>

          <GapChart
            title="Life expectancy for men (Medway)"
            summary={`${gap(lifeExpectancy)} years shorter in Chatham`}
            data={lifeExpectancy}
            unit=" yrs"
            domain={[60, 90]}
            ticks={[60, 70, 80, 90]}
          />

        </Section>

        {/* EDUCATION */}

        <Section id="education" title="Education">

          <p className="text-gray-700 mb-6 max-w-3xl">
            Education strongly influences long-term health outcomes.
            In Medway only 26% of pupils with SEN support achieve the
            expected Key Stage 2 standard, significantly below the
            national average for all pupils.
          </p>

          <GapChart
            title="Pupils meeting the expected Key Stage 2 standard"
            summary={`${gap(education)} percentage points behind`}
            data={education}
            unit="%"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
          />

        </Section>

        {/* INCLUSION HEALTH */}

        <Section id="inclusion" title="Inclusion Health">

          <p className="text-gray-700 mb-6 max-w-3xl">
            Inclusion health groups such as prisoners, migrants and
            Gypsy, Roma and Traveller communities often experience
            significantly worse health outcomes. For example 42% of
            Gypsy, Roma and Traveller individuals report long-term
            illness compared with around 18% of the wider population.
          </p>

          <GapChart
            title="People with a long-term condition"
            summary={`${gap(longTermIllness)} percentage points higher`}
            data={longTermIllness}
            unit="%"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
          />

          <div className="bg-white p-6 rounded-lg shadow mt-6">

            <h3 className="font-semibold text-slate-800 mb-2">
              What helps
            </h3>

            <p className="text-gray-700 max-w-3xl">
              Cultural barriers, mistrust of healthcare systems and
              difficulty accessing services can reduce engagement
              with primary care. Community-led initiatives such as
              screening programmes in trusted locations like barbershops
              and churches have been shown to improve engagement and
              early diagnosis.
            </p>

          </div>

        </Section>

        {/* PRIORITY INTERVENTION AREAS */}

        <Section id="priorities" title="Priority Intervention Areas">

          <p className="text-gray-700 mb-6 max-w-3xl">
            Data analysis highlights specific areas where targeted
            interventions could significantly reduce health inequality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {priorityAreas.map((area) => (
              <div
                key={area.name}
                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow"
              >

                <h3 className="font-semibold text-red-800">
                  {area.name}
                </h3>

                <p className="text-gray-700">
                  {area.reason}
                </p>

              </div>
            ))}

          </div>

        </Section>

        {/* SOURCES */}

        <Section id="sources" title="Sources">

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {sources.map((source) => (
              <li key={source.id}>
                <a className="text-blue-700 underline" href={source.url}>
                  {source.label}
                </a>
              </li>
            ))}
          </ul>

        </Section>

      </main>

    </div>
  )
}

export default App
