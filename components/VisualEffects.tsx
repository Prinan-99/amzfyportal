
import React from 'react';

const VisualEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-emerald-600/10 blur-[100px] rounded-full animate-pulse [animation-delay:4s]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default VisualEffects;
