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
      <Grid container spacing={2} sx={{ height: '757px', mb: 2 }}>
        {/* Left column - two small boxes (50% width) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={6} md={12} sx={{ height: { xs: '100%', md: 'calc(50% - 8px)' } }}>
              <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                <div className="more-work-image-placeholder"></div>
              </div>
            </Grid>
            <Grid item xs={6} md={12} sx={{ height: { xs: '100%', md: 'calc(50% - 8px)' } }}>
              <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
                <div className="more-work-image-placeholder"></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        
        {/* Right column - tall box (50% width, 666x757) */}
        <Grid item xs={12} md={6}>
          <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '97%' }}>
            <div className="more-work-image-placeholder"></div>
          </div>
        </Grid>
      </Grid>
      
      {/* Bottom row - two boxes with different widths */}
      <Grid container spacing={2} sx={{ height: '400px' }}>
        <Grid item xs={12} md={4}>
          <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
            <div className="more-work-image-placeholder"></div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className={`more-work-item ${!isDarkMode ? 'light-mode' : ''}`} style={{ height: '100%' }}>
            <div className="more-work-image-placeholder"></div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
