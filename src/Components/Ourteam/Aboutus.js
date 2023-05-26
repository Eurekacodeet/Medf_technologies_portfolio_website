import React, { useState, useEffect, useRef, PureComponent } from 'react';
import Whychus from '../Home/Whychus';
import Footer from '../Home/Footer';
import { Switch, Typography } from 'antd';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const Aboutus = () => {
  const { Paragraph, Text } = Typography;
const [ellipsis, setEllipsis] = useState(true);
const [expanded, setExpanded] = useState(false);
const [expandedA, setExpandedA] = useState(false);
const [contentState,setContentState]=useState("About")
const chartRef = useRef(null);
  const memberData = {
    members: [
      {
        name: '',
        experience: '',
        skills: [{ skillone: '' }, { skilltwo: '' }, { skillthree: '' }],
        selectedWorks: [],
        certifications: [],
      },
    ],
  };
  const data = [
    {
      subject: 'Front-end Development',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'UI/UX Design',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Graphics Design',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Back-end Development',
      A: 40,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Blender 3D',
      A: 70,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'App Development',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleExpandA = () => {
    setExpandedA(!expandedA);
  };

  const tabsPortfolio = [
    {id: 1,label: "About",content: () => (<div></div>),},
    { id: 2, label: "Skills", content: () => (<div></div>) },
    { id: 3, label: "Certifications", content: () => (<div></div>) },
    { id: 4, label: "Selected works", content: () => (<div></div>) },
  ];
  const handleAbout=() =>{
    setContentState("About");
  }
const handleSKill=() =>{
  setContentState("Skills");
}
const handleSelectedWork=() =>{
  setContentState("Selected works");
}
const handleCertification=()=>{
  setContentState("Certifications");
}
const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      // //console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);
  return (
    <div className="">
     <div className='bg-black p-10 flex flex-col items-center h-full'>
      <div >
      <h1 className='text-[1.6rem] font-bold break-words mr-4 text-white whitespace-pre '>M e e t    t h e   t e a m </h1>

<div className='rounded-full w-10 h-[0.4rem] 
mt-4 hover:w-[16.7rem] transition-width bg-white duration-500 ease-in-out shadow shadow-white'></div>
      </div> 


      <div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

{/* <div className="lg:w-1/6 mr-4">
 


</div>



<div className='flex flex-col lg:w-2/5'>
  <h1 className='text-3xl font-bold pt-2'></h1>
  <div >
  
  </div>
  <div className=''>
  <h1 className='text-3xl font-bold pt-2'></h1>
  </div>
</div> */}
<div></div>
<div className="lg:w-1/2"><img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681139440/hmgglatf5qjig2tqvjom.png"/></div>
<div className='flex lg:w-[50vw] sm:w-[80vw] w-[80vw] flex-col boder-2 boder-red-500'>
<div className='flex flex-row'>
<div><h1 onClick={handleAbout} className={`text-base hover:cursor-pointer ${contentState=="About"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>About</h1></div>
<div><h1 onClick={handleSKill} className={`text-base hover:cursor-pointer ${contentState=="Skills"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Skills</h1></div>
<div><h1 onClick={handleSelectedWork} className={`text-base hover:cursor-pointer ${contentState=="Selected works"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Portfolio  </h1></div>
<div><h1 onClick={handleCertification} className={`text-base hover:cursor-pointer ${contentState=="Certifications"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Certifications  </h1></div>

</div>
<div>
  {contentState=="About"&&
<div><p className='text-base max-w-md pt-4'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Kirubel</h2>
  <Paragraph
              className='text-sm pt-2 max-w-md'
              // ellipsis={
              //   expanded
              //     ? false
              //     : {
              //         rows: 2,
              //         expandable: true,
              //         symbol: ' ',
              //       }
              // }
            >
              Experienced UI/UX Designer, Front-End Developer specializing in
              education, health, ERP, and social media industries. Proven track record of delivering captivating web and mobile products,
              enhancing user experiences. Skilled in Figma, HTML, CSS, ReactJS, and Flutter. Proficient in GitHub version control.
              Committed to visually appealing, user-centric designs that drive engagement and business impact.
            </Paragraph>

            {/* {ellipsis && (
              <button className='text-blue-600 underline' onClick={toggleExpand}>
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )} */}
            </div>
  }
   {contentState=="Skills"&&
<div className='flex borer-2 brder-green-500 justify-center w-full h-[40vh] object-contain items-center'> 
<ResponsiveContainer className="object-contain mt-10" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={`${size<500?"50%":"80%"}`} data={data}>
          <PolarGrid  />
          <PolarAngleAxis  dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#000000" fill="#000000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer></div>
  } {contentState=="Selected works"&&
  <div>          
  <ul className='text-base pt-2'>
    <li>Link 1</li>
    <li>Link 2</li>
  </ul></div>
    }
</div>
</div>
</div>





<div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

<div className="lg:w-1/6 mr-4">
  <p className='text-base max-w-md'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Abubeker</h2>
  <p className='text-base pt-2 max-w-md break-words'>Experienced Mobile App Developer. Passionate about Data Analysis and Insights. Expertise in iOS and Android Applications
Development
</p>
</div>

<div className="row-span-3 lg:w-2/6 mr-4"><img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681145174/bmh2e4qmekkxaohdkfqh.png"/></div>

<div className='flex flex-col lg:w-2/5'>
  <div className='flex justify-center items-center'>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] m-auto flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
    </div>
   
  </div>
  <div className=''>
    <h1 className='text-3xl font-bold pt-2'>Selected works</h1>
    <ul className='text-base pt-2'>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </div>
</div>
</div>





<div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

<div className="lg:w-1/6 mr-4">
  <p className='text-base max-w-md'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Abel</h2>
  <Paragraph
              className='text-sm pt-2 max-w-md'
              ellipsis={
                expandedA
                  ? false
                  : {
                      rows: 2,
                      expandable: true,
                      symbol: ' ',
                    }
              }
            >
              As an experienced software developer, I have a proven track record of designing, developing, and
delivering high-quality software applications. My expertise in a range of programming languages
and technologies, combined with my strong problem-solving skills, attention to detail, and ability
to work collaboratively, makes me an asset to any software development team. Throughout my
career, I have demonstrated the ability to work in dynamic environments, adapting quickly to
changing priorities and deadlines. Whether working independently or as part of a team, I am
dedicated to delivering exceptional results that meet both technical and business requirements.

            </Paragraph>

            {ellipsis && (
              <button className='text-blue-600 underline' onClick={toggleExpandA}>
                {expandedA ? 'Read less' : 'Read more'}
              </button>
            )}
</div>

<div className="row-span-3 lg:w-2/6 mr-4"><img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681059700/qqaoi6ju1nwaaglmi9vv.png"/></div>

<div className='flex flex-col lg:w-2/5'>
  <div className='flex justify-center items-center'>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] m-auto flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
    </div>
  </div>
  <div className=''>
    <h1 className='text-3xl font-bold pt-2'>Selected works</h1>
    <ul className='text-base pt-2'>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </div>
</div>
</div>
    </div>
      <Whychus />
      <Footer />
    </div>
  );
};

export default Aboutus;