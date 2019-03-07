import React, { useContext } from "react";
import ThemeContext from "../../provider/Theme/ThemeContext";

const Tester = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => changeTheme("bright")}>Change Theme</button>
    </div>
  );
};

export default Tester;
