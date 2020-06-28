import React from 'react';
import CSS from 'csstype';

export const Loading = (): JSX.Element => {
    const styles: CSS.Properties = {
      position: "fixed",
      top: "50%",
      left: "50%",
      fontSize: "2rem"
    };
    return (
      <div style={styles}>
        <span role="img" aria-label="loading…">🙈</span>
      </div>
    );
}