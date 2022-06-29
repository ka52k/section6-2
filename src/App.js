// import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";
// import { Router } from "./router/Router";
// import { UserProvider } from "./providers/UserProvider";
// import { RecoilRoot } from "recoil";

const user = {
  name: "ka53k",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "test@test.com",
  phone: "0000-12-3456",
  company: {
    name: "kk株式会社"
  },
  website: "http://kk.co.jp"
};

export default function App() {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
    // <BrowserRouter>
    //     <DefaultLayout>
    // <PrimaryButton>テスト</PrimaryButton>
    //       {/* <PrimaryButton>検索</PrimaryButton> */}
    //       <SecondaryButton>検索</SecondaryButton>
    //       <br />
    // <SearchInput />
    //       <UserCard user={user} />
    //     </DefaultLayout>
    // </BrowserRouter>
    // <RecoilRoot>
    //   <UserProvider>
    //     <Router />
    //   </UserProvider>
    // </RecoilRoot>
  );
}
