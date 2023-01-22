import React, { useState } from 'react'
import { Typography, Modal, Card, CardContent } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import '../Marketplace.css';
import concertimg from '../../detail/concertimg.gif';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const BuyOnsaleModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const date = new Date();
  return (
    <div>
      <LocalMallIcon onClick={handleOpen} className='modal_icon'/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className='mypage_modal' sx={{ maxWidth: 500 }}>
          <CardContent>
            <div className='modal_line'/>
            <h2 className='modal_title'>세일 티켓 구매</h2>
            <div className='modal_imgtext'>
              <div className='modal_img'>
                <img src = {concertimg} alt='concertimg'/>
              </div>
              <Typography className='modal_text1'>CONCERT</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>CRUSH ON YOU TOUR ［CRUSH HOUR］ ENCORE</Typography>
            </div>
            <div className='modal_info'>
              <Typography variant="h6" sx={{ mt: 2 }}>티켓 정보 확인</Typography>
              <div className='ticketinfo_box'>
                <Typography>관람일시 | 2023.01.27 </Typography>
                <Typography sx={{ mt: 1 }}>예매일 | {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}</Typography>
                <Typography sx={{ mt: 1 }}>예매자명 | 홍길동</Typography>
                <Typography sx={{ mt: 1 }}>좌석 | VIP석</Typography>
              </div>
              <Typography variant="h6" sx={{ mt: 2 }}>결제 금액 | KRW 130,000</Typography>
              <div className='modal_line2'/>
              <ErrorOutlineIcon color="error"/>
              <Typography sx={{ mt: 1 }}>- 티켓 정보를 꼭 확인하시기 바랍니다.</Typography>
              <Typography sx={{ mt: 1 }}>- 구매 완료 후, 내역확인 밎 취소가 가능합니다. </Typography>
              <Typography sx={{ mt: 1 }}>- 구매 진행 전, 반드시 주의 사항을 확인하시기 바랍니다.</Typography>
            </div>
            <div className='modal_line'/>
            <button className='modal_btn'>구 매 하 기</button>
          </CardContent >
        </Card>
      </Modal>
    </div>
  )
}