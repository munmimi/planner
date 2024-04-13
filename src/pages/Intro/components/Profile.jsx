import React from "react";

const Profile = () => {
  return (
    <div className="intro-profile">
      <ul className="intro-profile_arcordian">
        <li>
          <h2>Git Hub</h2>
          <div>
            <p>Check out my Github <span>https://github.com/munmimi</span></p>
          </div>
        </li>
        <li>
          <h2>Profile</h2>
          <div>
            <p>A newcomer Developer, munjieun</p>
            <p>Passionate about Design& Development</p>
            <p>Becoming an Artistic Developer</p>
          </div>
        </li>
        <li>
          <h2>Contact</h2>
          <div>
            <p>Contact with Google <span>mun.mimi925@gmail.com</span></p>
            <p>Contact with Naver <span>m_mimi@naver.com</span></p>
          </div>
        </li>
      </ul>
      <p className="intro-profile_img"></p>
    </div>
  );
};

export default Profile;
