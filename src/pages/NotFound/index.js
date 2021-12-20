import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

const NotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi. Trang này hiện đang không tồn tại."
        extra={
          <Link to="/home">
            <Button size="large" type="primary">
              Back to home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
