import { useEffect, useRef } from 'react'

/**
 * Lightweight parallax: applies a small translateY to a wrapper based on the
 * element's position in the viewport. Disabled on coarse pointers (mobile)
 * and for users who prefer reduced motion.
 */
export function useParallax(strength = 0.18) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduceMotion || coarse) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      // distance of the element's centre from the viewport centre, in [-1, 1]
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      const offset = progress * strength * 120
      node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
    }

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [strength])

  return ref
}