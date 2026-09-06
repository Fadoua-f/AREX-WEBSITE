import { useNav } from '@/context/NavContext';

export default function Logo({ onClick }: { onClick?: () => void }) {
  const { navigate } = useNav();

  return (
    <button
      onClick={() => {
        navigate('home');
        onClick?.();
      }}
      className="flex items-center gap-2.5 group"
      aria-label="AREX — Think Smart"
    >
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-arex-blue shadow-soft transition-transform duration-300 group-hover:scale-105">
          <span className="font-display text-xl font-extrabold text-white">A</span>
        </div>
        <div className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-arex-green ring-2 ring-white transition-transform duration-300 group-hover:scale-125" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-arex-blue">AREX</span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-arex-green">Think Smart</span>
      </div>
    </button>
  );
}
