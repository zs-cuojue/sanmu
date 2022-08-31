import styles from './RootLayout.less';

import BaseHeader from './components/BaseHeader';
import BaseFooter from './components/BaseFooter';

const RootLayout = ({ children }) => {
  return (
    <div className={styles['root-layout']}>
      <BaseHeader />
      <div className={styles.baseView}>{children}</div>
      <BaseFooter />
    </div>
  );
};

export default RootLayout;
