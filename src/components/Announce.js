import React from "react";
import Logo from "./assets/notification-bell.svg";
import Announcement from "react-announcement";

const Announce = () => {
  return (
    <Announcement
      title="Notification: Smart Contract Requirements Updated"
      subtitle="View details of updates..."
      link="https://github.com/kristofferandreasen/react-announcement"
      imageSource={Logo}
      daysToLive={3}
      secondsBeforeBannerShows={5}
      closeIconSize={30}
    />
  );
};

export default Announce;
