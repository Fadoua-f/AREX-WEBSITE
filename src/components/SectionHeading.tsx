import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  variant?: 'up' | 'left' | 'right' | 'scale';
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  variant = 'up',
}: SectionHeadingProps) {
  return (
    <Reveal variant={variant} className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-arex-green" />
          <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-neutral-500">{subtitle}</p>
      )}
    </Reveal>
  );
}
