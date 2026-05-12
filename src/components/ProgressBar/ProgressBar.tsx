import { useEffect, useState } from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / height) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-container__bar"
        style={{ width: `${scrollPercentage}%` }}
        aria-valuenow={scrollPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
        aria-label="Page scroll progress"
      />
    </div>
  );
};

export default ProgressBar;
