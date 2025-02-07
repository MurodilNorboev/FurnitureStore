import love from "../../assets/love.svg";
import { AnimatedButton, BtnWrap } from "../styles/navbar";
import { useNavigate } from "react-router-dom";

export default function IconCheckboxes() {
  const navigate = useNavigate();


  return (
    <BtnWrap>
      <AnimatedButton onClick={() => navigate("/likes")}>
        <img src={love} alt="" style={{ paddingBottom: "8px" }} />
      </AnimatedButton>
    </BtnWrap>
  );
}