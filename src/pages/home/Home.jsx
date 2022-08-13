import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
};

export default Home;
