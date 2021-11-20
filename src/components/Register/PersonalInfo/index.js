import React, { useState } from 'react';
import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import ProvincePicker from 'components/common/ProvincePicker';
import { useForm } from 'antd/lib/form/Form';
import TypingSelect from 'components/common/TypingSelect';
import country from 'constants/Country.json';
import ethnicity from 'constants/Ethnicity.json';
import prority from 'constants/Priority.json';
import vaccine from 'constants/Vaccine.json';
import vaccineLocation from 'constants/VaccinceLocation.json';
import styles from './index.module.less';
import { validateMessages } from 'constants/ValidationMessage';

const { Option } = Select;
const { TextArea } = Input;

const PersonalInfo = ({ next }) => {
  const [form] = useForm();
  const [city, setCity] = useState('');
  const [ordinal, setOrdinal] = useState(1);
  const notice = [
    'Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin COVID - 19',
    'Xin vui lòng kiểm tra kỹ các thông tin bắt buộc (VD: Họ và tên, Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/Mã định danh công dân/HC ...)',
    'Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý chịu trách nhiệm với các thông tin đã cung cấp.',
    'Nếu bạn dưới 18 tuổi, vui lòng nhập số điện thoại của người giám hộ để tra cứu',
  ];
  return (
    <Card>
      <Form form={form} layout="vertical" validateMessages={validateMessages}>
        <Row gutter={[20, 10]}>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item
              name="ordinalOfInjection"
              label="Đăng kí mũi tiêm thứ"
              rules={[{ required: true }]}>
              <Select
                placeholder="Đăng kí mũi tiêm thứ"
                allowClear
                showSearch
                onChange={value => setOrdinal(value)}>
                <Option value="1">Mũi tiêm thứ nhất</Option>
                <Option value="2">Mũi tiêm tiếp theo</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <h4>1. Thông tin người đăng ký tiêm</h4>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="name" label="Họ và tên" rules={[{ required: true }]}>
              <Input placeholder="Họ và tên" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="dob" label="Ngày sinh" rules={[{ required: true }]}>
              <DatePicker placeholder="Ngày/Tháng/Năm" format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="gender" label="Giới tính" rules={[{ required: true }]}>
              <Select placeholder="Giới tính" allowClear showSearch>
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="phoneNumber" label="Số điện thoại" rules={[{ required: true }]}>
              <InputNumber placeholder="Số điện thoại" controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={16} xl={12}>
            <Form.Item
              name="id"
              label="Số CMND/CCCD/Mã định danh công dân/HC"
              rules={[{ required: true }]}>
              <InputNumber placeholder="Số CMND/CCCD/Mã định danh công dân/HC" controls={false} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
              <Input placeholder="Email" type="email" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="bhyt" label="Số thẻ BHYT">
              <Input placeholder="Số thẻ BHYT" />
            </Form.Item>
          </Col>
          <ProvincePicker city={city} form={form} onChange={setCity} />
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="ethnicity" label="Dân tộc" rules={[{ required: true }]}>
              <TypingSelect placeholder="Dân tộc" list={ethnicity} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="nationality" label="Quốc tịch" rules={[{ required: true }]}>
              <TypingSelect placeholder="Quốc tịch" defaultValue="Viet Nam" list={country} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} lg={16} xl={12}>
            <Form.Item name="priority" label="Đối tượng ưu tiên" rules={[{ required: true }]}>
              <TypingSelect
                placeholder="Đối tượng ưu tiên"
                defaultValue="Viet Nam"
                list={prority}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h4>2. Thông tin đăng ký tiêm chủng</h4>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="preferDate" label="Ngày muốn được tiêm (dự kiến)">
              <DatePicker placeholder="Ngày/Tháng/Năm" format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8} xl={6}>
            <Form.Item name="session" label="Buổi tiêm">
              <Select placeholder="Buổi tiêm" showSearch>
                <Option value="morning">Buổi sáng</Option>
                <Option value="afternoon">Buổi chiều</Option>
                <Option value="allday">Cả ngày</Option>
              </Select>
            </Form.Item>
          </Col>
          {ordinal === '2' ? (
            <>
              <Col span={24}>
                <h4>3. Lịch sử tiêm mũi thứ 1</h4>
              </Col>
              <Col xs={24} sm={12} lg={8} xl={6}>
                <Form.Item name="vaccine" label="Tên vaccine" rules={[{ required: true }]}>
                  <TypingSelect placeholder="Tên vaccine" defaultValue="Viet Nam" list={vaccine} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} lg={8} xl={6}>
                <Form.Item name="vaccinatedDate" label="Ngày tiêm" rules={[{ required: true }]}>
                  <DatePicker placeholder="Ngày/Tháng/Năm" format={'DD/MM/YYYY'} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} lg={8} xl={12}>
                <Form.Item name="vaccineLocation" label="Điểm tiêm" rules={[{ required: true }]}>
                  <TypingSelect
                    placeholder="Tên vaccine"
                    defaultValue="Viet Nam"
                    list={vaccineLocation}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="lastReaction" label="Phản ứng sau tiêm">
                  <TextArea placeholder="Phản ứng sau tiêm" rows={4} />
                </Form.Item>
              </Col>
            </>
          ) : (
            ''
          )}
          <Col span={24} className={styles.notice}>
            <h4>Lưu ý:</h4>
            <ul>
              {notice.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={4}>
            <Button
              className={styles.btn}
              htmlType="submit"
              type="primary"
              block
              size="large"
              onClick={() => {
                form.validateFields().then(values => {
                  form.resetFields();
                  next();
                });
              }}>
              Tiếp tục
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default PersonalInfo;
