type EmptyMessageProps = {
  message: string;
  shortmessage: string;
};
const EmptyMessage = ({ message, shortmessage }: EmptyMessageProps) => {
  return (
    <>
      {
        <p style={{ fontWeight: "bold", margin: "auto", fontSize: "4rem" }}>
          {message}
          <br />
          <span style={{ color: "grey", fontSize: "2rem" }}>
            {shortmessage}
          </span>
        </p>
      }
    </>
  );
};
export default EmptyMessage;
