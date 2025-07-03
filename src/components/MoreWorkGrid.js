import React from "react";
import { Grid, Box } from "@mui/material";

export default function MoreWorkGrid({ isDarkMode }) {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      mt: 4, 
      maxWidth: '100%',
      width: '100%',
      margin: '0 auto'
    }}>
      {/* Top row */}
      <Grid container spacing={2} sx={{ height: '757px' }}>
        {/* Left column - two small boxes (50% width) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6} md={12} sx={{ height: { xs: '100%', md: '50%' } }}>
              <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                <div className="more-work-image-placeholder">
                  <img
                    src="/work1.png"
                    alt="Work 1"
                    className="more-work-image"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={12} sx={{ height: { xs: '100%', md: '50%' } }}>
              <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                <div className="more-work-image-placeholder">
                  <img
                    src="/work2.png"
                    alt="Work 2"
                    className="more-work-image"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        
        {/* Right column - tall box (50% width, 666x757) */}
        <Grid item xs={12} md={6}>
          <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '98%' }}>
            <div className="more-work-image-placeholder">
              <img
                src="/work3.png"
                alt="Work 3"
                className="more-work-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      
      {/* Bottom row - two boxes with different widths */}
      <Grid container spacing={2} sx={{ height: '400px' }}>
        <Grid item xs={12} md={4}>
          <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
            <div className="more-work-image-placeholder">
              <img
                src="/work4.png"
                alt="Work 4"
                className="more-work-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
            <div className="more-work-image-placeholder">
              <img
                src="/work5.png"
                alt="Work 5"
                className="more-work-image"
                style={{ width: "100%", height: "100%", objectFit: "inherit" }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
