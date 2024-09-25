import withAuthentication from "../utils/withAuthentications";
import withDarkMode from "../utils/withDarkMode";

const Dashboard = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default withDarkMode(withAuthentication(Dashboard));
