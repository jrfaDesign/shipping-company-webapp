import Logo from "shared/components/Logo";

import Toast from "~/shared/components/Toast";

import useToastStore from "~/hooks/stores/toast";

import { Wrapper } from "./styles";
import HeaderInteractionsButtons from "./components/HeaderInteractionsButtons";

const Header = () => {
  const toast = useToastStore((state) => state.toast);

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
