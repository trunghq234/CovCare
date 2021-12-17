import { Row, Form, Col, Checkbox, Divider, Space } from 'antd';
import React from 'react';
import styles from './index.module.less';

const Category = () => {
  return (
    <Form.Item label="Chọn mục cần hỗ trợ" name="category" required={true}>
      <Checkbox.Group>
        <Space direction="vertical">
          <Checkbox value={1} className={styles.item}>
            <span className={styles['category-name']}>Lương thực</span> (Gạo, bánh mỳ, thịt, cá,
            trứng, ...)
          </Checkbox>
          <Checkbox value={2} className={styles.item}>
            <span className={styles['category-name']}>Nhu yếu phẩm </span>
            (Bột giặt, giấy vệ sinh, mắm, muối, ...)
          </Checkbox>
          <Checkbox value={3} className={styles.item}>
            <span className={styles['category-name']}>Vật dụng y tế </span>
            (Thuốc, nước kháng khuẩn, nhiệt kế, ...)
          </Checkbox>
        </Space>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default Category;
