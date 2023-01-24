import React, { useState } from 'react'
import { Typography, Modal, Card, CardContent, TextField, InputAdornment } from '@mui/material';
import '../Mypage.css';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import concertimg from '../../detail/concertimg.gif';
import { publicListing, privateListing } from "../../api/listing";

export const SellModal = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cost, setCost] = useState({
    cost : 0
  });
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ConfirmationNumberIcon onClick={handleOpen}/> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className='mypage_modal' sx={{ maxWidth: 500 }}>
          <CardContent>
            <div className='modal_line'/>
            <h2 className='modal_title'>내 티켓 판매하기</h2>
            <div className='modal_imgtext'>
              <div className='modal_img'>
                <img src = {concertimg} alt='concertimg'/>
              </div>
              <Typography className='modal_text1'>CONCERT</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>CRUSH ON YOU TOUR ［CRUSH HOUR］ ENCORE</Typography>
            </div>
            <div className='modal_info'>
              <Typography variant="h6" sx={{ mt: 2 }}>티켓 정보</Typography>
              <div className='ticketinfo_box'>
                <Typography>토큰ID | 23454353</Typography>
                <Typography sx={{ mt: 1 }}>관람일시 | 2023.01.27 14:00 1회</Typography>
                <Typography sx={{ mt: 1 }}>예매일 | 2023.01.20</Typography>
                <Typography sx={{ mt: 1 }}>예매자명 | 홍길동</Typography>
                <Typography sx={{ mt: 1 }}>좌석 | VIP석</Typography>
                <Typography sx={{ mt: 1 }}>구매 금액 | 130,000원</Typography>
              </div>
              <TextField
                id="modal_price"
                label="희망 가격"
                type="number"
                variant="standard"
                onChange={
                  (e) => {setCost(e.target.value)                  
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">원</InputAdornment>,
                }}
              />
              <div className='modal_line2'/>
              <ErrorOutlineIcon color="error"/>
              <Typography sx={{ mt: 1 }}>- 희망 가격은 구매 가격을 초과할 수 없습니다.</Typography>
              <Typography sx={{ mt: 1 }}>- 판매 완료된 후에는 취소할 수 없습니다.</Typography>
              <Typography sx={{ mt: 1 }}>- 상품을 올리기 전, 반드시 주의 사항을 확인하시기 바랍니다.</Typography>
            </div>
            <div className='modal_line'/>
            <button 
            className='modal_btn'
            onClick={() => {
              publicListing({
                owner : "0x6DE9c88ECbAa488C63A50b6A516feA6aa7c2F23A",
                tokenId : 2,
                cost : cost
              })  
            }}
            >완 료</button>
          </CardContent >
        </Card>
      </Modal>
    </div>
  )
}
