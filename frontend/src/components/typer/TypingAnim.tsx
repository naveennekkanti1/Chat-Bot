import { TypeAnimation } from "react-type-animation";

const MedicalChatBotTypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome to Medical ChatBot 🩺",
        1000,
        "Ask me anything about your health!",
        2000,
        "I can help with symptoms, conditions, and more.",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default MedicalChatBotTypingAnim;
