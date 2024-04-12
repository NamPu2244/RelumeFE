import { Box } from "@mui/material";
import React from "react";
import VisitorHeader from "../../../atoms/homePage/homePageVisitor/VisitorHeader";
import VisitorSubtitle from "../../../atoms/homePage/homePageVisitor/VisitorSubtitle";
import InputField from "../../../atoms/homePage/homePageVisitor/visitorField/InputField";
import ButtonSend from "../../../atoms/homePage/homePageVisitor/visitorField/ButtonSend";
import VisitorCaption from "../../../atoms/homePage/homePageVisitor/VisitorCaption";

function Visitor() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div>
          <Box sx={{ textAlign: "center" }}>
            <VisitorHeader />
            <VisitorSubtitle />

            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 3,
                }}
              >
                <InputField />
                <ButtonSend />
              </Box>
            </div>

            <VisitorCaption/>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Visitor;
