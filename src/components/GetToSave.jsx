import { NavLink } from "react-router-dom";

const ToSavePage = () => {
  return (
    <div className="fixed top-[150px] left-[50px]">
      <NavLink to={`/saved-lessons`}>To Saved lessons</NavLink>
    </div>
  );
};

export default ToSavePage;
