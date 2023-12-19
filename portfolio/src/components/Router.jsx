import { Route, Routes } from "react-router-dom";
import { NoCookie, IsCookie, Access, Main, Profile, Project, SideNav } from ".";

const Router = () => {
  return (
    <Routes>
      <Route element={<NoCookie />}>
        <Route element={<Access />} path="/set" />
      </Route>
      <Route element={<IsCookie />}>
        <Route element={<SideNav />} path="/">
          <Route element={<Main />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Project />} path="/project" />
        </Route>
      </Route>
    </Routes>
  );
};

export { Router };
