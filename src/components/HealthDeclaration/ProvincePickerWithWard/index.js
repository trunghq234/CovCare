import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import LocationVN from './LocationVN.json';

const { Option } = Select;

const ProvincePickerWithWard = ({ city, form }) => {
  let cityOptions = [];
  const [districtOptions, setDistrictOptions] = useState([]);
  const [wardOptions, setWardOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedWard, setSelectedWard] = useState();

  for (let item of Object.values(LocationVN)) {
    cityOptions.push(item);
  }

  //set district when Select city
  useEffect(() => {
    if (selectedCity) {
      const city = cityOptions.find(element => element.name === selectedCity);
      setDistrictOptions(city.districts);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedDistrict && districtOptions.length > 0) {
      const district = districtOptions.find(element => element.name === selectedDistrict);
      if (district) {
        setWardOptions(district.wards);
      }
    }
  }, [selectedDistrict]);
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
  const optionDistrictRendered = renderOptions(districtOptions);
  const optionWardRendered = renderOptions(wardOptions);
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Form.Item
          label="Tỉnh/Thành phố"
          name="city"
          rules={[{ required: true, message: 'Bạn chưa chọn tỉnh, thành phố' }]}>
          <Select
            showSearch
            value={selectedCity}
            placeholder="Chọn"
            onSelect={val => {
              setSelectedCity(val);
              form.setFieldsValue({ ...form.getFieldsValue(), district: '', ward: '' });
            }}>
            {optionCityRendered}
          </Select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Huyện/Quận"
          name="district"
          rules={[{ required: true, message: 'Bạn chưa chọn quận, huyện' }]}>
          <Select
            showSearch
            value={selectedDistrict}
            placeholder="Chọn"
            onSelect={val => {
              setSelectedDistrict(val);
              form.setFieldsValue({ ...form.getFieldsValue(), ward: '' });
            }}>
            {optionDistrictRendered}
          </Select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Phường/xã"
          name="ward"
          rules={[{ required: true, message: 'Bạn chưa chọn phường, xã' }]}>
          <Select
            showSearch
            value={selectedWard}
            placeholder="Chọn"
            onSelect={val => {
              setSelectedWard(val);
            }}>
            {optionWardRendered}
          </Select>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Số nhà, phố, tổ dân phố/thôn/đội"
          name="detailsAddress"
          rules={[{ required: true, message: 'Bạn chưa nhập địa chỉ' }]}>
          <Input placeholder="Ví dụ: 66/17/15 HT45" style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ProvincePickerWithWard;
