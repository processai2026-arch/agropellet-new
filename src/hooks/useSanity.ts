import { useEffect, useState } from "react";
import { sanityFetch } from "@/lib/sanity";

interface UseSanityResult<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

/**
 * Generic hook to fetch any Sanity GROQ query.
 * Falls back gracefully – never throws to the component.
 */
export function useSanity<T>(query: string, params?: Record<string, unknown>): UseSanityResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    sanityFetch<T>(query, params)
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, loading, error };
}
