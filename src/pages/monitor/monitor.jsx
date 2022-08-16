import { useRef, useEffect, useState } from 'react';
import styles from './monitor.less';

const Monitor = () => {
  const [leftTop, setLeftTop] = useState();
  const [rightTop, setRightTop] = useState();
  const leftRef = useRef();
  const rightRef = useRef();

  const so = () => {
    let scrollTop = leftRef.current.getBoundingClientRect().top;
    let scrollTop2 = rightRef.current.getBoundingClientRect().top;
    let opacity = scrollTop / leftTop;
    let opacity2 = scrollTop2 / rightTop;
    leftRef.current.style.opacity = opacity;
    rightRef.current.style.opacity = opacity2;
  };
  useEffect(() => {
    let num = leftRef.current.getBoundingClientRect().top;
    let num2 = rightRef.current.getBoundingClientRect().top;
    setLeftTop(num);
    setRightTop(num2);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', so);
  }, []);

  return (
    <div className={styles.monitor}>
      <div className={styles.left} ref={leftRef}>
        123
      </div>
      <div className={styles.right} ref={rightRef} />
    </div>
  );
};

export default Monitor;
