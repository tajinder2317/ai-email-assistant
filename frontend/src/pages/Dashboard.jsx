import EmailCard from "../components/EmailCard.jsx";

export default function Dashboard() {
  const emails = [
    {
      id: "1",
      subject: "Welcome to AI Email Assistant",
      from: "team@ai-email-assistant.dev",
      preview: "This is a placeholder email card for the dashboard UI.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
      <p className="mt-2 text-slate-300">
        This page is intentionally minimal.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {emails.map((email) => (
          <EmailCard key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
}

