import React from "react";
import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeDark, themeLight } from "../../../theme/theme";

type ProviderProps = { children: React.ReactElement };

const getDesignTokens = (mode: PaletteMode) => ({
  ...(mode === "light" ? { ...themeLight } : { ...themeDark }),
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

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;
