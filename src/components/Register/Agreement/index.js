import { Button, Card, Checkbox } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';

const Agreement = () => {
  const rules = [
    'Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn. Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy định.',
    'Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin AstraZeneca có thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.',
    'Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều trị kịp thời.',
  ];
  const [isAgree, setIsAgree] = useState(false);
  return (
    <Card>
      <ol className={styles.content}>
        {rules.map(rule => (
          <li>{rule}</li>
        ))}
      </ol>
      <Checkbox onClick={e => setIsAgree(e.target.checked)}>Đồng ý tiêm chủng</Checkbox>
      <Button type="primary" size="large" block disabled={!isAgree}>
        Xác nhận
      </Button>
    </Card>
  );
};

export default Agreement;
