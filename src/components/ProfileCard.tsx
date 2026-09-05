import { useState } from 'react';

const SKILLS = ['Python', 'React', 'DevOps', 'SQL'];

export default function ProfileCard() {
  const [selected, setSelected] = useState<string[]>(['React']);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  function toggle(skill: string) {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  async function calcular() {
    setLoading(true);
    const res = await fetch(`/api/match?skills=${selected.join(',')}`);
    const data = await res.json();
    setScore(data.match_score);
    setLoading(false);
  }

  return (
    <div className="max-w-sm border-l-4 border-amber bg-white p-5 shadow-sm">
      <p className="font-mono text-xs text-sage">EGRESADO · DEMO</p>
      <h3 className="font-display text-lg mt-1 mb-3 text-ink">Carlos Mendoza</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {SKILLS.map((skill) => (
          <button
            key={skill}
            onClick={() => toggle(skill)}
            className={`font-mono text-xs px-2 py-1 border rounded ${
              selected.includes(skill)
                ? 'border-amber text-teal-deep bg-amber/10'
                : 'border-sage text-ink'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      <button
        onClick={calcular}
        disabled={loading}
        className="font-body text-sm font-medium bg-teal text-white px-4 py-2 rounded"
      >
        {loading ? 'Calculando…' : 'Calcular afinidad'}
      </button>

      {score !== null && (
        <p className="font-mono text-sm text-teal-deep mt-3">match_score: {score}%</p>
      )}
    </div>
  );
}
