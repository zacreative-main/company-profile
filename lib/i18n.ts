"use client";

import { useSyncExternalStore } from "react";
import {
  COPY_BY_LOCALE,
  DEFAULT_LOCALE,
  type Locale,
} from "@/lib/copywriting";

const STORAGE_KEY = "zacreative-lang";
const CHANGE_EVENT = "zacreative-lang-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") {
      return stored;
    }
  } catch {
    // Ignore storage access errors
  }
  return DEFAULT_LOCALE;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function setLocale(nextLocale: Locale): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, nextLocale);
  } catch {
    // Ignore storage write errors
  }
  document.documentElement.lang = nextLocale;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useLocale(): [Locale, (next: Locale) => void] {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return [locale, setLocale];
}

export function useCopy() {
  const locale = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return COPY_BY_LOCALE[locale];
}
