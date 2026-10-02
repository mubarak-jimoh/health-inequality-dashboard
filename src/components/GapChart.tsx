import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from "recharts"

import type { Bar as BarData } from "../data"

type GapChartProps = {
  title: string
  data: BarData[]
  unit: string
  // The headline number, so the point of the chart is readable without it
  summary: string
  domain?: [number, number]
  ticks?: number[]
}

export default function GapChart({ title, data, unit, summary, domain, ticks }: GapChartProps) {

  return (
    <figure className="bg-white p-6 rounded-lg shadow min-w-0">

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

      <p className="text-2xl font-bold text-red-600 mb-4">
        {summary}
      </p>

      {/* The chart is decorative for screen readers: the table below has the same data */}
      <div className="h-64 min-w-0 overflow-hidden" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20 }}>
            <XAxis dataKey="label" tick={{ fontSize: 12 }} />
            <YAxis domain={domain} ticks={ticks} unit={unit} width={64} />
            <Tooltip formatter={(value) => `${value}${unit}`} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry) => (
                <Cell
                  key={entry.label}
                  fill={entry.highlight ? "#dc2626" : "#2563eb"}
                />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(value) => `${value}${unit}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table className="sr-only">
        <caption>{title}</caption>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.label}>
              <th scope="row">{entry.label}</th>
              <td>{entry.value}{unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </figure>
  )
}
