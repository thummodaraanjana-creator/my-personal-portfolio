"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Replace this with a phone number in international format, including the +.
const CONTACT_PHONE_NUMBER = "+YOUR_PHONE_NUMBER";
const MODAL_TRANSITION_MS = 200;

export default function HeroCallMe() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldRestoreFocusRef = useRef(false);

  const closeModal = useCallback(() => {
    if (!isMounted) return;

    setIsOpen(false);
    closeTimerRef.current = setTimeout(() => {
      shouldRestoreFocusRef.current = true;
      setIsMounted(false);
      closeTimerRef.current = null;
    }, MODAL_TRANSITION_MS);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) {
      if (shouldRestoreFocusRef.current) {
        shouldRestoreFocusRef.current = false;
        triggerRef.current?.focus();
      }

      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      setIsOpen(true);
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeModal, isMounted]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    },
    [],
  );

  const openModal = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    shouldRestoreFocusRef.current = false;
    setIsMounted(true);
  };

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;

    const focusableElements =
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  };

  return (
    <>
      <div className="relative flex h-64 w-64 items-center justify-center md:h-96 md:w-96">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-cyan-400/30 animate-[spin_15s_linear_infinite]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-8 rounded-full border border-blue-500/40 animate-[spin_10s_linear_infinite_reverse]"
        />

        <button
          ref={triggerRef}
          type="button"
          aria-label="Open call details"
          aria-haspopup="dialog"
          aria-expanded={isMounted}
          onClick={openModal}
          className="group relative z-10 flex h-48 w-48 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-cyan-300 motion-reduce:transition-none md:h-64 md:w-64"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-700 blur-[2px] shadow-[0_0_100px_rgba(34,211,238,0.35)] transition-shadow duration-300 group-hover:shadow-[0_0_120px_rgba(34,211,238,0.55)] group-hover:shadow-blue-500/30 animate-pulse"
          />
          <span className="relative text-5xl font-bold text-white">AN</span>
        </button>
      </div>

      {isMounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 transition-opacity duration-200 motion-reduce:transition-none sm:p-6 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <section
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="call-me-title"
              aria-describedby="call-me-description"
              onKeyDown={handleDialogKeyDown}
              className={`relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-cyan-200/15 bg-[#0b1220]/95 p-7 shadow-[0_24px_100px_rgba(0,0,0,0.65),0_0_60px_rgba(34,211,238,0.10)] backdrop-blur-2xl transition duration-200 ease-out motion-reduce:transition-none sm:p-9 ${
                isOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-3 scale-[0.97] opacity-0"
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-[70px]"
              />

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close call details"
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan-200/30 hover:bg-cyan-200/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>

              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/15 to-blue-500/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                  >
                    <path
                      d="M7.1 3.75h2.35c.43 0 .81.29.91.71l1.02 4.1a.95.95 0 0 1-.47 1.06l-1.6.91a12.2 12.2 0 0 0 4.16 4.16l.91-1.6a.95.95 0 0 1 1.06-.47l4.1 1.02c.42.1.71.48.71.91v2.35c0 1.05-.9 1.88-1.95 1.78C9.77 17.9 6.1 14.23 5.32 5.7c-.1-1.05.73-1.95 1.78-1.95Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>

                <p className="mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  A direct line
                </p>
                <h2
                  id="call-me-title"
                  className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Let&apos;s Connect!
                </h2>
                <p
                  id="call-me-description"
                  className="mt-3 max-w-sm text-sm leading-6 text-slate-400"
                >
                  I&apos;d love to hear from you. Feel free to give me a call.
                </p>

                <div className="mt-7 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 sm:p-5">
                  <p className="text-sm font-semibold text-white">
                    Anjana Thummodara
                  </p>
                  <p className="mt-1 font-mono text-sm tracking-wide text-slate-300">
                    {CONTACT_PHONE_NUMBER}
                  </p>
                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    Replace the placeholder with your phone number in
                    international format.
                  </p>
                </div>

                <a
                  href={`tel:${CONTACT_PHONE_NUMBER}`}
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3.5 text-sm font-bold text-[#07111c] shadow-[0_8px_30px_rgba(34,211,238,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(34,211,238,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform group-hover:rotate-[-12deg]"
                    fill="none"
                  >
                    <path
                      d="M7.1 3.75h2.35c.43 0 .81.29.91.71l1.02 4.1a.95.95 0 0 1-.47 1.06l-1.6.91a12.2 12.2 0 0 0 4.16 4.16l.91-1.6a.95.95 0 0 1 1.06-.47l4.1 1.02c.42.1.71.48.71.91v2.35c0 1.05-.9 1.88-1.95 1.78C9.77 17.9 6.1 14.23 5.32 5.7c-.1-1.05.73-1.95 1.78-1.95Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                  Call Me
                </a>
              </div>
            </section>
          </div>,
          document.body,
        )}
    </>
  );
}
