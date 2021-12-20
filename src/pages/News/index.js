import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Modal, notification, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import NewsContent from 'components/News/NewsContent';
import SubcribeForm from 'components/News/SubcribeForm';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const VNEXPRESS_NEWS =
  'https://gw.vnexpress.net/ar/get_rule_2?category_id=1004765&limit=50&page=1&data_select=title,share_url,thumbnail_url,lead,publish_time';

const News = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = useForm();

  useEffect(() => {
    axios
      .get(VNEXPRESS_NEWS)
      .then(res => {
        setData(
          res.data.data['1004765'].data.sort(
            (first, second) => first.publish_time > second.publish_time
          )
        );
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="banner" style={{ marginTop: '60px' }}>
        <Row gutter={[20, 10]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h1 className="title">Tin tức</h1>
            <p>
              Cập nhật liên tục về tình hình bệnh viêm phổi do virus Corona (COVID-19) gây ra để mọi
              người được biết.
            </p>
          </Col>
          <Col xs={0} md={10} lg={12} xl={16} />
          <Col xs={14} sm={6} md={4} xl={4}>
            <Button size="large" type="primary" block onClick={() => setVisible(true)}>
              Đăng ký tin tức
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <NavLink to="/home">
              <Button
                size="large"
                style={{ color: '#2A81EA', paddingLeft: '0px' }}
                type="text"
                block
                ghost>
                Tìm hiểu về COVID-19
                <ArrowRightOutlined />
              </Button>
            </NavLink>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: '-120px' }}>
        {data.map(item => {
          return <NewsContent key={item.article_id} data={item} />;
        })}
      </div>
      <Modal
        title="Đăng ký nhận tin tức"
        cancelText="Thoát"
        okText="Đăng ký"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={() => {
          form.validateFields().then(values => {
            form.resetFields();
            setVisible(false);
            notification.success({
              message: 'Bạn đã đăng ký nhận tin thành công!',
            });
          });
        }}>
        <SubcribeForm form={form} />
      </Modal>
    </div>
  );
};

export default News;
