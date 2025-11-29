import { useNavigate } from "react-router-dom";

const BackLink = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="fixed top-[200px] left-[50px]">
      <button
        onClick={goBack}
        className="text-black hover:text-gray-800 font-medium cursor-pointer"
      >
        ← Back
      </button>
    </div>
  );
};

export default BackLink;
