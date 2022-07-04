import { InfoCircleOutlined } from '@ant-design/icons';
import { Column } from '@ant-design/plots';
import { Card } from 'antd';

import styles from './numberOfPayments.less';

const NumberOfPayments = () => {
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
    {
      type: '家具家电1',
      sales: 38,
    },
    {
      type: '粮油副食1',
      sales: 52,
    },
    {
      type: '生鲜水果1',
      sales: 61,
    },
    {
      type: '美容洗护1',
      sales: 145,
    },
    {
      type: '母婴用品1',
      sales: 48,
    },
    {
      type: '进口食品1',
      sales: 38,
    },
    {
      type: '食品饮料1',
      sales: 38,
    },
    {
      type: '家庭清洁1',
      sales: 38,
    },
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: null,
    xAxis: {
      label: null,
      line: null,
    },
    yAxis: {
      label: null,
      grid: null,
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };

  return (
    <Card bodyStyle={{ padding: '20px 24px 8px' }}>
      <div className={styles.chartCard}>
        <div className={styles.chartTop}>
          <span className={styles.topTitle}>支付笔数</span>
          <InfoCircleOutlined className={styles.topIcon} />
          <div className={styles.topAmount}>
            <span>6,560</span>
          </div>
        </div>
        <div className={styles.content}>
          <Column {...config} />
        </div>
        <div className={styles.footer}>
          <span>转化率</span>
          <span className={styles.number}>60%</span>
        </div>
      </div>
    </Card>
  );
};

export default NumberOfPayments;
