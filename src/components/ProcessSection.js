import React from "react";
import "../styles/ProcessSection.css";

export default function ProcessSection({ isDarkMode, processData }) {
  const renderContent = (item) => {
    if (Array.isArray(item.content)) {
      return (
        <ol className={`process-list ${!isDarkMode ? "light-mode" : ""}`}>
          {item.content.map((point, index) => (
            <li
              key={index}
              className={`process-list-item ${!isDarkMode ? "light-mode" : ""}`}
            >
              {point}
            </li>
          ))}
        </ol>
      );
    } else {
      return (
        <p className={`process-description ${!isDarkMode ? "light-mode" : ""}`}>
          {item.content}
        </p>
      );
    }
  };

  if (!processData) {
    return null;
  }

  return (
    <div className={`process-section ${!isDarkMode ? "light-mode" : ""}`}>
      <div className="process-container">
        <h2 className={`process-title ${!isDarkMode ? "light-mode" : ""}`}>
          Process
        </h2>
        <div className="process-content">
          {processData.map((item, index) => (
            <div key={index} className="process-item">
              {item.heading && (
                <h3
                  className={`process-heading ${
                    !isDarkMode ? "light-mode" : ""
                  }`}
                >
                  {item.heading}
                </h3>
              )}
              {item.content && renderContent(item)}
              {item.images && item.images.length > 0 && (
                <div className="process-images">
                  {item.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img.src}
                      alt={img.alt || "Process illustration"}
                      className="process-image"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
