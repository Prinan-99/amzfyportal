
import React from 'react';
import { PORTAL_OPTIONS } from './constants';
import PortalCard from './components/PortalCard';
import VisualEffects from './components/VisualEffects';
import { Layers, Zap, Globe, Github, Linkedin } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Saran V A",
    github: "https://github.com/SARAN006-pro",
    linkedin: "https://www.linkedin.com/in/saran-v-a-/"
  },
  {
    name: "Sowmiya G",
    github: "https://github.com/sowmiya1511-ai",
    linkedin: "https://www.linkedin.com/in/sowmiya-gunasekaran-805999363/"
  },
  {
    name: "Pria Nandhini M A",
    github: "https://github.com/Prinan-99",
    linkedin: "https://www.linkedin.com/in/prianandhinii/"
  }
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <VisualEffects />
      
      <main className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Welcome to Amzify</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Unified <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Commerce</span> Experience
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl">
            The next generation e-commerce ecosystem bridging the gap between discovery and delivery.
          </p>
        </div>

        {/* Project Overview Section */}
        <section className="mb-24 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-sm">
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Project Overview
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  <strong className="text-white">Amzify</strong> is a high-performance, multi-tenant e-commerce architecture designed to streamline the lifecycle of online retail. Unlike traditional platforms, Amzify unifies three distinct operational pillars into a single, cohesive ecosystem.
                </p>
                <p>
                  Our vision was to create a "frictionless bridge" where shoppers enjoy a cinematic browsing experience, sellers leverage data-driven growth tools, and administrators maintain granular control over platform health—all through a unified design language and lightning-fast infrastructure.
                </p>
              </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 border border-white/5 p-6 hover:bg-white/[0.07] transition-colors">
                <Layers className="text-blue-400 mb-4" size={24} />
                <h4 className="font-semibold text-white mb-2">Micro-Frontend</h4>
                <p className="text-sm text-zinc-500">Decoupled panels ensuring independent scaling and specialized workflows.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-6 hover:bg-white/[0.07] transition-colors">
                <Zap className="text-indigo-400 mb-4" size={24} />
                <h4 className="font-semibold text-white mb-2">Real-time Sync</h4>
                <p className="text-sm text-zinc-500">Instant inventory and order updates across all three operational layers.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/5 p-6 hover:bg-white/[0.07] transition-colors sm:col-span-2">
                <div className="flex items-center gap-4">
                  <Globe className="text-emerald-400" size={24} />
                  <div>
                    <h4 className="font-semibold text-white">Global Scalability</h4>
                    <p className="text-sm text-zinc-500">Built on a cloud-native stack ready to handle millions of transactions per second.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
        </section>

        {/* Portal Options Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTAL_OPTIONS.map((option, idx) => (
            <PortalCard key={option.role} option={option} index={idx} />
          ))}
        </div>

        {/* Footer Info */}
        <footer className="mt-32 text-center pb-20">
          {/* Team Section */}
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8">Architected & Developed By</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="flex flex-col items-center group">
                  <span className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors duration-300 cursor-default mb-3">
                    {member.name}
                  </span>
                  <div className="flex gap-4">
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
                      title="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      title="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Amzify Ecosystem. Empowering Digital Entrepreneurs.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-xs font-medium text-zinc-600 uppercase tracking-tighter">
            <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Architecture</a>
            <a href="#" className="hover:text-blue-400 transition-colors">API Status</a>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flash {
          0% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }

        .group-active\\:animate-flash {
          animation: flash 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
