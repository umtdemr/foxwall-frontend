import React, { useState, useEffect } from "react";

import { Container, Grid } from "@mui/material";
import SideBar from "../sidebar/sidebar_component";
import BottomNav from "../bottom-nav/bottom-nav.component";
import LeftSideBar from "../sidebar/left_sidebar.component";

const Layout: React.FC = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>();
  const [isMobile, setIsMobile] = useState(false);

  const handleScreenSizeChange = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener('resize', handleScreenSizeChange);
    return () => {
      window.removeEventListener('resize', handleScreenSizeChange);
    }
  }, [])

  return (
    <Container style={{ paddingBottom: isMobile ? "80px": "20px" }}>
      <Grid container justifyContent="center" spacing={2}>
        {
          !isMobile && (
            <Grid item md={3} className="left_sidebar__wrapper">
              <LeftSideBar />
            </Grid>
          )
        }
        <Grid item md={6} xs={12}>
          {children}
        </Grid>
        {
          !isMobile && (<Grid item md={3} xs={12}>
              <SideBar />
            </Grid>
          ) 
        }
      </Grid>
      {
        isMobile && <BottomNav></BottomNav>
      }
    </Container>
  );
};

export default Layout;
