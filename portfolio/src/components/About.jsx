import { education } from '../data/resumeData';

function About() {
  return (
    <section id="about" className="mb-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 lg:hidden">
        About
      </h2>

      <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
        <p>
          I'm a software engineer who really loves building — whether that's projects or
          products, I'm a builder at heart. I'm currently at{' '}
          <span className="text-slate-900 font-medium">Sweep Digital Inc.</span>, where I
          engineer a cross-platform analytics platform powered by an event-driven RAG
          system, turning tens of thousands of raw browsing events into structured,
          actionable insights.
        </p>

        <p>
          I'm finishing a{' '}
          <span className="text-slate-900 font-medium">
            M.S. in Computer Science at California State University, Fullerton
          </span>{' '}
          (GPA: 3.87) and hold a{' '}
          <span className="text-slate-900 font-medium">
            B.S. in Computer Science and Information Engineering from National Central
            University
          </span>{' '}
          (GPA: 3.67). Along the way I've co-founded a HealthTech startup, researched AI at
          Hon Hai Research Institute (Foxconn), and written CUDA kernels that made access
          control policy analysis 1400x faster.
        </p>

        <p>
          I love startups, because they let me actually build things and do impactful work —
          and the fast pace pushes me toward creative solutions that meet real-world
          requirements. I also genuinely enjoy talking to people: not just teammates, but
          customers too, and I'm just as interested in the business side of what we're
          building.
        </p>
      </div>

      {/* Education */}
      <div className="mt-12 space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="group">
            <p className="text-sm font-semibold text-slate-900">{edu.school}</p>
            <p className="text-sm text-stone-500 mt-0.5">
              {edu.degree} · GPA: {edu.gpa}
            </p>
            {edu.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.highlights.map((h, j) => (
                  <span
                    key={j}
                    className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
