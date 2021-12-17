import { Card, Col, Form, Radio, Row } from 'antd';
import React from 'react';

const StatusWithin14Days = () => {
  return (
    <Col span={24}>
      <Row gutter={20}>
        <Col xs={24} sm={20}>
          <strong>
            Trong vòng 14 ngày qua, Anh/Chị có đến tỉnh/thành phố, quốc gia/vùng lãnh thổ nào (Có
            thể đi qua nhiều nơi)
          </strong>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Radio.Group defaultValue="no">
              <Radio value="no">Không</Radio>
              <Radio value="yes">Có</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col xs={24} sm={20}>
          <strong>
            Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện ít nhất 1 trong các dấu hiệu: sốt, ho,
            khó thở, viêm phổi, đau họng, mệt mỏi không?
          </strong>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Radio.Group defaultValue="no">
              <Radio value="no">Không</Radio>
              <Radio value="yes">Có</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col xs={24} style={{ margin: '20px 0' }}>
          <strong>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với:</strong>
        </Col>
        <Col span={24} style={{ marginBottom: '30px' }}>
          <Card>
            <Row gutter={20} style={{ marginRight: '-26px' }}>
              <Col xs={24} sm={19} md={20}>
                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Radio.Group defaultValue="no">
                    <Radio value="no">Không</Radio>
                    <Radio value="yes">Có</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={19} md={20}>
                Người từ nước có bệnh COVID-19
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Radio.Group defaultValue="no">
                    <Radio value="no">Không</Radio>
                    <Radio value="yes">Có</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col xs={24} sm={19} md={20}>
                Người có biểu hiện (Sốt, ho, khó thở , Viêm phổi)
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Radio.Group defaultValue="no">
                    <Radio value="no">Không</Radio>
                    <Radio value="yes">Có</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default StatusWithin14Days;
