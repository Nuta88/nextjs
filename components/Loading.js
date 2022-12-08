import { Spin } from 'antd';

const styles = {
  position: 'absolute',
  top: 'calc(50% - 60px)',
  left: 'calc(50% - 60px)'
};

export const Loading = (props) => <Spin tip="Loading" size="large" {...props} style={styles} />;
