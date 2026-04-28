export default function EmailCard({ email }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
      <div className="text-xs text-slate-400">{email.from}</div>
      <div className="mt-1 text-sm font-semibold text-slate-100">
        {email.subject}
      </div>
      <div className="mt-2 text-sm text-slate-300">{email.preview}</div>
    </div>
  );
}

