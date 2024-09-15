import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    // window.location.href = "https://medicalchatbot1.streamlit.app/";
    window.location.href = "http://127.0.0.1:8080/";

  }, []);

  return null; // Return null as there is no content to render in this component
};

export default Chat;
