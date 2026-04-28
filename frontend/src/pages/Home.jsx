import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function checkBackend() {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axios.get("http://localhost:5000/api/health");
      setResult(res.data);
    } catch (err) {
      setError(err?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        AI Email Assistant
      </h1>
      <p className="mt-2 text-slate-300">
        A minimal full-stack starter: React + Express.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={checkBackend}
          disabled={loading}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Checking..." : "Check Backend"}
        </button>

        <a
          href="/dashboard"
          className="rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900"
        >
          Go to Dashboard
        </a>
      </div>

      <div className="mt-6">
        {error ? (
          <div className="rounded-lg border border-red-900/60 bg-red-950/50 p-4 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        {result ? (
          <pre className="mt-4 overflow-auto rounded-lg border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-100">
            {JSON.stringify(result, null, 2)}
          </pre>
        ) : (
          <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/20 p-4 text-sm text-slate-300">
            Click &quot;Check Backend&quot; to call{" "}
            <span className="text-slate-100">/api/health</span>.
          </div>
        )}
      </div>
    </div>
  );
}

