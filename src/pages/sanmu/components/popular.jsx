import {
  CaretDownOutlined,
  CaretUpOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Card, Col, Dropdown, Menu, message, Row, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import styles from './popular.less';

const hClick = ({ key }) => {
  message.info(`Click on item ${key === '1' ? '操作一' : '操作二'}`);
};

const menu = (
  <Menu
    onClick={hClick}
    items={[
      {
        key: '1',
        label: '操作一',
      },
      {
        key: '2',
        label: '操作二',
      },
    ]}
  />
);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Popular = () => {
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
    <Card
      title="线上热门搜索"
      extra={
        <Dropdown overlay={menu} placement="bottomRight">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <EllipsisOutlined style={{ color: '#000' }} />
            </Space>
          </a>
        </Dropdown>
      }
    >
      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <div className={styles.numberInfo}>
            <div className={styles.numberInfoSubTitle}>
              <span>
                搜索用户数
                <InfoCircleOutlined style={{ marginLeft: 10 }} />
              </span>
            </div>
            <div className={styles.numberInfoValue}>
              <span>12,321</span>
              <span className={styles.subTotal}>
                17.1
                <CaretUpOutlined style={{ color: 'red' }} />
              </span>
            </div>
          </div>
          <Area height={45} {...config} />
        </Col>
        <Col span={12}>
          <div className={styles.numberInfo}>
            <div className={styles.numberInfoSubTitle}>
              <span>
                人均搜索次数
                <InfoCircleOutlined style={{ marginLeft: 10 }} />
              </span>
            </div>
            <div className={styles.numberInfoValue}>
              <span>2.7</span>
              <span className={styles.subTotal}>
                26.2
                <CaretDownOutlined style={{ color: 'green' }} />
              </span>
            </div>
          </div>
          <Area height={45} {...config} />
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={tableData}
        size={'small'}
        pagination={{ position: 'topLeft' }}
      />
    </Card>
  );
};

export default Popular;
