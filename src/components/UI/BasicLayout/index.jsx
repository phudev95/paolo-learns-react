import { Sidebar } from "../../Sidebar";
// import PropTypes from "prop-types";

export const BasicLayout = ({ children }) => {
  return (
    <div className="basic-layout">
      <div className="basic-layout--sidebar">
        <Sidebar />
      </div>
      <div className="basic-layout--content">{children}</div>
    </div>
  );
};

// BasicLayout.propTypes = {
//   children: PropTypes.any.isRequired
// };
