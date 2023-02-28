import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import footerStyle from './footer.module.css'
import { BsTelegram,BsInstagram ,BsWhatsapp,BsTwitter,BsFillEnvelopeFill} from "react-icons/bs";
import locationImg from './location.jpg'
import { FaArrowCircleUp } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
export const Footer = () => {
  return (
    <>
    <Container fluid className={`${footerStyle['footer-container']} mt-0`}>
        <Row className='px-2 py-4'>
			<Col xs={12} lg={5}>
				<Row>
					<h4 className='fs-5 py-3 text-center fw-bold border-bottom'>
						<span className={`${footerStyle['border-img']}`}>اطلاعات تماس</span>
					</h4>
				</Row>
				<Row>
					<Col className=' mx-auto'>
						<p className='mt-5'><b>آدرس کارخانه :</b> آزادراه کرج قزوین - شهرک صنعتی هشتگرد</p>
						<p><b>ساعات کاری :</b> شنبه تا چهارشنبه ۸ الی ۱۷ - پنجشنبه ۸ الی  ۱۳</p>
						<p><b>پست الکترونیک :</b> safiraco@yahoo.com</p>
						<p><b> تلفن : </b>۴۴۲۲۲۰۰۱ _۰۲۶</p>
						<p><b>تلفکس : </b>۴۴۲۲۶۸۰۱ _۰۲۶</p>
					</Col>
				</Row>	
					
					
            </Col>    
            <Col xs={12} lg={4} className=''>
					<h4 className='text-center fs-5 fw-bold py-3 mb-5 border-bottom'>شبکه های اجتماعی</h4>
					<Row className="footer-social mt-5">
						<ul className="list-group list-group-flush d-flex flex-row  justify-content-around">
							<li className="list-group-item bg-transparent border-0 px-0" ><a href="mailto:support@aeingostar.com" target="new" className={`${footerStyle['envelope']} ${footerStyle['social-icon']} p-3  d-flex`}><BsFillEnvelopeFill /></a></li>
							<li className="list-group-item bg-transparent  border-0 px-0"><a href="https://www.instagram.com/aeingostar" target="new" className= {`${footerStyle['instagram']} ${footerStyle['social-icon']} p-3  d-flex`}><BsInstagram className='text-dark'/> </a></li>
							<li className="list-group-item  bg-transparent border-0 px-0"><a href="http://t.me/aeingostar" target="new" className={`${footerStyle['twitter']}  ${footerStyle['social-icon']} p-3 d-flex`}><BsTwitter /></a></li>
							<li className="list-group-item  bg-transparent border-0 px-0"><a href="https://https://wa.me/989106863782" target="new" className={`${footerStyle['whatsapp']}  ${footerStyle['social-icon']} p-3 d-flex`} ><BsWhatsapp /></a></li>
							<li className="list-group-item bg-transparent border-0 px-0" ><a href="https://twitter.com/alialikhani07"  target="new" className={`${footerStyle['telegram']}  ${footerStyle['social-icon']} p-3  d-flex`}><BsTelegram /></a></li>
						</ul>
					</Row>
			</Col>
			<Col xs={12} lg={3} className='d-flex justify-content-center mt-5 align-items-center'>
				<Row>
					<Col>
						<img src={locationImg} alt='' className='rounded img-fluid'/>
					</Col>
				</Row>
			</Col>
        </Row>
		
		<OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">برو بالا</Tooltip>}
        >
		<a href='#top' className='go-up'> 
			<FaArrowCircleUp className='fs-1 '/>
		</a>
        </OverlayTrigger>
    </Container>
    </>
  )
}
