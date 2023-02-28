import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MoreInfoStyle from './more-info.module.css'

export const MoreInfoTabs=({propTabs}) =>{
  const[isLogin,setIsLogin]=useState(true)
  return (
    <>
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-5"
    >
      <Tab eventKey="home" title="مشخصات">
        <p>{propTabs.subtitle}</p>
        <p>جنس: {propTabs.material}</p>
        <p>جنس: {propTabs.desc}</p>
      </Tab>
      <Tab eventKey="profile" title="دیدگاه ها">
        {isLogin ? (
       <>
       <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"> دیدگاه شما:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='دیدگاه خود را بیان کنید'></textarea>
        </div>
        <div className="col-auto">
          <button type="submit"  className={`${MoreInfoStyle['btn']}`}> ثبت دیدگاه</button>
        </div>
       </form>
       </>
        ) : (<p>وارد سایت شوید</p>)}
      </Tab>
      <Tab eventKey="contact" title="پرسش ها" >
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"> پرسش شما:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='درباره این کالا چه پرسشی دارید؟'></textarea>
        </div>
        <div className="col-auto">
          <button type="submit"  className={`${MoreInfoStyle['btn']}`}> ثبت پرسش</button>
        </div>
       </form>
      </Tab>
    </Tabs>
   </>
  );
}

 