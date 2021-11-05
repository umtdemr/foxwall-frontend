import React from "react";
import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type ProviderProps = { children: React.ReactElement };

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: "#FF6600",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      ...(mode === "light"
        ? {
            primary: "rgba(0,0,0,0.87)",
            secondary: "rgba(0,0,0,0.54)",
          }
        : {
            primary: "rgba(255,255,255, 0.87)",
            secondary: "rgba(255,255,255, 0.54)",
          }),
    },
  },
});

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const CustomThemeProvider = ({ children }: ProviderProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  React.useEffect(() => {
    let body = document.querySelector("body") as HTMLBodyElement;
    // ...
  }, [mode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;
