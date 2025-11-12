import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 pointer-events-none flex items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent">
            Graphic Designer Portfolio
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Playful, modern, and interactive. Explore selected works in branding, illustration, and digital products.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </section>
  );
}
