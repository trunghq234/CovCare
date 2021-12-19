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
          <Input />
        </Form.Item>
      </Col>
      <Col sm={8} md={8} xl={8} xs={24}>
        <Form.Item
          label="Thành phố"
          name="city"
          rules={[{ required: true, message: 'Vui lòng chọn thành phố!' }]}>
          <Select
            showSearch
            value={selectedCity}
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

// import { Col, Form, Input, Row, Select } from 'antd';
// import React, { useState } from 'react';
// import { LocationVN } from './LocationVN';

// const { Option } = Select;

// const ProvincePicker = props => {
//   const [selectedDistrict, setSelectedDistrict] = useState();

//   return (
//     <Row gutter={[48, 0]}>
//       <Col xl={16} lg={16} md={12} sm={14} xs={14}>
//         <Form.Item
//           label="Địa chỉ"
//           name="detailsAddress"
//           rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}>
//           <Input />
//         </Form.Item>
//       </Col>
//       <Col xl={8} lg={8} md={8} sm={10} xs={10}>
//         <Form.Item
//           label="Quận"
//           name="district"
//           rules={[{ required: true, message: 'Vui lòng chọn quận/huyện!' }]}>
//           <Select
//             showSearch
//             value={selectedDistrict}
//             onChange={val => {
//               setSelectedDistrict(val);
//             }}>
//             {LocationVN.map(item => (
//               <Option key={item.key} value={item.key}>
//                 {item.quan}
//               </Option>
//             ))}
//           </Select>
//         </Form.Item>
//       </Col>
//     </Row>
//   );
// };

// export default ProvincePicker;
