import { CaretDownOutlined, CaretUpOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Bullet } from '@ant-design/plots';
import { Card } from 'antd';

import styles from './operation.less';

const Operation = () => {
  const data = [
    {
      title: '',
      ranges: [100],
      measures: [80],
      target: 85,
    },
  ];

  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: 'title',
    color: {
      range: 'rgba(255, 255, 255, 0.0)',
      measure: '#5B8FF9',
      target: '#3D76DD',
    },
    legend: {
      label: null,
    },
    xAxis: {
      line: null,
    },
    yAxis: {
      label: null,
      grid: null,
    },
    // 自定义 legend
    legend: {
      custom: false,
    },
  };

  return (
    <Card bodyStyle={{ padding: '20px 24px 8px' }}>
      <div className={styles.chartCard}>
        <div className={styles.chartTop}>
          <span className={styles.topTitle}>运营活动效果</span>
          <InfoCircleOutlined className={styles.topIcon} />
          <div className={styles.topAmount}>
            <span>78%</span>
          </div>
        </div>
        <div className={styles.content}>
          <Bullet {...config} />
        </div>
        <div className={styles.footer}>
          <div className={styles.yearOnYear}>
            <span>周同比</span>
            <span className={styles.number}>12%</span>
            <CaretUpOutlined style={{ color: 'red', marginLeft: '4px' }} />
          </div>
          <div className={styles.yearOnYear}>
            <span>日同比</span>
            <span className={styles.number}>11%</span>
            <CaretDownOutlined style={{ color: 'green', marginLeft: '4px' }} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Operation;
