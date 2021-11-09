import React from "react";
import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeDark, themeLight } from "../../../theme/theme";

import usePersistedState from "../../hooks/persist-state";

type ProviderProps = { children: React.ReactElement };

const getDesignTokens = (mode: PaletteMode) => ({
  ...(mode === "light" ? { ...themeLight } : { ...themeDark }),
});

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  current: "",
});

const CustomThemeProvider = ({ children }: ProviderProps) => {
  const [mode, setMode] = usePersistedState<string>("theme", "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    [setMode]
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider
      value={{ toggleColorMode: colorMode.toggleColorMode, current: mode }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default CustomThemeProvider;
