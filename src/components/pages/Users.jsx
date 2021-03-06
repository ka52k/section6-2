// import React, { useContext } from "react";
// import React from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
// import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useLocation } from "react-router-dom";
// import { useRecoilState } from "recoil";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
// import { userState } from "../../store/userState";

// const user = {
//   name: "ka53k",
//   image: "https://source.unsplash.com/NE0XGVKTmcA",
//   email: "test@test.com",
//   phone: "0000-12-3456",
//   company: {
//     name: "kk株式会社"
//   },
//   website: "http://kk.co.jp"
// };
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ka53k${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "test@test.com",
    phone: "0000-12-3456",
    company: {
      name: "kk株式会社"
    },
    website: "http://kk.co.jp"
  };
});

export const Users = () => {
  // const { state } = useLocation();
  // const {isAdmin} = state ? state.isAdmin : false;
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // const [userInfo, setUserInfo] = useRecoilState(userState);

  // const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      {/* <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton> */}
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
