import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import LocationVN from './LocationVN.json';

const { Option } = Select;

const ProvincePicker = props => {
  let cityOptions = [];
  const [districtInSelectedCity, setDistrictInSelectedCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();

  for (let city of Object.values(LocationVN)) {
    cityOptions.push(city);
  }

  //Set city when open form edit
  useEffect(() => {
    setSelectedCity(props.city);
  }, [props.city]);

  //set district
  const mapDistrictToArray = districts => {
    let result = [];
    for (let district of Object.values(districts)) {
      result.push({ name: district });
    }
    return result;
  };

  //set district when Select city
  useEffect(() => {
    for (let city of Object.values(LocationVN)) {
      if (city.name === selectedCity) {
        setDistrictInSelectedCity(mapDistrictToArray(city.districts));
        return true;
      }
    }
  }, [selectedCity]);

  //custom options
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
  return (
    <Row gutter={20} justify="center">
      <Col sm={8} md={8} xl={8} xs={24}>
        <Form.Item
          label="Địa chỉ"
          name="detailsAddress"
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}>
          <Input placeholder="Số nhà, đường/tổ, thôn, phường/xã " />
        </Form.Item>
      </Col>
      <Col sm={8} md={8} xl={8} xs={24}>
        <Form.Item
          label="Tỉnh/Thành phố"
          name="city"
          rules={[{ required: true, message: 'Vui lòng chọn tỉnh/thành phố!' }]}>
          <Select
            showSearch
            value={selectedCity}
            placeholder="Chọn Tỉnh/Thành phố"
            onChange={val => {
              props.form.setFieldsValue({ ...props.form.getFieldsValue(), district: '' });
              setSelectedCity(val);
            }}>
            {optionCityRendered}
          </Select>
        </Form.Item>
      </Col>
      <Col sm={8} md={8} xl={8} xs={24}>
        <Form.Item
          label="Quận/Huyện"
          name="district"
          rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}>
          <Select
            showSearch
            placeholder="Chọn Quận/Huyện"
            value={selectedDistrict}
            onChange={val => {
              setSelectedDistrict(val);
            }}>
            {optionDistrictRendered}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ProvincePicker;
