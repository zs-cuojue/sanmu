import { useRef, useEffect } from 'react';
import styles from './monitor.less';

const Monitor = () => {
  const leftRef = useRef();

  const so = () => {
    let scrollTop = document.documentElement.scrollTop;
    let opacity = scrollTop * 0.085;
    leftRef.current.style.opacity = opacity;
    console.log(opacity);
  };
  useEffect(() => {
    window.addEventListener('scroll', so);
  }, []);

  return (
    <div className={styles.monitor}>
      <div className={styles.left} ref={leftRef}>
        1
      </div>
      <div className={styles.right}>2</div>
    </div>
  );
};

export default Monitor;
