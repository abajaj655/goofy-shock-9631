import { Box,Button,Heading,Image,Input,Link,Text } from '@chakra-ui/react'
import {useState,useEffect} from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import axios from 'axios';
import '../Pages/WomenPage.css'
function Dropdown() {
    const [value,setValue]=useState('')
    const [data,setData]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
      axios.get('http://localhost:3000/mens').then((res)=>setData(res.data))
  
    },[])
    console.log(data);
   const onChange=(e)=>{
      setValue(e.target.value);
   }
   const onSearch=(searchTerm)=>{
      setValue(searchTerm)
     console.log('search',searchTerm)
   }
    return <>
          
    {/* -----------------------navbar----------------------------------------- */}
    
    <Box className="navbar">
      <Box className="dropdown">
      {/* <Link  style={{ textDecoration: 'none' }}  onClick={() => {navigate(`/sidebar`)}}> */}
        <Button className="dropbtn" id="box31">NEW ARRIVALS</Button>
        {/* </Link> */}
        <Box className="dropdown-content">
          <Box className="header">
            <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
            <Heading as='h2'  id="box31">JUST IN</Heading>
          </Box>
          <Box className="row">
            <Box className="column">
             
              <Link id="box31" textDecoration='none'>Current Week</Link>
              <Link id="box31" href="#">Previous Weeks</Link>
              <Link id="box31" href="#">Essentials</Link>
              <Link id="box31" href="#">Tailoring Edit</Link>
              <Link id="box31" href="#">Dress Code</Link>
              <Link id="box31" href="#">Summer Wardrobe</Link>
              <Link id="box31" href="#">Outdoor & Activewear</Link>
              <Link id="box31" href="#">The Gift Shop</Link>
           
            </Box>
            <Box className="column">
           
              <Link id="box31" href="#">Clothing</Link>
              <Link id="box31" href="#">Shoes</Link>
              <Link id="box31" href="#">Bags</Link>
              <Link id="box31" href="#">Accessories</Link>
            </Box>
         
            <Box className="column">
              <img id="colimg" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_FLYOUT_CW17_2022/NA_FLYOUT-_19__20220428121816.jpg" alt=""/>
            </Box>
          </Box>
                          {/* <!-- <Box></Box> --> */}
        </Box>
      </Box>
      {/* <!-- 2nd --> */}
      <Box className="dropdown">
        <Button className="dropbtn" id="box31">DESIGNERS 
       
        </Button>
        <Box className="dropdown-content">
          <Box className="header2">
            <Heading as='h2'  id="box31">TOP 20</Heading>
            <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
          </Box>
          <Box className="row">
            <Box className="column">
             
              <Link id="box31" href="#">  Acne Studios</Link>
              <Link id="box31" href="#"> Alexander McQueen</Link>
              <Link id="box31" href="#">  Ami Paris</Link>
              <Link id="box31" href="#">   AMIRI</Link>
              <Link id="box31" href="#"> Balenciaga</Link>
              <Link id="box31" href="#"> Bottega Veneta</Link>
              <Link id="box31" href="#">Brunello Cucinelli</Link>
              <Link id="box31" href="#"> Burberry</Link>
              {/* <Link id="box31" href="#">  Christian Louboutin</Link>
              <Link id="box31" href="#">     Dolce&Gabbana </Link> */}
             
            
           
            </Box>
            <Box className="column">
           
              <Link id="box31" href="#">   Givenchy</Link>
              <Link id="box31" href="#">  Gucci</Link>
              <Link id="box31" href="#">  Lemaire</Link>
              <Link id="box31" href="#">Loewe</Link>
              <Link id="box31" href="#">Loro Piana</Link>
              <Link id="box31" href="#">    Maison Margiela  </Link>
              <Link id="box31" href="#">  Saint Laurent</Link>
              <Link id="box31" href="#">  Stone Island</Link>
      
            </Box>
           
            <Box className="column">
           
             
              <Link id="box31" href="#">Clothing</Link>
              <Link id="box31" href="#">Shoes</Link>
              <Link id="box31" href="#">Bags</Link>
              <Link id="box31" href="#">Accessories</Link>
              <Link id="box31" href="#">    Exclusive styles  </Link>
            </Box>
           
          
           
            
            <Box className="column">
              <img  width="100%" id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/GUCCI_LOVE_FLYOUT_20220502153143.jpg" alt=""/>
            </Box>
          </Box>
                          {/* <!-- <Box></Box> --> */}
        </Box>
      </Box>
    {/* <!-- 3rd start --> */}
      
    <Box className="dropdown">
    <Button className="dropbtn" id="box31">CLOTHING 
    </Button>
    <Box className="dropdown-content">
    <Box className="header">
    <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
    <Heading as='h2'  id="box31">TOP BRANDS</Heading>
    <Heading as='h2'  id="box31">DISCOVER</Heading>
    </Box>
    <Box className="row">
    <Box className="column">
    <Link id="box31" href="clothing.html">Jackets</Link>
    <Link id="box31" href="#">     Sweats</Link>
    <Link id="box31" href="#">   Knitwear</Link>
    <Link id="box31" href="#"> Coats</Link>
    <Link id="box31" href="#">T-shirts</Link>
    <Link id="box31" href="#">  Shirts</Link>
    <Link id="box31" href="#">  Pants</Link>
    <Link id="box31" href="#"> Polo shirts</Link>
   
    </Box>
    <Box className="column">
    <Link id="box31" href="#">   Acne Studios</Link>
    <Link id="box31" href="#">Alexander McQueen</Link>
    <Link id="box31" href="#">Ami Paris</Link>
    <Link id="box31" href="#">Amiri</Link>
    <Link id="box31" href="#">Balenciaga</Link>
    <Link id="box31" href="#">Bottega Veneta</Link>
    <Link id="box31" href="#">Brunello Cucinelli</Link>
    <Link id="box31" href="#">Burberry</Link>
  
    </Box>
    <Box className="column">
    <Link id="box31" href="#">     New clothing arrivals</Link>
    <Link id="box31" href="#">    Essential clothing</Link>
    <Link id="box31" href="#">Exclusive clothing</Link>
    </Box>
    <Box className="column">
    <img width="100%" id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT__20220503115956.jpg" alt=""/>
    </Box>
    </Box>
                {/* <!-- <Box></Box> --> */}
    </Box>
    </Box>
    {/* <!-- 4thstart --> */}
    <Box className="dropdown">
    <Button className="dropbtn" id="box31">SHOES 
    </Button>
    <Box className="dropdown-content">
    <Box className="header">
    <Heading  as='h2' id="box31">SHOP BY CATEGORY</Heading>
    <Heading  as='h2' id="box31">TOP BRANDS</Heading>
    <Heading as='h2'  id="box31">DISCOVER</Heading>
    </Box>
    <Box className="row">
    <Box className="column">
    <Link id="box31" href="#">     Sneakers</Link>
    <Link id="box31" href="#">  Sandals & slides</Link>
    <Link id="box31" href="#">  Loafers</Link>
    <Link id="box31" href="#">Boots</Link>
    <Link id="box31" href="#"> Formal shoes</Link>
    <Link id="box31" href="#">    Derby shoes</Link>
    <Link id="box31" href="#">     Espadrilles</Link>
    <Link id="box31" href="#"> Summer Shoes</Link>
    </Box>
    <Box className="column">
    <Link id="box31" href="#">    Alexander McQueen</Link>
    <Link id="box31" href="#">   Amiri</Link>
    <Link id="box31" href="#">    Balenciaga</Link>
    <Link id="box31" href="#"> Bottega Veneta</Link>
    <Link id="box31" href="#">    Burberry</Link>
    <Link id="box31" href="#">     Christian Louboutin</Link>
    <Link id="box31" href="#">       Gucci</Link>
    <Link id="box31" href="#">    Lanvin</Link>
  
    </Box>
    <Box className="column">
    <Link id="box31" href="#">    New shoe arrivals</Link>
    <Link id="box31" href="#">  Essential shoes</Link>
    <Link id="box31" href="#">    Exclusive shoes</Link>
    </Box>
    <Box className="column">
    <img width='100%' id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT_2_20220503115955.jpg" alt=""/>
    </Box>
    </Box>
                {/* <!-- <Box></Box> --> */}
    </Box>
    </Box>
    {/* <!-- 5 start --> */}
    <Box className="dropdown">
    <Button className="dropbtn" id="box31">BAGS 
    </Button>
    <Box className="dropdown-content">
    <Box className="header">
    <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
    <Heading as='h2'  id="box31">JUST IN</Heading>
    </Box>
    <Box className="row">
    <Box className="column">
    <Link id="box31" href="#">   Current Week</Link>
    <Link id="box31" href="#">Previous Weeks</Link>
    <Link id="box31" href="#">Essentials</Link>
    <Link id="box31" href="#">Tailoring Edit</Link>
    <Link id="box31" href="#">Dress Code</Link>
    <Link id="box31" href="#">Summer Wardrobe</Link>
    <Link id="box31" href="#">Outdoor & Activewear</Link>
    <Link id="box31" href="#">The Gift Shop</Link>
    </Box>
    <Box className="column">
    <Link id="box31" href="#">   Clothing</Link>
    <Link id="box31" href="#">Shoes</Link>
    <Link id="box31" href="#">Bags</Link>
    <Link id="box31" href="#">Accessories</Link>
    </Box>
    <Box className="column">
    <img width="100%" id="colimg" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT_3_20220503115957.jpg" alt=""/>
    </Box>
    </Box>
                {/* <!-- <Box></Box> --> */}
    </Box>
    </Box>
    {/* <!-- 6th start --> */}
    <Box className="dropdown">
    <Button className="dropbtn" id="box31">ACCESSORIES 
    </Button>
    <Box className="dropdown-content">
    <Box className="header">
    <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
    <Heading as='h2'  id="box31">TOP BRANDS</Heading>
    <Heading as='h2'  id="box31">DISCOVER</Heading>
    </Box>
    <Box className="row">
    <Box className="column">
    <Link id="box31" href="#">     Sneakers</Link>
    <Link id="box31" href="#">  Sandals & slides</Link>
    <Link id="box31" href="#">  Loafers</Link>
    <Link id="box31" href="#">Boots</Link>
    <Link id="box31" href="#"> Formal shoes</Link>
    <Link id="box31" href="#">    Derby shoes</Link>
    <Link id="box31" href="#">     Espadrilles</Link>
    <Link id="box31" href="#"> Summer Shoes</Link>
    </Box>
    <Box className="column">
    <Link id="box31" href="#">    Alexander McQueen</Link>
    <Link id="box31" href="#">   Amiri</Link>
    <Link id="box31" href="#">    Balenciaga</Link>
    <Link id="box31" href="#"> Bottega Veneta</Link>
    <Link id="box31" href="#">    Burberry</Link>
    <Link id="box31" href="#">     Christian Louboutin</Link>
    <Link id="box31" href="#">       Gucci</Link>
    <Link id="box31" href="#">    Lanvin</Link>
    
    </Box>
    <Box className="column">
    <Link id="box31" href="#">    New shoe arrivals</Link>
    <Link id="box31" href="#">  Essential shoes</Link>
    <Link id="box31" href="#">    Exclusive shoes</Link>
    </Box>
    <Box className="column">
    <img id="colimg2" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_CW18_FLYOUTS/FLYOUT_4_20220503115956.jpg" alt=""/>
    </Box>
    </Box>
                {/* <!-- <Box></Box> --> */}
    </Box>
    </Box>
    {/* <!-- 7th start --> */}
    <Box className="dropdown">
    <Button 
    // className="dropbtn" 
    _hover={{ bg:'white'}}
    id="box31"
    color='red'
    >SALE
    </Button>
    <Box className="dropdown-content">
    <Box className="header">
    <Heading as='h2'  id="box31">SHOP BY CATEGORY</Heading>
    {/* <!-- <Heading id="box31">JUST IN</Heading> --> */}
    </Box>
    <Box className="row">
    <Box className="column">
    </Box>
    <Box className="column">
    </Box>
    <Box className="column">
    <Heading as='h1'id="sale">SALE</Heading>
    <Button className="bsale">SHOP SALE</Button>
    </Box>
    </Box>
                {/* <!-- <Box></Box> --> */}
    </Box>
    </Box>
    {/* <Box id='box32' fontSize={['12px']} mr="60px" p="10px"  w="18%" display="flex" justifyContent="right" alignItems="center" border="1px solid lightgray" >
                  <SearchIcon boxSize="18px" pos="absolute"/>
                  <Input id="input" variant='unstyled'  placeholder='Search for...'/>    
                  </Box> */}
    <Box id="box32"
    border='px solid red'
    align='right'>
    
    <Input 
    value={value} 
    type="text" 
    onChange={onChange} 
    borderRadius='0px' 
    id="input"  
    placeholder="Search for....  "  />
    <Button onClick={()=>onSearch(value)}><SearchIcon boxSize="18px" /></Button>
    </Box>
    <Box className='dropdowns'
          bgColor='white'
          // border="1px solid red"
          display="flex"
          flexDirection="column"
           border="1px solid gray"
          position='absolute'
          zIndex={9}
         
          >
          <Box>
            {data.filter(item=>{
              const searchTerm=value.toLowerCase();
              const fullname=item.ph1.toLowerCase();
              return searchTerm && fullname.startsWith(searchTerm) &&
              fullname!==searchTerm
            }).slice(0,5)
            .map((item)=>(
              (
                <Box  
                onClick={()=>onSearch(item.name)} 
                className='dropdown-row' 
                cursor='pointer'
                textAlign='start'
                margin="2px 0"
                key={item.price}>
                  {item.ph1}
                 <Box display='flex'
                 justifyContent="space-between">
                  <Image width="10%" src={item.lazyloaded}/>
                 </Box>
                </Box>
                )
            ))}
          </Box>
          </Box>
  
    </Box>
    <hr id="line"/>
    </>
    
}

export default Dropdown