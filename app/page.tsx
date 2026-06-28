// app/page.tsx — Cornrow Academy
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
import {
  modules,
  masterclasses,
  workshops,
  whoShouldAttend,
  missionPoints,
  graduateWith,
} from "./components/Academy/curriculumData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CornrowAcademyPage() {
  const [openModule, setOpenModule] = useState<number | null>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function toggleModule(no: number) {
    setOpenModule((prev) => (prev === no ? null : no));
  }

  // ✅ Auto-reset after 8 seconds
  useEffect(() => {
    if (!isSubmitted) return;

    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  // ✅ SCROLL LOCK: Lock body scroll when overlay is active
  useEffect(() => {
    document.body.style.overflow = isSubmitted ? "hidden" : "auto";
    
    // Cleanup: Reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setIsSubmitted(true);
      setSubmitStatus({
        type: "success",
        message: "Application submitted successfully! We'll be in touch soon.",
      });
      e.currentTarget.reset();

    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Manual close function
  const handleCloseOverlay = () => {
    setIsSubmitted(false);
  };

  return (
    <main className={styles.page}>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBrand}>
            <div className={styles.heroLogoMark} aria-hidden="true">
              <Image
                src="/images/logo.png"
                alt="BIC Logo"
                width={40}
                height={40}
                className={styles.logoImage}
              />
            </div>
            <span className={styles.heroBrandName}>Cornrow Academy</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <h1 className={styles.heroTitle}>
              Tell Stories That Inspire
              Faith, Hope and Transformation
            </h1>

            <p className={styles.heroSub}>
              Every generation needs storytellers who communicate timeless
              truth with creativity, excellence, and authenticity.
            </p>

            <div className={styles.heroCtas}>
              <a href="#apply" className={`${styles.btnPrimary} ${styles.heroOnGold}`}>
                Apply for the Cohort
              </a>
              <a href="#curriculum" className={`${styles.btnGhost} ${styles.heroGhostOnGold}`}>
                See the Curriculum
              </a>
            </div>
          </motion.div>
        </div>

        <div className={styles.heroPortrait}>
          <img
            src="/images/hero_2.png"
            alt="Image a boy with funny glasses"
            loading="eager"
            width={400}
            height={400}
            className={styles.heroPortraitImg}
          />
          <span className={styles.heroNotch} aria-hidden="true" />
        </div>
      </section>

      {/* ═══════════════ FINAL PROJECT STRIP ═══════════════ */}
      <section className={`${styles.section} ${styles.sectionTight}`}>
        <div className={styles.sectionEyebrow}>The Final Cut</div>

        <h2 className={styles.sectionTitle}>
          Every participant develops and completes a 5–10 minute faith-based short film,
          premiered at the Cornrow Faith Film Showcase.
        </h2>

        <p className={styles.sectionBody}>
          From first script to final grade, you'll shape a film from the ground up—
          writing, directing, producing, and editing alongside a small cohort of
          storytellers. The journey culminates in a theatrical premiere of your work.
        </p>
      </section>

      {/* ═══════════════ MISSION ═══════════════ */}
      <section className={styles.missionWrap}>
        <div className={styles.section}>
          <div className={styles.missionGrid}>
            <div className={styles.missionLead}>
              <div className={styles.sectionEyebrow}>Our Mission</div>

              <h2 className={styles.sectionTitle}>
                Filmmaking is not just entertainment—it is a language for the Kingdom.
              </h2>

              <p className={styles.sectionBody}>
                At Cornrow Academy, we form filmmakers who pursue both craft and conviction—
                shaping stories with creative discipline, spiritual depth, and intentionality.
                In their hands, the camera becomes an instrument of ministry.
              </p>
            </div>

            <div className={styles.reelList}>
              {missionPoints.map((point, i) => (
                <div key={point} className={styles.reelItem}>
                  <span className={styles.reelMark}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO SHOULD ATTEND ═══════════════ */}
      <section className={styles.section}>
        <div className={styles.sectionEyebrow}>Who Should Attend</div>

        <h2 className={styles.sectionTitle}>
          No prior filmmaking experience required.
        </h2>

        <p className={styles.sectionBody}>
          This programme is for anyone called to tell stories that honour God—
          regardless of where they are starting from.
        </p>

        <div className={styles.castGrid}>
          {whoShouldAttend.map((role) => (
            <div key={role} className={styles.castCard}>
              <span className={styles.castDot} aria-hidden="true" />
              {role}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CURRICULUM — SHOT LIST ═══════════════ */}
      <section id="curriculum" className={styles.curriculumWrap}>
        <div className={styles.section}>
          <div className={styles.sectionEyebrow}>The Shot List</div>

          <h2 className={styles.sectionTitle}>
            12 modules, designed to be completed in sequence.
          </h2>

          <p className={styles.sectionBody}>
            From calling to camera to career, each module builds on the last—
            following the arc of a film from first page to final premiere.
          </p>

          <div className={styles.shotList}>
            {modules.map((mod) => {
              const isOpen = openModule === mod.no;

              return (
                <div key={mod.no} className={styles.shotCard}>
                  <button
                    className={styles.shotHead}
                    onClick={() => toggleModule(mod.no)}
                    aria-expanded={isOpen}
                    aria-controls={`module-${mod.no}`}
                  >
                    <span className={styles.shotSlate}>
                      Module {String(mod.no).padStart(2, "0")}
                    </span>

                    <span className={styles.shotInfo}>
                      <span className={styles.shotTitle}>
                        {mod.title}
                      </span>
                    </span>

                    <svg
                      className={`${styles.shotChevron} ${
                        isOpen ? styles.shotChevronOpen : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`module-${mod.no}`}
                        className={styles.shotBody}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease }}
                      >
                        <div className={styles.shotBodyInner}>
                          <div>
                            <div className={styles.shotTopicsLabel}>Topics</div>
                            <ul className={styles.shotTopics}>
                              {mod.topics.map((t) => (
                                <li key={t}>{t}</li>
                              ))}
                            </ul>
                          </div>
                          {(mod.assignment || mod.practical || mod.studentsCreate) && (
                            <div>
                              <div className={styles.shotAssignLabel}>
                                {mod.studentsCreate
                                  ? "Students Create"
                                  : mod.practical
                                  ? "Practical"
                                  : "Assignment"}
                              </div>
                              {mod.studentsCreate ? (
                                <ul className={styles.shotTopics}>
                                  {mod.studentsCreate.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <div className={styles.shotAssign}>
                                  {mod.assignment || mod.practical}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ GRADUATE WITH ═══════════════ */}
      <section className={styles.graduateWrap}>
        <div className={styles.section}>
          <div className={styles.sectionEyebrow}>What You'll Graduate With</div>
          <h2 className={styles.sectionTitle}>
            Leave with a finished body of work — not just a certificate.
          </h2>
          <div className={styles.graduateGrid}>
            {graduateWith.map((item) => (
              <div key={item} className={styles.graduateItem}>
                {item}
              </div>
            ))}
          </div>
          <p className={styles.graduateClosing}>
            Most importantly, you'll leave with the confidence and practical
            skills to create films that honour God while meeting professional
            industry standards.
          </p>
        </div>
      </section>

      {/* ═══════════════ WHY CORNROW ═══════════════ */}
      <section className={styles.whyWrap}>
        <div className={styles.section}>
          <div className={styles.sectionEyebrow}>Why Cornrow Academy</div>

          <h2 className={styles.whyTitle}>
            We don't just teach filmmaking.<br />
            We form storytellers for <em>Kingdom impact</em>.
          </h2>

          <p className={styles.whyBody}>
            Our vision is to raise a generation of African filmmakers who communicate
            the Gospel with clarity, preserve testimonies, inspire hope, and shape
            culture through compelling visual storytelling. We believe faith and
            excellence are not opposites—but partners.
          </p>
        </div>
      </section>

      {/* ═══════════════ APPLY ═══════════════ */}
      <section id="apply" className={styles.applyWrap}>
        <div className={styles.section}>
          <div className={styles.sectionEyebrow}>Enrol Today</div>

          <h2 className={styles.sectionTitle}>
            Your story matters. Apply for the next cohort.
          </h2>

          <p className={styles.sectionBody}>
            Share a little about yourself, and we'll follow up with next steps—
            including programme dates and tuition details for both the 12-week
            certificate and the 5-day intensive workshop.
          </p>

          <div className={styles.applyCard}>
            <div className={styles.applyHead}>
              <span className={styles.applyHeadTitle}>
                Cornrow Academy — Certificate Application
              </span>
              <span className={styles.applyHeadMeta}>Slate 01 / Take 01</span>
            </div>

            {/* ✅ Cinematic Overlay with Scroll Lock */}
            <div className={styles.formWrapper}>
              <form
                className={`${styles.formGrid} ${
                  isSubmitted ? styles.formBlur : ""
                }`}
                onSubmit={handleSubmit}
              >
                <div>
                  <label className={styles.formLabel} htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={styles.formInput}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className={styles.formLabel} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.formInput}
                    placeholder="you@email.com"
                    required
                  />
                </div>

                <div>
                  <label className={styles.formLabel} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={styles.formInput}
                    placeholder="+234 ..."
                    required
                  />
                </div>

                <div>
                  <label className={styles.formLabel} htmlFor="track">
                    Programme Track
                  </label>
                  <select
                    id="track"
                    name="track"
                    className={styles.formSelect}
                    required
                  >
                    <option value="">Select a track</option>
                    <option value="12-week">12-Week Certificate</option>
                    <option value="5-day">5-Day Intensive Workshop</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div className={styles.formFieldFull}>
                  <label className={styles.formLabel} htmlFor="role">
                    Which best describes you?
                  </label>
                  <select id="role" name="role" className={styles.formSelect}>
                    <option value="">Select one</option>
                    {whoShouldAttend.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formFieldFull}>
                  <label className={styles.formLabel} htmlFor="story">
                    Why do you want to tell faith-based stories?
                  </label>
                  <textarea
                    id="story"
                    name="story"
                    className={styles.formTextarea}
                    placeholder="Briefly share your calling, experience (if any), and what you hope to create..."
                  />
                </div>

                {/* Error message only - success is handled by overlay */}
                {submitStatus && submitStatus.type === "error" && (
                  <div className={styles.formStatusError}>
                    {submitStatus.message}
                  </div>
                )}

                <div className={styles.formSubmitRow}>
                  <p className={styles.formNote}>
                    No prior filmmaking experience required. We'll review your
                    application and respond with full details on dates, tuition, and
                    next steps.
                  </p>

                  <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>

              {/* ✅ Success Overlay with Manual Close & Scroll Lock */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    className={styles.successOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <motion.div
                      className={styles.successCard}
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      transition={{ duration: 0.4, ease, delay: 0.1 }}
                    >
                      <button 
                        className={styles.successClose}
                        onClick={handleCloseOverlay}
                        aria-label="Close"
                      >
                        ✕
                      </button>
                      
                      <div className={styles.successIcon}>🎬</div>
                      <h3 className={styles.successTitle}>Take Recorded</h3>
                      <p className={styles.successMessage}>
                        Your application has been received.
                        We'll be in touch soon with next steps.
                      </p>
                      <div className={styles.successSlate}>
                        <span>Slate 01</span>
                        <span>Take 01</span>
                        <span>✓</span>
                      </div>

                      <button 
                        className={styles.successBtn}
                        onClick={handleCloseOverlay}
                      >
                        Continue
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ END CREDITS ═══════════════ */}
    
    </main>
  );
}