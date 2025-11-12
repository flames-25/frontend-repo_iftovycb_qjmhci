import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function ProjectsGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects?featured=true&limit=12`);
        const data = await res.json();
        setProjects(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black/40 via-black/60 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Get in touch →</a>
        </div>
        {loading ? (
          <p className="mt-6 text-white/70">Loading projects...</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
