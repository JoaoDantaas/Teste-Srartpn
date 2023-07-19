import HomeProvider from "./HomeProvider";
import LoginProvider from "./LoginProvider";
import RegisterProvider from "./RegisterProvider";

const Provider = ({ children }) => {
  return (
    <LoginProvider>
      <RegisterProvider>
        <HomeProvider>{children}</HomeProvider>
      </RegisterProvider>
    </LoginProvider>
  );
};

export default Provider;
