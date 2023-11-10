import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";

function SendEmail() {
  const location = useLocation();
  const data = { ...location.state };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jq3trkm",
        "template_pmpc56j",
        form.current,
        "nXJOAXErytPFc_Sug"
      )
      .then(
        result => {
          alert("성공적으로 이메일이 전송되었습니다.");
        },
        error => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
    window.location.href = `/userBlackboard/${url}`;
  };
  const form = useRef();

  const [email, setEamil] = useState("");
  const getEmail = email => {
    setEamil(email);
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="title" value={data.title} />
      <input type="text" name="graduateDate" value={data.graduateDate} />
      <input
        type="text"
        name="url"
        value={`https://congchugraduate.netlify.app/userBlackboard/${data.url}`}
      />
      <Input
        title={"칠판을 받아보실 이메일"}
        maxcount={999999999}
        font="Pretendard"
        placeholder={"example@example.com"}
        getValue={getEmail}
        showInputCount={false}
      />
      <button>제출하기</button>
    </form>
  );
}

export default SendEmail;