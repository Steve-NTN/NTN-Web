import React, { useState } from "react";
// import axios from 'axios';
import { useSelector } from "react-redux";
import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
// import { reduceCart, addCart } from '../../actions/cartAction';
import { validateCommon } from "../../../../helpers";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ConfirmForm from "./components/ConfirmForm";
import NeedLogin from "../NeedLogin";

const Cart = () => {
  const token = useSelector((state) => state.userReducer?.token);
  const cart = useSelector((state) => state.cartReducer?.cart);
  const [openDia, setOpenDia] = useState(false);
  const [diaContent, setdiaContent] = useState();

  const getTotal = () => {
    let total = 0;
    cart?.map((c) => {
      total += c?.quantity * c?.product_price;
      return c;
    });
    return total;
  };

  return (
    <>
      {!token ? (
        <>
          <NeedLogin />
        </>
      ) : (
        <Box
          my={4}
          mx={{ md: 2, xs: 1 }}
          textAlign="center"
          display={cart.length < 1 ? "flex" : "block"}
          alignItems="center"
          justifyContent={"center"}
        >
          {cart.length < 1 ? (
            <Typography variant="h5">
              Giỏ hàng đang trống. Vui lòng chọn sản phẩm.
            </Typography>
          ) : (
            <>
              <Typography variant="h5">Giỏ hàng của tôi</Typography>
              <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ "& p": { fontWeight: 600 } }}>
                      <TableCell>Sản phẩm</TableCell>
                      <TableCell>Giá</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell>Tổng</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart &&
                      cart.map((row, index) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Box display="flex">{row?.product_name}</Box>
                          </TableCell>
                          <TableCell>
                            {validateCommon(row.product_price, "money")}
                          </TableCell>
                          <TableCell>
                            <UpdateBox row={row} cart={cart} />
                          </TableCell>
                          <TableCell>
                            {validateCommon(
                              `${row.product_price * row.quantity}`,
                              "money"
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box my={4} textAlign="right">
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                  Tổng tiền: <span>{validateCommon(getTotal(), "money")}</span>
                </Typography>
                <Button
                  onClick={() => {
                    setdiaContent(
                      <ConfirmForm
                        setdiaContent={(x) => setdiaContent(x)}
                        accept={() => setdiaContent(<SuccessfulForm />)}
                        close={() => setOpenDia(false)}
                      />
                    );
                    setOpenDia(true);
                  }}
                  sx={{
                    mt: 2,
                    backgroundColor: "#000",
                    color: "#fff",
                    p: 2,
                    "&:hover": {
                      backgroundColor: "#000",
                    },
                  }}
                >
                  Thanh toán
                </Button>
              </Box>
            </>
          )}
        </Box>
      )}
      <Dialog
        open={openDia}
        onClose={() => setOpenDia(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "85%",
          },
        }}
      >
        <DialogContent>{diaContent}</DialogContent>
      </Dialog>
    </>
  );
};

const SuccessfulForm = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={600} align="center">
        Đang chờ cửa hàng xác nhận thông tin
      </Typography>
    </>
  );
};

const UpdateBox = ({ row, cart }) => {
  // const dispatch = useDispatch();
  console.log(row, cart);

  return (
    <Box display="flex" justifyContent={"center"} alignItems="center">
      <IconButton onClick={() => console.log(row)}>
        <RemoveIcon />
      </IconButton>
      <Typography>{row?.quantity}</Typography>
      <IconButton onClick={() => console.log(row)}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default Cart;
