import './topbar.css';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">ladaadmin</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
