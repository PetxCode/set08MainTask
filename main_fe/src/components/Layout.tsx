import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sider from "./Sider";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Sider />
        <Holder>
          <Div>
            <Outlet />
          </Div>
        </Holder>
      </Main>
    </div>
  );
};

export default Layout;

const Div = styled.div`
  width: calc(100% - 200px);
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
  margin-top: 20px;
`;

const Main = styled.div`
  display: flex;
`;
