import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#292827",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <CirclesWithBar
          height="250"
          width="200"
          color=" var(--emphasis-text)"
          outerCircleColor="var(--emphasis-text)"
          innerCircleColor="var(--emphasis-text)"
          barColor="var(--emphasis-text)"
          ariaLabel="circles-with-bar-loading"
          visible={true}
        />
      </div>
      )}
    </>
  );
};

export default Loader;
