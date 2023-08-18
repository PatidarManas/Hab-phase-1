import React from 'react'
import img from "./ambulance.svg"
import img1 from "./icon.png"
import main from "./main.svg"
import overview from "./overview.svg"
import {  AiOutlineArrowDown} from "react-icons/ai"
const Home = () => {
  function downhandler(){
    document.getElementById('overview').scrollIntoView();
  }
  return (
    <div style={{ backgroundColor: "#FFFFFF", fontFamily: "Inter" }} className='min-h-screen flex flex-col'>


      <div id="header" style={{ backgroundColor: "#B2E2FF", fontFamily: "Inter" }} className='flex px-4 lg:px-36 py-4 justify-between text-xl  font-bold '>
        <div style={{ color: "#1774AC" }} className='text-2xl' id='logo' >HAB</div>
        <div className='hidden md:flex gap-6 font-normal text-base	leading-4	' id='btn1-header'>
          <button onClick={()=>{ document.getElementById('overview').scrollIntoView();}} >overview</button>
          <button onClick={()=>{ document.getElementById('services').scrollIntoView();}}>services</button>
          <button onClick={()=>{ document.getElementById('testimonials').scrollIntoView();}}>testimonials</button>
          <button onClick={()=>{ document.getElementById('getintouch').scrollIntoView();}}>get in touch</button>
        </div>
        <div className='hidden sm:flex gap-6 font-normal' id='btn2-header'>
          <button className='bg-white  font-normal rounded-lg px-6 py-2' onClick={()=>{alert("Under Development")}}>Login</button>
          <button style={{ backgroundColor: "#5BC1FF" }} onClick={()=>{alert("Under Development")}} className=' font-normal rounded-lg px-6 py-2'>Join Us-&gt;</button>

        </div>
      </div>
      <div id='main' className='px-4 lg:px-36 flex flex-col'>
      <div className='flex flex-col-reverse md:flex-row'>

        <div style={{ minHeight: "82vh" }} id="main-left" className='flex flex-col gap-5  md:justify-center w-full md:w-2/3  '>
          <div className='text-4xl md:text-6xl font-bold	' >Hope Across Borders</div>
          <p className='text-base font-semibold	w-8/12 '>Access to the Best Healthcare Facilities, No Matter Where You Are We help you find and navigate the best healthcare options for your needs, anywhere in the world.</p>
          <button onClick={()=>{alert("Under Development")}} style={{ backgroundColor: "#5BC1FF" }} className=' font-semibold rounded-lg px-6 py-4 text-xl  w-36'>Join Us-&gt;</button>

        </div>
        <div className='py-8 md:py-0 md:w-5/12 flex justify-center'><img alt=" " className="" src={main}></img></div>
      </div>
        <div className='animate-bounce rounded-full w-8 h-16 border border-black  flex self-center cursor-pointer' onClick={()=>{downhandler()}}><AiOutlineArrowDown size={28} className='self-center'/></div>
      </div>
      <div id='overview' className='flex flex-col gap-10 py-16 px-4 lg:px-36'>
        <div className='flex text-3xl font-semibold justify-center '>Overview</div>
        <div className='flex flex-col-reverse md:flex-row gap-5'>

        <p className='w-full md:w-7/12 font-semibold	text-xl leading-7 text-justify'>We Humans suffer from ailments from time to time. In unfortunate circumstances, the remedy requires severe medical treatment and hospitalisation. No disease & illness is stopped by the geographical borders created by humans…so why should the remedy stop at any borders? We at hope across borders understand & believe that the access to best health care facilities is the Right of Every Citizen across the globe. www.infven.biz/hab Hope Across Borders (HAB) is an initiative designed keeping the beneficiary in mind. Every step, every process speaks of quality, clarity, and ease-of-use. From appointments to a consultation to getting advice or community support- it’s a seamless journey. Hope Across Borders is an initiative by Infinite Ventures. We, at HAB, understand the hardship an individual faces with the onset of medical emergency in the family. The pain and suffering it brings to the individual. The need for expert medical aid along with the best of resources to help the patient. The psychological and emotional trauma that the family suffers when their loved one is going through the ordeal.</p>
        <img alt='' className='w-full md:w-2/5' src={overview}></img>
        </div>
      </div>

      <div id='services' className='flex flex-col gap-10 py-12 px-4 lg:px-36'>
        <div className='flex text-3xl font-semibold justify-center '>Services</div>
        <div className='flex justify-around gap-2 flex-wrap'>
          <div className='flex flex-col p-8 rounded-lg shadow-md w-64 h-64'>
            <img src={img} alt='' className='w-20 rounded-full'></img>
            <div className='text-xl font-semibold'>Plastic Surgery</div>
            <div className='w-24 bg-blue-400 h-0.5 my-4'></div>
            <div className='text-xl font-normal '>Small detail</div>

          </div>
          <div className='flex flex-col p-8 rounded-lg shadow-md w-64 h-64'>
            <img alt="" src={img} className='w-20 rounded-full'></img>
            <div className='text-xl font-semibold'>Plastic Surgery</div>
            <div className='w-24 bg-blue-400 h-0.5 my-4'></div>
            <div className='text-xl font-normal '>Small detail</div>

          </div>
          <div className='flex flex-col p-8 rounded-lg shadow-md w-64 h-64'>
            <img alt='' src={img} className='w-20 rounded-full'></img>
            <div className='text-xl font-semibold'>Plastic Surgery</div>
            <div className='w-24 bg-blue-400 h-0.5 my-4'></div>
            <div className='text-xl font-normal '>Small detail</div>

          </div>
          <div className='flex flex-col p-8 rounded-lg shadow-md w-64 h-64'>
            <img alt='' src={img} className='w-20 rounded-full'></img>
            <div className='text-xl font-semibold'>Plastic Surgery</div>
            <div className='w-24 bg-blue-400 h-0.5 my-4'></div>
            <div className='text-xl font-normal '>Small detail</div>

          </div>
        </div>
      </div>
      <div id='testimonials' className='flex flex-col gap-10 py-12 px-4 lg:px-36'>
        <div className='flex text-3xl font-semibold justify-center '>Testimonials</div>
        <div className='flex justify-around gap-2 flex-wrap'>
          <div style={{ backgroundColor: "rgba(91, 193, 255, 0.2)" }} className='flex flex-col p-4 py-8 rounded-lg  w-64 h-64 '>
            <div className='flex gap-1 justify-center'>
              ⭐⭐⭐⭐
            </div>
            <p className='text-base font-normal leading-4 justify-center text-center'>Your reviews are shown here. so, feel free to give your valuable review to us</p>
            <div style={{ backgroundColor: "#5BC1FF" }} className='flex justify-center z-50 h-0.5 my-4'> &nbsp;</div>
            <div className='flex gap-5'>
              <img alt='' src={img1} className='w-16 rounded-full'></img>
              <div>

                <div className='text-xl font-semibold'>user name</div>
                <div className='text-sm text-slate-500	 font-medium'>Designation</div>
              </div>
            </div>

          </div>
          <div style={{ backgroundColor: "rgba(91, 193, 255, 0.2)" }} className='flex flex-col p-4 py-8 rounded-lg  w-64 h-64 '>
            <div className='flex gap-1 justify-center'>
              ⭐⭐⭐⭐
            </div>
            <p className='text-base font-normal leading-4 justify-center text-center'>Your reviews are shown here. so, feel free to give your valuable review to us</p>
            <div style={{ backgroundColor: "#5BC1FF" }} className='flex justify-center z-50 h-0.5 my-4'> &nbsp;</div>
            <div className='flex gap-5'>
              <img alt='' src={img1} className='w-16 rounded-full'></img>
              <div>

                <div className='text-xl font-semibold'>user name</div>
                <div className='text-sm text-slate-500	 font-medium'>Designation</div>
              </div>
            </div>

          </div>
          <div style={{ backgroundColor: "rgba(91, 193, 255, 0.2)" }} className='flex flex-col p-4 py-8 rounded-lg  w-64 h-64 '>
            <div className='flex gap-1 justify-center'>
              ⭐⭐⭐⭐
            </div>
            <p className='text-base font-normal leading-4 justify-center text-center'>Your reviews are shown here. so, feel free to give your valuable review to us</p>
            <div style={{ backgroundColor: "#5BC1FF" }} className='flex justify-center z-50 h-0.5 my-4'> &nbsp;</div>
            <div className='flex gap-5'>
              <img alt='' src={img1} className='w-16 rounded-full'></img>
              <div>

                <div className='text-xl font-semibold'>user name</div>
                <div className='text-sm text-slate-500	 font-medium'>Designation</div>
              </div>
            </div>

          </div>
          <div style={{ backgroundColor: "rgba(91, 193, 255, 0.2)" }} className='flex flex-col p-4 py-8 rounded-lg  w-64 h-64 '>
            <div className='flex gap-1 justify-center'>
              ⭐⭐⭐⭐
            </div>
            <p className='text-base font-normal leading-4 justify-center text-center'>Your reviews are shown here. so, feel free to give your valuable review to us</p>
            <div style={{ backgroundColor: "#5BC1FF" }} className='flex justify-center z-50 h-0.5 my-4'> &nbsp;</div>
            <div className='flex gap-5'>
              <img alt='' src={img1} className='w-16 rounded-full'></img>
              <div>

                <div className='text-xl font-semibold'>user name</div>
                <div className='text-sm text-slate-500	 font-medium'>Designation</div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div id='getintouch' style={{ backgroundColor: "#B2E2FF" }} className='flex flex-col  px-4 lg:px-36 py-12  gap-10'>
        <div className='flex justify-center text-3xl font-semibold'>
          Get in Touch
        </div>
        <form className='flex flex-wrap gap-10' action='https://formspree.io/f/xbjvojgz' method='post'>

          <input placeholder='Enter your Name' name="name" type='text' className='bg-white h-10 px-2 w-72  rounded-md'></input>
          <input placeholder='Enter your Contact No.' name="phone" type='tel' className='bg-white h-10 px-2 w-72 rounded-md'></input>
          <input placeholder='Enter your Email' name="email" type='email' className='bg-white h-10 px-2 w-72 rounded-md'></input>
          <input placeholder='Your query in brief' name="why" type='text' className='bg-white h-10 px-2 w-72 rounded-md'></input>
          <div className='flex w-full'>

          <textarea placeholder='Enter your Query in Detail' name='discription' className='bg-white h-64 w-full md:w-3/5 rounded-md px-2 py-2'></textarea>
          </div>
          <div className='w-full'>

          <button type='submit' style={{ backgroundColor: "#5BC1FF" }} className=' font-semibold rounded-lg px-6 py-2 w-24'>Submit</button>
          </div>

        </form>
      </div>
      <div id='footer' style={{ backgroundColor: "#1774AC" }} className='flex  px-4 md:px-52 py-12  gap-2'>
        <div id='foot-left ' className='flex flex-wrap gap-16 text-white w-1/2 px-'>
          <a href='#unknown'>Home</a>
          <a href='#unknown'>Testimonials</a>
          <a href='#unknown'>Services</a>
          <a href='#unknown'>Get in Touch</a>
        </div>
        <div className=' w-0.5 bg-white '> &nbsp;</div>
        <div id='foot-right' className='flex flex-col gap-4 text-white w-1/2 px-16'>
          <a href='#unknown' className='pb-4'>Contact with us</a>
          <a href='#unknown'>Instagram</a>
          <a href='#unknown'>Facebook </a>
          <a href='#unknown'>Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default Home