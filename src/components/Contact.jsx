import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Let’s create something great</h2>
        <p className="mt-2 text-white/70">Tell me about your project and I’ll get back within 24 hours.</p>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input name="company" placeholder="Company (optional)" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input name="budget" placeholder="Budget (optional)" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <textarea name="message" required rows="5" placeholder="Project details" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button disabled={status==='loading'} className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 font-medium text-white hover:opacity-90 transition disabled:opacity-50">
            {status==='loading' ? 'Sending...' : 'Send message'}
          </button>
          {status==='success' && <p className="text-emerald-400">Thanks! I’ll be in touch.</p>}
          {status==='error' && <p className="text-rose-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
