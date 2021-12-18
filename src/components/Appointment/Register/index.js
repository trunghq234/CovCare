import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Row,
  Select,
  TimePicker,
  Breadcrumb,
} from 'antd';
import doctor from 'assets/images/doctor.png';
import LocationVN from 'assets/others/LocationVN.json';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './index.module.less';

const { Option } = Select;
const { TextArea } = Input;

const RegisterAppointment = props => {
  const history = useHistory();
  let cityOptions = [];
  const [form] = Form.useForm();
  const [districtInSelectedCity, setDistrictInSelectedCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();

  for (let city of Object.values(LocationVN)) {
    cityOptions.push(city);
  }

  const mapDistrictToArray = districts => {
    let result = [];
    for (let district of Object.values(districts)) {
      result.push({ name: district });
    }
    return result;
  };
  useEffect(() => {
    for (let city of Object.values(LocationVN)) {
      if (city.name === selectedCity) {
        setDistrictInSelectedCity(mapDistrictToArray(city.districts));
        return true;
      }
    }
  }, [selectedCity]);

  const renderOptions = dataList => {
    if (dataList.length) {
      return dataList.map(data => {
        return (
          <Option key={data['name']} value={data['name']}>
            {data['name']}
          </Option>
        );
      });
    }
    return null;
  };
  const optionCityRendered = renderOptions(cityOptions);
  const optionDistrictRendered = renderOptions(districtInSelectedCity);
  const handleSubmit = () => {
    notification.success({
      message: 'Thành công',
      description: `Đặt lịch khám thành công`,
    });
    history.push('/appointment');
  };
  return (
    <div>
      <div className={styles.breadcrumb} s>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./">Lịch khám</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="register">Đặt lịch khám</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Đặt lịch khám</h2>
      </div>
      <div>
        <Card className={styles.container}>
          <Row gutter={[20, 20]}>
            <Col md={10}>
              <img src={doctor} alt="" style={{ maxHeight: 600 }}></img>
            </Col>
            <Col md={14}>
              <div className={styles[`right-content`]}>
                <h2>Đặt lịch khám Online</h2>
                <Form layout="vertical" form={form} onFinish={handleSubmit}>
                  <Row gutter={(20, 20)}>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Họ và tên"
                        name="displayName"
                        rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}>
                        <Input placeholder="Họ và tên" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="CMND/CCCD/HC"
                        name="idNumber"
                        onKeyPress={event => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập số CMND/CCCD/HC!',
                          },
                        ]}>
                        <Input placeholder="CMND/CCCD/HC" />
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Ngày hẹn khám"
                        name="date"
                        rules={[{ required: true, message: 'Vui lòng chọn ngày hẹn khám!' }]}>
                        <DatePicker
                          format={'DD / MM / YYYY'}
                          placeholder="Ngày hẹn khám"
                          style={{ width: '100%' }}></DatePicker>
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Giờ hẹn"
                        name="time"
                        rules={[{ required: true, message: 'Vui lòng chọn giờ hẹn!' }]}>
                        <TimePicker
                          placeholder="Giờ hẹn"
                          format={'HH : mm'}
                          style={{ width: '100%' }}></TimePicker>
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Địa chỉ email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: 'email',
                            message: 'Vui lòng nhập đủ, đúng định dạng!',
                          },
                        ]}>
                        <Input placeholder="Email"></Input>
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Số điện thoại"
                        name="phoneNumber"
                        onKeyPress={event => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        rules={[
                          {
                            required: true,
                            message: 'Vui lòng nhập số điện thoại!',
                          },
                        ]}>
                        <Input placeholder="Số điện thoại"></Input>
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Tỉnh/Thành phố"
                        name="city"
                        rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố!' }]}>
                        <Select
                          value={selectedCity}
                          placeholder="Tỉnh/Thành phố"
                          onChange={val => {
                            form.setFieldsValue({
                              ...form.getFieldsValue(),
                              district: '',
                            });
                            setSelectedCity(val);
                          }}>
                          {optionCityRendered}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                      <Form.Item
                        label="Quận/Huyện"
                        name="district"
                        rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}>
                        <Select
                          value={selectedDistrict}
                          placeholder="Quận/Huyện"
                          onChange={val => {
                            setSelectedDistrict(val);
                          }}>
                          {optionDistrictRendered}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Lời nhắn" name="description">
                        <TextArea
                          allowClear
                          maxLength="255"
                          placeholder="Mô tả vấn đề bạn gặp phải hoặc lời nhắn"
                          autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={16}></Col>
                    <Col sm={24} xs={24} md={8}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%', height: '50px' }}>
                        Xác nhận đặt lịch
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default RegisterAppointment;
