export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
}) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : ""}>
      {subtitle && (
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      {description && <p className="text-slate-600 text-lg">{description}</p>}
    </div>
  );
}
