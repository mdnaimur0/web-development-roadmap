import { useEffect, useState } from "react";
import { useProgress } from "../lib/progress-context";
import { StorageWarning } from "./feedback/StorageWarning";

function StorageWarningBanner() {
  const { usingFallback } = useProgress();
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (usingFallback) {
      timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [usingFallback]);
  if (!showBanner) return null;
  return <StorageWarning />;
}

function ErrorBanner() {
  const { error } = useProgress();
  if (!error) return null;

  return (
    <div className="bg-cardinal/10 border border-cardinal/30 rounded-md p-3 text-center text-body-sm text-body-strong">
      <span className="font-bold">Error:</span> {error.message}
    </div>
  );
}

export function ProgressProviderWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="sticky top-0 left-0 right-0 z-50">
        <StorageWarningBanner />
        <ErrorBanner />
      </div>
      {children}
    </div>
  );
}
