import Header from '@/components/Header';
import styles from '@/styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header>
        <h1>Welcome to our vibrant online world!</h1>
      </Header>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero labore provident ratione amet accusantium voluptas velit doloremque obcaecati consequatur tempora hic laborum, voluptatem voluptate quidem repellat blanditiis dicta fuga accusamus!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero labore provident ratione amet accusantium voluptas velit doloremque obcaecati consequatur tempora hic laborum, voluptatem voluptate quidem repellat blanditiis dicta fuga accusamus!</p>
      </div>
    </div>
  );
};
export default Home;
