type Props = {
  title: string;
  description?: string;
  onClick: () => void;
  selected?: boolean;
};

export default function ChoiceCard({ title, description, onClick, selected }: Props) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full rounded-2xl border p-5 text-left transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[#2563eb] bg-[#2563eb] text-white shadow-xl shadow-blue-600/20 scale-[1.01]"
          : "border-slate-200/90 bg-white hover:-translate-y-0.5 hover:border-[#8A98AA] hover:shadow-md"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className={`text-base font-bold tracking-tight ${selected ? "text-white" : "text-slate-800 group-hover:text-slate-950"}`}>
            {title}
          </div>
          {description && (
            <div className={`mt-1 text-sm ${selected ? "text-white/85" : "text-slate-500"}`}>
              {description}
            </div>
          )}
        </div>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition-all duration-200 group-hover:translate-x-1 ${
            selected
              ? "bg-white/20 text-white"
              : "bg-slate-50 text-[#2563eb] group-hover:bg-blue-50"
          }`}
        >
          →
        </span>
      </div>
    </button>
  );
}