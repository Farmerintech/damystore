import { useState, useEffect } from "react";
import { Btn } from "./utils/btn";
import carousel from '../asset/images1/carousel1.webp'
import carouse2 from '../asset/images1/hats3.webp'
import carouse3 from '../asset/images1/carousel66.webp'
import carouse4 from '../asset/images1/carousel3.webp'
import carouse1l from '../asset/images1/carousel99.webp'
import { useNavigate } from "react-router-dom";

export const SecondCarousel = ()=>{
    const Images =
    [
      { id: 50, name: 'Sophie Casual Knit Set', category: 'women', productType: 'clothes', price: 65, description: 'Comfortable and stylish knitwear for women, perfect for everyday casual wear.', img: carousel },
      { id: 51, name: 'Lily Summer Dress', category: 'women', productType: 'clothes', price: 70, description: 'Fashion-forward summer dress, perfect for casual outings and warm weather.', img: carouse2 },
      { id: 52, name: 'Grace Evening Gown', category: 'women', productType: 'clothes', price: 75, description: 'Elegant and trendy evening gown, suitable for formal occasions and events.', img: carouse3 },
      { id: 53, name: 'Ava Casual Chic Ensemble', category: 'women', productType: 'clothes', price: 80, description: 'Modern and chic casual wear for women, offering both comfort and style.', img: carouse4 },
      { id: 54, name: 'Chloe Versatile Outfit', category: 'women', productType: 'clothes', price: 85, description: 'Stylish and comfortable outfit for women, suitable for a variety of occasions.', img: carouse1l },
  

    ]
    const [currentIndex, setCurrentIndex] = useState(0);
//auto 

let timer;
useEffect(()=>{
   timer= setTimeout(()=>{
    if (window.innerWidth >= 960 && currentIndex + 3 === Images.length || window.innerWidth <= 959 && currentIndex +1 === Images.length) {
      // alert(window.innerWidth)
      setCurrentIndex(0);

     }else{
       setCurrentIndex(currentIndex + 1);
     }

     if (window.innerWidth >= 960 && currentIndex + 3 === 3 || window.innerWidth <= 959 && currentIndex + 1 === 1 ) {
      setCurrentIndex(currentIndex +2 );
    }else{
      setCurrentIndex(currentIndex - 1);
    }
  }, 3500)
})

    // Function to handle 'Next' button click
    const handleNext = () => {
      clearTimeout(timer)
      if (window.innerWidth >= 960 && currentIndex + 3 === Images.length || window.innerWidth <= 959 && currentIndex +1 === Images.length) {
       // alert(window.innerWidth)
       setCurrentIndex(0);

      }else{
        setCurrentIndex(currentIndex + 1);
      }
    };
    // Function to handle 'Prev' button click
    const handlePrev = () => {
      clearTimeout(timer)

      if (window.innerWidth >= 960 && currentIndex + 3 === 3 || window.innerWidth <= 959 && currentIndex + 1 === 1 ) {
        setCurrentIndex(currentIndex +2 );
      }else{
        setCurrentIndex(currentIndex - 1);
      }
    }

    //auto 
    const navigate = useNavigate()
    const goTo =(productType, category, id)=>{
      setTimeout(()=>{
      //  window.location.reload();
      }, 500)
      navigate(`/${productType}/${category}/${id}`);
      window.scrollTo({top:0, behavior:'smooth'})
  }


    return(
    

        <section className="bg-blue-200 text-black/95 p-2 pt-10 md:p-[20px] lg:p-[60px] h-[800px] md:h-[600px] flex flex-col md:flex-row justify-between gap-10 overflow-hidden pb-10">
            <div className="">
                <h3 className="font-bold text-2xl">Trending Fashion</h3>
                <p>Discover the essence of timeless fashion with our best selling collection, taillored to empower modern women </p>
                <Btn prev={handlePrev} next ={handleNext} border ={'border-2 border-blue-300'} color={'text-black'} position={'md:ml-10 absolute md:left-0 right-0 mt-10'} bgColor={'bg-blue-200'}/>
            </div>
            <div className="flex gap-6">
        {Images.slice(currentIndex, window.innerWidth >= 960 ? currentIndex + 3: currentIndex + 1).map((img, index) => (
            <div className="flex flex-col w-full " key={index} onClick={()=>(goTo(img.productType, img.category, img.id))}>
                 <img
                   src={img.img}
                   alt={`img-${index}`}
                   style={{
                      width: "600px",
                      height: "500px",
                      margin: "5px",
                      objectFit: "cover",
                }}
          />
          <p>{img.name}</p>
           </div>
        ))}
           
         
      </div>
        </section>  

    )
}