import { CaretDownOutlined, CaretUpOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Card } from 'antd';
import { useState } from 'react';

import { getTotalSales } from '@/services/sanmu-api/api';

import styles from './totalSales.less';

const TotalSales = () => {
  const [salesData, setSalesData] = useState({});

  useRequest(() => getTotalSales({ type: 1, other: 2 }), {
    onSuccess: ({ success, data }) => {
      if (!success) return;
      setSalesData(data);
    },
  });

  return (
    <Card bodyStyle={{ padding: '20px 24px 8px' }}>
      <div className={styles.chartCard}>
        <div className={styles.chartTop}>
          <span className={styles.topTitle}>总销售额</span>
          <InfoCircleOutlined className={styles.topIcon} />
          <div className={styles.topAmount}>
            <span>{salesData.totalSales}</span>
            <span>1</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.yearOnYear}>
            <span>周同比</span>
            <span>{salesData.week}</span>
            <CaretUpOutlined style={{ color: 'red', marginLeft: '4px' }} />
          </div>
          <div className={styles.yearOnYear}>
            <span>日同比</span>
            <span>{salesData.month}</span>
            <CaretDownOutlined style={{ color: 'green', marginLeft: '4px' }} />
          </div>
        </div>
        <div className={styles.footer}>
          <span>日销售额</span>
          <span className={styles.number}>{salesData.amout}</span>
        </div>
      </div>
    </Card>
  );
};

export default TotalSales;
