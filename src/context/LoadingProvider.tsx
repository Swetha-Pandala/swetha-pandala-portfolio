import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Loading, { setProgress } from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.innerWidth <= 768) return false;
    return true;
  });
  const [loading, setLoading] = useState(0);
  const started = useRef(false);

  const value = { isLoading, setIsLoading, setLoading };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      import("../components/utils/initialFX").then((module) => {
        setTimeout(() => module.initialFX?.(), 100);
      });
      return;
    }

    if (started.current) return;
    started.current = true;

    const progress = setProgress(setLoading);
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      progress.loaded();
    };

    if (document.readyState === "complete") {
      setTimeout(finish, 600);
    } else {
      window.addEventListener("load", () => setTimeout(finish, 400), { once: true });
      setTimeout(finish, 4000);
    }

    return () => {
      cancelled = true;
      progress.clear();
    };
  }, []);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
