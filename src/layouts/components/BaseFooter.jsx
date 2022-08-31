import styles from './BaseFooter.less';

const BaseFooter = () => {
  return (
    <div className={styles.BaseFooter}>
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        className={styles.icpLink}
        rel="noreferrer"
      >
        京 ICP 备 2022024018号
      </a>
    </div>
  );
};

export default BaseFooter;
