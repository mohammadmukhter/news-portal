import React from "react";

import moment from "moment";
const Header = () => {
  return (
    <div className="text-center">
      <h2>News Portal</h2>
      <div>
        <small>Journalism Without Fear or Favour</small>
      </div>
      <div>
        <small>{moment().format("LLLL")}</small>
      </div>
    </div>
  );
};

export default Header;
