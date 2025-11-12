export default function ProjectCard({ project }) {
  return (
    <a
      href={project.case_study_url || '#'}
      target={project.case_study_url ? '_blank' : undefined}
      rel={project.case_study_url ? 'noopener noreferrer' : undefined}
      className="group block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-white/20 hover:bg-white/10 transition-colors"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20">
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-white/60 text-sm">No image</div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          {project.year && <span className="text-white/60 text-xs">{project.year}</span>}
        </div>
        <p className="mt-1 text-white/70 text-sm line-clamp-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags?.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
