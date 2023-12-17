import Logo from "shared/components/Logo";

import Toast from "~/shared/components/Toast";

import { Wrapper } from "./styles";
import HeaderInteractionsButtons from "./components/HeaderInteractionsButtons";
import { useAppSelector } from "~/store/hooks";

const Header = () => {
  const toast = useAppSelector((state) => state.toast.toast);

  return (
    <Wrapper>
      <Logo />
      <HeaderInteractionsButtons />

      <>
        <Toast isVisible={toast.isVisible} message={toast.message} severity={toast.severity} />
      </>
    </Wrapper>
  );
};

export default Header;
