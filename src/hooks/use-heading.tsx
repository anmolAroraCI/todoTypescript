const useHeading = (heading:string):JSX.Element => {
  return (
    <>
      <h3
        style={{
          color: "white",
          margin: "auto",
          display: "block",
          textAlign: "center",
          fontSize: "3rem",
          marginTop: "1rem",
        }}
      >
        {heading}
      </h3>
    </>
  );
};
export default useHeading;
