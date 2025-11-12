import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md/0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-white">Designer</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="">
        <Hero />
        <div id="work"><ProjectsGrid /></div>
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Designer — All rights reserved.
      </footer>
    </div>
  );
}

export default App
