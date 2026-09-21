'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function fadeInUp(element: Element, options?: { delay?: number; duration?: number }): void {
  if (prefersReducedMotion()) {
    gsap.set(element, { autoAlpha: 1, y: 0 });
    return;
  }
  
  gsap.fromTo(element, 
    { autoAlpha: 0, y: 30 },
    {
      autoAlpha: 1,
      y: 0,
      duration: options?.duration || 1,
      delay: options?.delay || 0,
      ease: 'power2.out'
    }
  );
}

export function fadeIn(element: Element, options?: { delay?: number; duration?: number }): void {
  if (prefersReducedMotion()) {
    gsap.set(element, { autoAlpha: 1 });
    return;
  }
  
  gsap.fromTo(element, 
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: options?.duration || 1,
      delay: options?.delay || 0,
      ease: 'power2.out'
    }
  );
}

export function scaleReveal(element: Element, options?: { delay?: number; duration?: number }): void {
  if (prefersReducedMotion()) {
    gsap.set(element, { autoAlpha: 1, scale: 1 });
    return;
  }
  
  gsap.fromTo(element,
    { autoAlpha: 0, scale: 0.95 },
    {
      autoAlpha: 1,
      scale: 1,
      duration: options?.duration || 1.2,
      delay: options?.delay || 0,
      ease: 'power2.out'
    }
  );
}

export function parallax(element: Element, options?: { speed?: number }): void {
  if (prefersReducedMotion()) return;
  
  const speed = options?.speed || 0.5;
  
  gsap.to(element, {
    y: () => -(element.parentElement?.offsetHeight || 0) * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
}

export function staggerFadeIn(parent: Element, childSelector: string, options?: { stagger?: number; delay?: number; duration?: number }): void {
  const children = parent.querySelectorAll(childSelector);
  
  if (prefersReducedMotion()) {
    gsap.set(children, { autoAlpha: 1, y: 0 });
    return;
  }
  
  gsap.fromTo(children,
    { autoAlpha: 0, y: 20 },
    {
      autoAlpha: 1,
      y: 0,
      duration: options?.duration || 0.8,
      delay: options?.delay || 0,
      stagger: options?.stagger || 0.1,
      ease: 'power2.out'
    }
  );
}

export function setupScrollReveal(element: Element, animation: 'fadeInUp' | 'fadeIn' | 'scaleReveal' = 'fadeInUp'): void {
  if (prefersReducedMotion()) {
    gsap.set(element, { autoAlpha: 1, y: 0, scale: 1 });
    return;
  }

  const animationVars: gsap.TweenVars = {
    autoAlpha: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  };

  switch (animation) {
    case 'fadeInUp':
      gsap.set(element, { autoAlpha: 0, y: 30 });
      animationVars.y = 0;
      break;
    case 'fadeIn':
      gsap.set(element, { autoAlpha: 0 });
      break;
    case 'scaleReveal':
      gsap.set(element, { autoAlpha: 0, scale: 0.95 });
      animationVars.scale = 1;
      animationVars.duration = 1.2;
      break;
  }

  gsap.to(element, animationVars);
}

export function revealMask(element: Element, options?: { delay?: number; duration?: number; direction?: 'left' | 'right' | 'up' | 'down' }): void {
  if (prefersReducedMotion()) {
    gsap.set(element, { clipPath: 'inset(0% 0% 0% 0%)' });
    return;
  }
  
  const direction = options?.direction || 'up';
  let initialClipPath = '';
  
  switch (direction) {
    case 'up': initialClipPath = 'inset(100% 0% 0% 0%)'; break;
    case 'down': initialClipPath = 'inset(0% 0% 100% 0%)'; break;
    case 'left': initialClipPath = 'inset(0% 0% 0% 100%)'; break;
    case 'right': initialClipPath = 'inset(0% 100% 0% 0%)'; break;
  }
  
  gsap.fromTo(element,
    { clipPath: initialClipPath },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: options?.duration || 1.5,
      delay: options?.delay || 0,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
}
