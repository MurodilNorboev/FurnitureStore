import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box } from "@mui/joy";
import { Button, TextField } from "@mui/material";
import { BottomBtn, Chescout_containerWrapper, Chescout_one, Chescout_Top, Content_chesckout, For_PartnerCon, For_PartnerConetent, For_PartnerContainter } from '../../FOOTER/for_partners/for_partner.Style'
import circlebtn from '../../assets/circlewhite.svg'

const MyComponent = () => {
  const [comment, setComment] = React.useState("");
  const [text, setText] = React.useState(""); 
  const [email, setEmail] = React.useState("");
  const [question, setQuestion] = React.useState(""); 
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<"success" | "error">(
    "success"
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m4t5v1d",
        "template_ahjdy59",
        {
          user_name: text, 
          user_email: email, 
          user_comment: question, 
        },
        "jSN7HYs8ebbzEF7Ox"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSeverity("success");
          // setOpen(true);
          setText("");
          setEmail("");
          setQuestion("");
        },
        (error) => {
          console.error(error.text);
          setSeverity("error");
          // setOpen(true);
        }
      );
  };

  return (
    <Chescout_Top className="Chescout_Top top" style={{paddingTop:"90px",border:"1px solid red"}}       
    onSubmit={handleSend}>
        <Chescout_one>
                  {/* <Box
                    className="box"
                    component="form"
                    onSubmit={handleSend}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      borderRadius: "12px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#f5f5f5",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                    > */}
                    <TextField
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Your Name"
                      required
                      sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                      }}
                    />
                    <TextField
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                      sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                      }}
                    />
                    <TextField
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Write Your Question?"
                      required
                      multiline
                      rows={5}
                      sx={{
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#7F4D4F",
                        color: "#fff",
                        padding: "12px 24px",
                        fontWeight: "bold",
                        "&:hover": { backgroundColor: "#5f3a3b" },
                      }}
                    >
                      send request  <img src={circlebtn} alt="" />
                    </Button>
                  {/* </Box> */}
        </Chescout_one>
    </Chescout_Top>
  );
};

export default MyComponent;










