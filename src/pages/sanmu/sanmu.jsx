import { GridContent } from '@ant-design/pro-components';
import { Col, Row } from 'antd';
import NumberOfPayments from './components/numberOfPayments';
import Operation from './components/operation';
import Popular from './components/popular';
import Proportion from './components/proportion';
import SalesAndviews from './components/salesAndviews';
import TotalSales from './components/totalSales';
import Views from './components/views';

const Sanmu = () => {
  return (
    <GridContent>
      <Row gutter={24}>
        <Col span={6}>
          <TotalSales />
        </Col>
        <Col span={6}>
          <Views />
        </Col>
        <Col span={6}>
          <NumberOfPayments />
        </Col>
        <Col span={6}>
          <Operation />
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <SalesAndviews />
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Popular />
        </Col>
        <Col span={12}>
          <Proportion />
        </Col>
      </Row>
    </GridContent>
  );
};

export default Sanmu;
