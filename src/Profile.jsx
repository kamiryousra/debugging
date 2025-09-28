    import React from "react";

const Profile = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2> {/* BUG 1: 'name' not passed */}
      <p>Age: {age}</p>
    </div>
  );
};

export default Profile;
