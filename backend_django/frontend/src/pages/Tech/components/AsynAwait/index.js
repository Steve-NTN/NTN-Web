import { Box, Button } from "@mui/material";
import React from "react";

// import the socket
import useStyles from "./styles";

const AsynAwait = () => {
  const classes = useStyles;

  const handleStart = async () => {
    document.getElementById("img1").src = "";
    console.log("waiting 1");
    setTimeout(2000)
    await fetch(
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    )
      .then((res) => {
        document.getElementById("img1").src =
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
      })
      .catch((err) => {
        console.log(err);
      });

    document.getElementById("img2").src = "";
    setTimeout(2000)

    await fetch(
      "https://media.gettyimages.com/id/1288844330/photo/first-person-point-of-view-of-a-woman-paddling-on-a-stand-up-paddle-board.jpg?s=612x612&w=gi&k=20&c=nkN_b8gJhYTu9qNT_TeiFtUgrzR4Tu7QWS7mYK5I84k="
    )
      .then((res) => {
        document.getElementById("img2").src =
          "https://media.gettyimages.com/id/1288844330/photo/first-person-point-of-view-of-a-woman-paddling-on-a-stand-up-paddle-board.jpg?s=612x612&w=gi&k=20&c=nkN_b8gJhYTu9qNT_TeiFtUgrzR4Tu7QWS7mYK5I84k=";
      })
      .catch((err) => {
        console.log(err);
      });

    document.getElementById("img3").src = "";
    setTimeout(2000)

    await fetch(
      "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
    )
      .then((res) => {
        document.getElementById("img3").src =
          "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box className={classes.imgBox}>
        <img src="" id="img1" alt="img" />
        <img src="" id="img2" alt="img" />
        <img src="" id="img3" alt="img" />
      </Box>
      <Button variant="variant" onClick={handleStart}>
        Start
      </Button>
    </div>
  );
};

export default AsynAwait;
