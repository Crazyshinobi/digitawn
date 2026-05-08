import useInView from '../hooks/useInView';

/**
 * Wraps children with a scroll-triggered animation.
 * variant: 'fade-up' | 'fade-left' | 'fade-right' | 'fade' | 'scale'
 * delay: ms string e.g. '100ms'
 */
export default function Animate({ children, variant = 'fade-up', delay = '0ms', className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`anim anim-${variant} ${inView ? 'anim-visible' : ''} ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </Tag>
  );
}
