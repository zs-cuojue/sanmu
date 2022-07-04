import { Button, Card } from 'antd';
import { useEffect, useState } from 'react';
import styles from './proportion.less';

const Proportion = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    timeout();
  }, []);

  const timeout = () => {
    setText('');
    let timer = null;
    let aaa = '我是一个粉刷匠，粉刷本领强';
    let l = 1;
    let bbb = '';
    setTimeout(() => {
      timer = setInterval(() => {
        bbb = aaa.substring(0, l);
        setText(bbb);
        if (l < aaa.length) {
          l++;
        } else {
          clearInterval(timer);
          return;
        }
      }, 80);
    }, 2000);
  };

  return (
    <Card>
      <div className={styles.text}>
        <span>{text}</span>
        <span className={styles.anim}>&nbsp;_</span>
        <br />
        <Button onClick={timeout} type="primary">
          Click
        </Button>
      </div>
    </Card>
  );
};

export default Proportion;
