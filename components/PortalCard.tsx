
import React from 'react';
import { ShoppingBag, Store, ShieldCheck, ArrowRight } from 'lucide-react';
import { PortalOption } from '../types';

interface PortalCardProps {
  option: PortalOption;
  index: number;
}

const IconMap = {
  ShoppingBag,
  Store,
  ShieldCheck,
};

const PortalCard: React.FC<PortalCardProps> = ({ option, index }) => {
  const Icon = IconMap[option.icon as keyof typeof IconMap];

  return (
    <a
      href={option.link}
      className="group relative block w-full active:scale-[0.97] transition-transform duration-150 ease-out"
      style={{
        animation: `fadeInUp 0.6s ease-out forwards ${index * 0.15}s`,
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/50">
        {/* Click Flash Overlay */}
        <div className="absolute inset-0 z-30 bg-white/10 opacity-0 group-active:animate-flash pointer-events-none" />

        {/* Glow effect on hover */}
        <div className={`absolute -inset-1 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 bg-gradient-to-r ${option.color}`} />
        
        <div className="relative flex flex-col h-full">
          <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${option.color} text-white shadow-lg shadow-black/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
            <Icon size={28} />
          </div>

          <h3 className="mb-3 text-2xl font-bold tracking-tight text-white transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60">
            {option.title}
          </h3>
          
          <p className="mb-8 text-zinc-400 leading-relaxed transition-colors duration-500 group-hover:text-zinc-300">
            {option.description}
          </p>

          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white/70 transition-all duration-500 group-hover:gap-4 group-hover:text-white">
            Access Dashboard
            <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative corner element */}
        <div className={`absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${option.color} opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-40`} />
      </div>
    </a>
  );
};

export default PortalCard;
