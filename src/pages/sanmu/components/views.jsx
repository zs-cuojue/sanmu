import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

import styles from './views.less';

const Views = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
      label: null,
      line: null,
    },
    yAxis: {
      label: null,
      grid: null,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
  };

  return (
    <Card bodyStyle={{ padding: '20px 24px 8px' }}>
      <div className={styles.chartCard}>
        <div className={styles.chartTop}>
          <span className={styles.topTitle}>访问量</span>
          <InfoCircleOutlined className={styles.topIcon} />
          <div className={styles.topAmount}>
            <span>8,846</span>
          </div>
        </div>
        <div className={styles.content}>
          <Area {...config} />
        </div>
        <div className={styles.footer}>
          <span>日访问量</span>
          <span className={styles.number}>1,234</span>
        </div>
      </div>
    </Card>
  );
};

export default Views;
