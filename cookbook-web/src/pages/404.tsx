import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const Exception404Page: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back to Home
      </Button>
    }
  />
);

export default Exception404Page;
