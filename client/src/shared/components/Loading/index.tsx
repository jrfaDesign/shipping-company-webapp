import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Container } from "./styles";
interface Props {
  height?: string;
}

const Loading = ({ height }: Props) => {
  return (
    <Container height={height}>
      <Box sx={{ display: "flex", color: "#2E5D9F" }}>
        <CircularProgress color={"inherit"} size={60} />
      </Box>
    </Container>
  );
};

export default Loading;
