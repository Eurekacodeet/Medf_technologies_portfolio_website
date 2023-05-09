import React, { useEffect, useRef, useState } from 'react'
import { Input, Card, Form, Select, Button, message, Upload, Modal, Space, Image, Empty, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ArrowRightOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { PlusIcon, AdjustmentsHorizontalIcon, PencilSquareIcon, XMarkIcon  } from '@heroicons/react/24/outline';
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;
const { confirm } = Modal;
const { Search } = Input;

const AllBlogs = () => {
  const [form] = Form.useForm();
  const [fileData,setFileData]=useState(null)
  const [title,setTitle]=useState("")
  const [description, setDescription]=useState("")
  const [category, setCategory]=useState("")
 const [blogs,setBlogs]=useState([])
 const [loading, setLoading] = useState(false);
 const [visible, setVisible] = useState(false);
 const [blogId,setBlogId]=useState("")
 const [coverImagePreview,setCoverImagePreview]=useState("")
 const [filteredBlogs, setFilteredBlogs] = useState(blogs);
 const [searchText, setSearchText] = useState("");
 const [filterText, setFilterText] = useState("");

 const [filteredBLogsVisibility, setFilteredBLogsVisibility]=useState(false)
 const [categoryListAdd, setCategoryListAdd]=useState({
  category:"",
})
const [categoryList,setCategoryList]=useState()
const [isViewFilterModalVisible, setIsViewFilterModalVisible]=useState(false)

 const handleSearch = (value) => {
  // setSearchText(value);
  const filtered = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredBlogs(filtered);
  setFilteredBLogsVisibility(true);
};

const handleFilter = (value) => {

  const filtered = blogs.filter((blog) =>
    blog.category.toLowerCase().includes(value.toLowerCase())
  );
  console.log(filtered)
  setFilteredBlogs(filtered);
  setFilteredBLogsVisibility(true);
};


  

        const handleView = (blog) => {
          setIsModalVisible(false);
         
          setIsViewFilterModalVisible(false);
          setVisible(false)
          setIsModalViewVisible(true);
          console.log(blog._id,"blog id inside edit")
          setTitle(blog.title);
          setDescription(blog.description);
          setCategory(blog.category);
          console.log("category",blog.category)
          setFileData(blog.imageSrc);
     
          };
          const handleFilteredView = (blog) => {
            setIsModalVisible(false);
            setIsModalViewVisible(false);
        
            setVisible(false)
          setIsViewFilterModalVisible(true);
          console.log(blog._id,"blog id inside edit")
          setTitle(blog.title);
          setDescription(blog.description);
          setCategory(blog.category);
          console.log("category",blog.category)
          setFileData(blog.imageSrc);
     
          };
          
        const handleCancel = () => {
             setTitle('');
        setDescription('');
        setCategory('');
        setFileData(null);
        setVisible(false);
     form.resetFields(['title','description','category','image']);

        };   
const props = {
  name: 'file',
  multiple: false,
  action: null,
 beforeUpload: (file)=>{
//  setFileData(URL.createObjectURL(file.file));
  setFileData(file);
 
  return false;
 },
};
useEffect(()=>{
  const fetchData=async()=>{

  try{  const response=await fetch('https://efkomedia.onrender.com/blog/')
    const result=await response.json()
      console.log(result)
    setBlogs(result)
  console.log("length of blogs",blogs.length)
}catch(error){
  console.log(error)
}
  }
  fetchData();                                                                                                                                                                                                                                                    
},[blogs])
const containerRef=useRef()
const [isModalVisible, setIsModalVisible] = useState(false);
const [isViewModalVisible, setIsModalViewVisible]=useState(false)
const [filterVisible, setFilterVisible] = useState(false);
const [selectOpen, setSelectOpen] = useState(false);
const [datePickerOpen, setDatePickerOpen] = useState(false);
const [service, setService] = useState([]);
  
const handleServiceChange = (value) => {
if(value.length>0){
    setService(value)
}

};

const handleAddBlog = () => {
  setIsModalVisible(true);
};

const handleModalCancel = () => {
  setIsModalVisible(false);
  setIsModalViewVisible(false);
  setIsViewFilterModalVisible(false);
  setVisible(false)
};
const handleModalCancelFiltered = () => {
  setIsViewFilterModalVisible(false);
};
const handleFilterVisibility = (event) => {
    event.stopPropagation()
  setFilterVisible(!filterVisible);
};

const handleFilterSubmit = (values) => {
  // Handle filter submission here
  console.log(values);
};
const cardRef = useRef(null);
const handleSelectOpen = () => {
    setSelectOpen(true);
  };
  
  const handleSelectClose = () => {
    setSelectOpen(false);
  };
  const handleDatePickerOpen = () => {
    setDatePickerOpen(true);
  };
  
  const handleDatePickerClose = () => {
    setDatePickerOpen(false);
  };
useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target) &&
        !selectOpen&&!datePickerOpen
      ) {
        setFilterVisible(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [datePickerOpen, selectOpen, setFilterVisible]);
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  return (
    <div className='flex flex-col pt-4 w-full'>
       <div    style={{ position: 'fixed', top: 80, zIndex: 999 }} className='w-full flex flex-row items-center pt-8 pl-8'>
       
       <Search
     placeholder="Search projects"
     allowClear
     onChange={(e)=>{setSearchText(e.target.value);handleSearch(e.target.value);}}
     className='w-4/5 bg-white rounded'
  
     // onClick={}
     // style={{
     //   width: 200,
     // }}
   />
     {!filterVisible?<Button className='bg-white' onClick={handleFilterVisibility}><AdjustmentsHorizontalIcon className='text-black' width={18} height={18}/>
</Button>:<Button className='bg-white' onClick={()=>{setFilterVisible(false)}}><XMarkIcon className='text-black' width={18} height={18}/>
</Button>}
     
     </div>
      <div className='relative'>
      {filterVisible && (
        <div ref={cardRef}>
            <Card className='ml-8 mt-[9.5rem] w-[82%] mr-10' style={{ position: 'fixed', top: 0, zIndex: 999 }}>
        <Form onFinish={handleFilterSubmit}>
        <Form.Item className='flex flex-col'><p className='pb-2'>
            Filter by category:</p>
            <Select
                    mode="multiple"
                    placeholder="Select a category"
                    onChange={handleServiceChange}
                    onDropdownVisibleChange={handleSelectOpen}
    onBlur={handleSelectClose}
                  >
                    <Option value="Soft-dev">Software development</Option>
                    <Option value="ui-ux-design">UI/UX Design</Option>
                    <Option value="mobile-app-dev">Mobile application development</Option>
                    <Option value="web-dev">Web application development</Option>
  <Option value="graphics-design">Graphics Design</Option>
  <Option value="project-consultancy">Project Consultancy</Option>
  <Option value="training-support">Training and Support</Option>
  <Option value="computer-installation-maintenance">Computer Installation and Maintenance</Option>
  <Option value="software-dev">Software Development</Option>
  <Option value="database-management">Database Management</Option>
  <Option value="cloud-computing">Cloud Computing</Option>
  <Option value="artificial-intelligence">Artificial Intelligence</Option>
  <Option value="cybersecurity">Cybersecurity</Option>
  <Option value="e-commerce-solutions">E-commerce Solutions</Option>
  <Option value="content-management-systems">Content Management Systems (CMS)</Option>
  <Option value="digital-marketing">Digital Marketing</Option>
  <Option value="data-analysis-visualization">Data Analysis and Visualization</Option>
  <Option value="it-infrastructure-management">IT Infrastructure Management</Option>
  <Option value="user-interface-design">User Interface Design</Option>
  <Option value="quality-assurance-testing">Quality Assurance and Testing</Option>
  <Option value="it-consulting">IT Consulting</Option>
  <Option value="network-administration">Network Administration</Option>
  <Option value="internet-of-things">Internet of Things (IoT)</Option>
  <Option value="virtual-reality">Virtual Reality (VR)</Option>
  <Option value="augmented-reality">Augmented Reality (AR)</Option>
  <Option value="machine-learning">Machine Learning</Option>
  <Option value="rpa">Robotic Process Automation (RPA)</Option>
  <Option value="big-data-analytics">Big Data Analytics</Option>
  <Option value="project-management">Project Management</Option>
                  </Select>
            </Form.Item>
          {/* <Form.Item>
            <Input
              placeholder="Filter by category"
              allowClear
              size="large"
              onPressEnter={(e) => { handleFilter(e.target.value); setFilterText(e.target.value); }}
              onChange={(e) => { setFilterText(e.target.value); }}
            />
          </Form.Item> */}
          <Form.Item className='flex flex-col'><p className='pb-2'>
            Filter by date:</p><DatePicker onOpenChange={handleDatePickerOpen}
  onBlur={handleDatePickerClose} size="middle" onChange={onChange} />
            </Form.Item>
         
          <div className='flex flex-row pt-4'>
            <Button onClick={() => handleFilter(filterText)} className='bg-black text-white mr-2' type="primary" htmlType="submit">
              Apply Filter
            </Button>
            <Button onClick={() => setFilteredBLogsVisibility(false)} className='bg-black text-white' type="primary" htmlType="submit">
              Clear Filter
            </Button>
          </div>
        </Form>
      </Card></div>
      )}</div>
        <div className="bg-white flex flex-col px-10 pb-10 pt-20">
      <div className='flex flex-col items-start relative group'> 
        <p className="text-sm pb-4">Blogs</p>
  <h1 className='text-3xl pb-4 font-bold hover:text-black hover:cursor-default'>Latest Blogs</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[10.6rem]'></div>
</div>
      <div className="mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
   
     
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
       

       
       {/* filtered blog listing */}
       
        {filteredBLogsVisibility ?(  ( filteredBlogs?.length>0?
         ( filteredBlogs?.map((blog) => (
            <>
            <div key={blog._id} className="group flex flex-col items-center ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
              <Image
    width={250}
    height={110}
    src={blog.imageSrc}
    alt="Image was here."
    className="object-cover object-center group-hover:opacity-75"
  />
              </div>
              <h3 className="mt-4 text-md font-bold text-center text-gray-700 truncate w-4/5">{blog.title}</h3>
             
             
              <button
             onClick={()=>{handleFilteredView(blog);setBlogId(blog._id)}}
                className=" mt-10 block w-full rounded-md bg-white hover:shadow-lg px-3 py-2 
                text-center text-sm font-semibold text-black shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]
                 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 
                 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <div className='flex flex-row justify-center items-center'>Read More
                  <ArrowRightOutlined className='pl-12' width={24} height={24}/></div>
              </button>
           
            </div>
               <Modal
               title="View blog"
               open={isViewFilterModalVisible}
               onCancel={()=>{handleModalCancelFiltered();setIsViewFilterModalVisible(false);}}
               afterClose={()=>{setIsViewFilterModalVisible(false)}}
               footer={null}
               className='h-[80vh] mb-10 pb-4'
               >
                 <p>Blog title:</p>
                <h1 className='text-xl font-bold'>{title}</h1> 
               <p className='pb-1 pt-2'>Blog description:</p>
               <div className="max-h-[30vh] overflow-y-scroll">
                <p>
                   {description}</p></div>
               <p className='pb-4 pt-2'>Blog image:</p>
                <Image
                 width={470}
                 height={235}
                 src={fileData}
                 alt="Image was here."
                 className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
               />
               </Modal>
               </>
          ))):
       <Empty
 image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
 imageStyle={{
   height: 60,
 }}
 description={
   <span>
     No Blogs found
   </span>
 }
 className=''
>
 
</Empty>
          )):        
          //Normal blog listing 
          ( blogs?.length>0&&(blogs?.map((blog) => (
            
            <div key={blog._id} className="group flex flex-col items-center ">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
              <Image
    width={250}
    height={110}
    src={blog.imageSrc}
    alt="Image was here."
    className="object-cover object-center group-hover:opacity-75"
  />
              </div>
            <h3 className="mt-4 text-md font-bold text-gray-700 truncate w-4/5">{blog.title}</h3>
            <button
               onClick={()=>{handleView(blog);setBlogId(blog._id)}}
              href="#"
              className=" mt-10 block w-full rounded-md bg-white hover:shadow-lg px-3 py-2 text-center text-sm font-semibold text-black shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read More
                <ArrowRightOutlined className='pl-12' width={24} height={24}/>
            </button>
            <Modal
title="View blog"
open={isViewModalVisible}
onCancel={handleModalCancel}
footer={null}
className='h-[80vh]'
>
  <p>Blog title:</p>
 <h1 className='text-xl font-bold'>{title}</h1> 
<p className='pb-1 pt-2'>Blog description:</p>
<div className="max-h-[30vh] overflow-y-scroll">
 <p>
    {description}</p></div>
<p className='pb-4 pt-2'>Blog image:</p>
 <Image
  width={470}
  height={235}
  src={fileData}
  alt="Image was here."
  className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
/>
</Modal>
          </div>
          )
          ))
          )
          
          }



{blogs.length==0  && !filteredBLogsVisibility ?(<Empty
 image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
 imageStyle={{
   height: 60,
 }}
 description={
   <span>
     No Blogs Posted
   </span>
 }
>
</Empty>):<></>}
  
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllBlogs