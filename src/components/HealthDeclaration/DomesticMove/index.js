import { Button, Checkbox, Col, DatePicker, Form, Image, Input, message, Row, Select } from 'antd';
import captcha from 'assets/images/captcha.png';
import LocationVN from 'components/HealthDeclaration/ProvincePickerWithWard/LocationVN.json';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { numberValidator } from 'utils/validator';
import BasicInfo from '../BasicInfo';
import ContactInVietnam from '../ContactInVietnam';
import styles from './index.module.less';
import StatusWithin14Days from '../StatusWithin14Days';

const { Option } = Select;

const DomesticMove = () => {
  const [form] = Form.useForm();
  const [isHidden, setIsHidden] = useState(false);

  const cityOptions = useMemo(() => {
    const tmp = LocationVN.map(data => {
      return (
        <Option key={data['name']} value={data['name']}>
          {data['name']}
        </Option>
      );
    });
    return tmp;
  }, []);

  const handleSubmit = () => {
    const { captcha } = form.getFieldsValue();
    console.log(captcha);
    if (captcha === 'W68HP') {
      message.success('Bạn đã gửi thành công!');
      form.resetFields();
    } else {
      message.error('Mã bảo mật không đúng');
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      ...form.getFieldValue(),
      vehicle: 'plane',
      departureDate: moment(),
    });
  }, []);
  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item>
        <Checkbox style={{ fontWeight: '600' }}>Khai hộ</Checkbox>
      </Form.Item>
      <div style={{ margin: '10px 0 20px' }}>
        <strong>Di chuyển trong nước</strong>
      </div>
      <Row gutter={20}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Phương tiện đi lại"
            name="vehicle"
            rules={[{ required: true, message: 'Bạn chưa chọn phương tiện' }]}>
            <Select
              onSelect={value => {
                if (value !== 'plane') setIsHidden(true);
                else setIsHidden(false);
              }}>
              <Option value="plane">Máy bay</Option>
              <Option value="train">Tàu hỏa</Option>
              <Option value="coach">Xe khách</Option>
              <Option value="ship">Tàu thuyền</Option>
              <Option value="personal">Cá nhân</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            hidden={isHidden}
            label="Mã hiệu chuyến bay"
            name="flightCode"
            rules={[{ required: true, message: 'Bạn chưa nhận mã hiệu chuyến bay' }]}>
            <Input placeholder="Nhập mã hiệu chuyến bay" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Nơi đi"
            name="departure"
            rules={[{ required: true, message: 'Bạn chưa chọn nơi đi' }]}>
            <Select placeholder="Nơi xuất phát">{cityOptions}</Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Điểm đi"
            name="pointOfDeparture"
            rules={[{ required: true, message: 'Bạn chưa nhập điểm đi' }]}>
            <Input placeholder="Nhập địa điểm cụ thể" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Nơi đến"
            name="destination"
            rules={[{ required: true, message: 'Bạn chưa chọn nơi đến' }]}>
            <Select placeholder="Nơi đến">{cityOptions}</Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Điểm đến"
            name="pointOfDestination"
            rules={[{ required: true, message: 'Bạn chưa nhập điểm đến' }]}>
            <Input placeholder="Nhập địa điểm cụ thể" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label="Số phương tiện"
            name="idVehicle"
            rules={[
              { required: true, message: 'Bạn chưa nhập số phương tiện' },
              { validator: numberValidator },
            ]}>
            <Input placeholder="Nhập số phương tiện" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Số ghế" name="idSeat" rules={[{ validator: numberValidator }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item label="Ngày khởi hành" name="departureDate" rules={[{ required: true }]}>
            <DatePicker style={{ padding: '4px 11px', width: '100%' }} format="DD/MM/YYYY" />
          </Form.Item>
        </Col>
      </Row>
      <BasicInfo />
      <ContactInVietnam form={form} />
      <StatusWithin14Days />
      <Row gutter={20}>
        <Col xs={12} md={10} lg={5}>
          <Form.Item
            label="Mã bảo mật"
            name="captcha"
            rules={[{ required: true, message: 'Bạn chưa nhập mã bảo mật' }]}>
            <Input placeholder="Nhập mã bảo mật" />
          </Form.Item>
        </Col>
        <Col xs={8} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Image src={captcha} width={100} height={34} />
          </div>
        </Col>
      </Row>
      <div style={{ color: '#f00', margin: '20px 0 30px' }}>
        Dữ liệu bạn cung cấp hoàn toàn bảo mật và chỉ phục vụ cho việc phòng chống dịch, thuộc quản
        lý của Ban chỉ đạo quốc gia về Phòng chống dịch Covid-19. Khi bạn nhấn nút "Gửi" là bạn đã
        hiểu và đồng ý.
      </div>
      <Col
        xs={24}
        sm={{ span: 12, offset: 6 }}
        md={{ span: 8, offset: 8 }}
        lg={{ span: 6, offset: 9 }}>
        <Form.Item>
          <Button block size="large" type="primary" htmlType="submit">
            Gửi tờ khai
          </Button>
        </Form.Item>
      </Col>
    </Form>
  );
};

export default DomesticMove;
