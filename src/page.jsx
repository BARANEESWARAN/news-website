
import 'antd/dist/antd.css';
 import './custom.css'
import { UploadOutlined } from '@ant-design/icons';

import React from 'react';
import { Button,Upload,Card,Col,Row ,Input,Form,Select} from 'antd';

import { CheckCircleFilled } from '@ant-design/icons';

const { Option } = Select;











const UpdateDetails = () => {


  return (
    <div className='main'>
      <Card className='maincard'>
    <h3 className='pageheader'>2-Entity Details Capture</h3>
   <br></br>

            <Row className="documentuploadrow1">
            <Col xs={4} lg={4}  md={4} sm={4} >
   <Upload  className="upload">

    <Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
      <div className='uploadicon'>  <UploadOutlined /></div>
      <div className='insidelabel-one'>Entity PAN<span style={{color:"black"}}>*</span></div>
    <div className='insidelabel-two'>
   (PNG/JPEG maximum size 3MB)</div></Button>
     </Upload>
    </Col>
    </Row>

    <Row className='documentuploadrow2'>
    <div className='antd-icon'>
    <CheckCircleFilled/>
    </div>
      <Col>
 <br></br>

 <h3 >CO-APPLICANT DETAILS</h3></Col>
 
 <hr className='coapplicanthr'></hr>
 </Row>
 
<br></br>
<Row  className='documentuploadrow1'>
  <Col className='collone'md={{span: 5 }}   sm={8} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 1 PAN<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    </Col>
    
    
    
    
    
    
   
  <Col  className='colltwo'  md={{span: 5, offset: 1 }}   sm={8} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 1 Aadhaar<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    

  </Col>

  <Col className='collthree'  md={{span: 5, offset: 1 }}  sm={8} xs={24} lg={5}>
  <label className="mobilenolabel">
                  Mobile No. <b className="red-star" >*</b>
                  </label>
  <input  className='mobileinput'/>

  </Col>
 
  <Col  className='collfour'  md={{span: 5,offset:1 }}   sm={8} xs={24}  lg={5}>
  <label  className="emaillabel">
                Email Id <b className="red-star" >*</b>
                  </label>
  <input    className='emailinput'/>


  </Col>
</Row>

 
<br></br>
<Row  className='documentuploadrow1'>
  <Col className='collone'md={{span: 5 }}   sm={8} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 2 PAN<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    </Col>
    
    
    
    
    
    
   
  <Col  className='colltwo'  md={{span: 5, offset: 1 }}   sm={8} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 2 Aadhaar<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    

  </Col>

  <Col className='collthree'  md={{span: 5, offset: 1 }}  sm={8} xs={24} lg={5}>
  <label className="mobilenolabel">
                  Mobile No. <b className="red-star" >*</b>
                  </label>
  <input  className='mobileinput'/>

  </Col>
 
  <Col  className='collfour'  md={{span: 5,offset:1 }}   sm={8} xs={24}  lg={5}>
  <label  className="emaillabel">
                Email Id <b className="red-star" >*</b>
                  </label>
  <input    className='emailinput'/>


  </Col>
</Row>

<br></br>
<Row  className='documentuploadrow1'>
  <Col className='collone'md={{span: 5 }}   sm={8} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 3 PAN<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    </Col>
    
    
    
    
    
    
   
  <Col  className='colltwo'  md={{span: 5, offset: 1 }}   sm={8} xs={24} lg={5}>
    <br></br>
    <Upload  className="upload">

<Button className='uploadbtn'showUploadList={false} name="logo" listType="picture" beforeUpload={() => false} accept="image/x-png,image/jpeg">
  <div className='uploadicon'>  <UploadOutlined /></div>
  <div className='insidelabel-one'>Co-Applicant 3 Aadhaar<span style={{color:"black"}}>*</span></div>
<div className='insidelabel-two'>
(PNG/JPEG maximum size 3MB)</div></Button>
 </Upload>

    

  </Col>

  <Col className='collthree'  md={{span: 5, offset: 1 }}  sm={8} xs={24} lg={5}>
  <label className="mobilenolabel">
                  Mobile No. <b className="red-star" >*</b>
                  </label>
  <input  className='mobileinput'/>

  </Col>
 
  <Col  className='collfour'  md={{span: 5,offset:1 }}   sm={8} xs={24}  lg={5}>
  <label  className="emaillabel">
                Email Id <b className="red-star" >*</b>
                  </label>
  <input    className='emailinput'/>


  </Col>
</Row>

<br></br>
<Row className='addcoapplicant'>
  <Col>

  <Button className='addbtn'  ><b>+ </b> Add Co-Applicant</Button>

  </Col>

</Row>
<br></br>
<br></br>



<Row >
  <Col  md={{span:6 }} sm={12} xs={{span:4}}   >
    
 
    
    <Button className='primarybtn'>Previous</Button>


</Col>





  

 
  <Col md={{span:2,offset:15 }} sm={{span:2,offset:9}} xs={{span:4}} >
 
 
  <Button className='secondarybtn'> Save and Next</Button>
  
  </Col>
</Row>



</Card>












    </div>
  );
};
export default UpdateDetails;