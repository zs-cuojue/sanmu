import { Column } from '@ant-design/plots';
import { Card, Col, DatePicker, Row } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import styles from './salesAndviews.less';

const { RangePicker } = DatePicker;
const tabList = [
  {
    key: 'sales',
    tab: '销售额',
  },
  {
    key: 'views',
    tab: '访问量',
  },
];
const datetab = [
  {
    key: 'day',
    tab: '今日',
  },
  {
    key: 'week',
    tab: '本周',
  },
  {
    key: 'mouth',
    tab: '本月',
  },
  {
    key: 'year',
    tab: '本年',
  },
];
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
    sales: 80,
  },
  {
    type: '进口食品',
    sales: 65,
  },
  {
    type: '食品饮料',
    sales: 52,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
  {
    type: '美容洗护1',
    sales: 130,
  },
  {
    type: '母婴用品1',
    sales: 90,
  },
  {
    type: '进口食品1',
    sales: 56,
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
  label: {
    // 可手动配置 label 数据标签位置
    position: 'middle',
    // 'top', 'bottom', 'middle',
    // 配置样式
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
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
const salesList = [
  {
    name: '工专路 0 号店',
    number: '323,234',
  },
  {
    name: '工专路 1 号店',
    number: '323,234',
  },
  {
    name: '工专路 2 号店',
    number: '323,234',
  },
  {
    name: '工专路 3 号店',
    number: '323,234',
  },
  {
    name: '工专路 4 号店',
    number: '323,234',
  },
  {
    name: '工专路 5 号店',
    number: '323,234',
  },
  {
    name: '工专路 6 号店',
    number: '323,234',
  },
];

const SalesAndviews = () => {
  const [activeTabKey, setActiveTabKey] = useState('sales');
  const [activeDatetabkey, setActiveDatetabkey] = useState('day');

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };
  const onDatetabChange = (key) => {
    setActiveDatetabkey(key);
  };

  return (
    <>
      <Card
        style={{
          width: '100%',
        }}
        bodyStyle={{ padding: '32px 32px 0 32px' }}
        tabBarExtraContent={
          <>
            {datetab.map(({ key, tab }) => {
              return (
                <span
                  onClick={() => onDatetabChange(key)}
                  className={classNames(
                    styles.datetab,
                    key === activeDatetabkey ? styles.active : '',
                  )}
                  key={key}
                >
                  {tab}
                </span>
              );
            })}
            <RangePicker />
          </>
        }
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        <Row>
          <Col span={16}>
            <Column {...config} style={{ height: 295 }} />
          </Col>
          <Col span={8}>
            <div className={styles.salesRank}>
              <h4>门店销售额排名</h4>
              <ul className={styles.rankingList}>
                {salesList.map(({ name, number }, index) => {
                  return (
                    <li key={name}>
                      <span className={classNames(styles.ranking, index <= 2 ? styles.active : '')}>
                        {index}
                      </span>
                      <span className={styles.rankingTitle}>{name}</span>
                      <span>{number}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default SalesAndviews;
