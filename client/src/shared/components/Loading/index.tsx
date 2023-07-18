import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Container } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  height?: string;
}

const Loading = ({ height }: Props) => {
  const theme = useTheme();
  return (
    <Container height={height}>
      <Box sx={{ display: "flex", color: theme.colors.lightBlue }}>
        <CircularProgress color={"inherit"} size={60} />
      </Box>
    </Container>
  );
};

export default Loading;
