"use client"

import React, { useState, useRef, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"

interface GlassmorphicTooltipProps {
  content: ReactNode
  children: React.ReactNode
  tooltipClassName?: string
  /** placement currently supports "top" or "bottom" (default: top) */
  placement?: "top" | "bottom"
  /** small delay in ms before showing tooltip (optional) */
  delay?: number
}

export default function GlassmorphicTooltip({
  content,
  children,
  tooltipClassName = "",
  placement = "top",
  delay = 80,
}: GlassmorphicTooltipProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(null)
  const showTimeout = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (showTimeout.current) window.clearTimeout(showTimeout.current)
    }
  }, [])

  const calculatePosition = () => {
    const trigger = triggerRef.current
    const tip = tooltipRef.current
    if (!trigger) return

    const rect = trigger.getBoundingClientRect()
    // We'll render tooltip with position: fixed, so rect.* are viewport coords
    const centerX = rect.left + rect.width / 2
    // place top at rect.top to then translateY(-100%) if placement="top"
    const baseTop = rect.top
    setCoords({
      left: Math.round(centerX),
      top: Math.round(baseTop),
    })
  }

  // show/hide handlers with small delay for nicer UX
  const handleShow = () => {
    if (showTimeout.current) window.clearTimeout(showTimeout.current)
    showTimeout.current = window.setTimeout(() => {
      calculatePosition()
      setIsVisible(true)
    }, delay)
  }
  const handleHide = () => {
    if (showTimeout.current) window.clearTimeout(showTimeout.current)
    setIsVisible(false)
  }

  // toggle for touch/click
  const handleToggle = () => {
    if (isVisible) handleHide()
    else {
      calculatePosition()
      setIsVisible(true)
    }
  }

  // reposition on scroll/resize while visible
  useEffect(() => {
    if (!isVisible) return
    const onScroll = () => calculatePosition()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [isVisible])

  // Tooltip element to render in portal
  const tooltipElement = (
    <div
      ref={tooltipRef}
      role="tooltip"
      aria-hidden={!isVisible}
      className={`pointer-events-auto z-[9999] ${tooltipClassName}`.trim()}
      style={{
        position: "fixed",
        left: coords ? `${coords.left}px` : "-9999px",
        top: coords ? `${coords.top}px` : "-9999px",
        transform:
          placement === "top"
            ? "translate(-50%, -120%)"
            : "translate(-50%, 8px)",
        transition: "opacity 160ms ease, transform 160ms ease",
        opacity: isVisible ? 1 : 0,
        whiteSpace: "nowrap",
        // keep default glass look if user didn't override via classes
        ...(tooltipClassName ? {} : {
          background: "rgba(255, 255, 255, 0.14)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 211, 182, 0.28)",
          color: "#fff",
          boxShadow: "0 8px 32px rgba(255, 77, 166, 0.12)",
          padding: "8px 10px",
          borderRadius: 12,
        }),
      }}
    >
      <div style={{ display: "inline-block" }}>{content}</div>

      {/* arrow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%) rotate(45deg)",
          width: 10,
          height: 10,
          ...(placement === "top"
            ? { top: "100%", marginTop: 6 }
            : { bottom: "100%", marginBottom: 6 }),
          background: tooltipClassName ? undefined : "rgba(255,255,255,0.14)",
          borderRight: "1px solid rgba(255, 211, 182, 0.28)",
          borderBottom: "1px solid rgba(255, 211, 182, 0.28)",
        }}
      />
    </div>
  )

  return (
    <>
      <div
        ref={triggerRef}
        className="relative inline-block"
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onFocus={handleShow}
        onBlur={handleHide}
        onClick={handleToggle} // supports touch
        tabIndex={0} // keyboard focusable
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleToggle()
          } else if (e.key === "Escape") {
            handleHide()
          }
        }}
        aria-haspopup="true"
        aria-expanded={isVisible}
      >
        {children}
      </div>

      {/* render tooltip into document.body to avoid clipping by overflow:hidden parents */}
      {typeof document !== "undefined" && createPortal(tooltipElement, document.body)}
    </>
  )
}
