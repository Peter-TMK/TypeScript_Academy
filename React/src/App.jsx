// import React from "react";

const Header = () => {
  return <h2>Fun facts about React</h2>;
};

const Body = () => {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Ws originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps including mobile apps.</li>
    </ul>
  );
};

const Logo = () => <img width="80px" src="../react_logo.png" />;

const App = () => {
  return (
    <>
      <Logo />
      <Header />
      <Body />
    </>
  );
};
export default App;
