
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Praduct from './pages/praduct/Praduct'
import { useState } from 'react'
import Trading from './components/trading/Trading'
import { FcAbout } from 'react-icons/fc'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      imgs: [
        "/imgs/imgs1.webp",
        "/imgs/imgs2.webp",
        "/imgs/imgs3.webp",
        "/imgs/imgs4.webp",
      ],
      img: "/imgs/imgs1.webp",
      titel: "Polyester Plain Blue and Black Boys College Bag",
      price: "350",
      deskrip:
        "We offer to our honored patrons the first-class range of Blue and Black Boys College  Bag. Furthermore, our patrons can avail this product from us at affordable rates.",
    },
    {
      id: 1,
      imgs: [
        "/imgs/imgs5.webp",
        "/imgs/imgs6.webp",
        "/imgs/imgs7.jpg",
        "/imgs/imgs8.jpg",
      ],
      img: "/imgs/imgs6.webp",
      titel: "Travel Bag 24  Large Capacity Simple Travel Bag",
      price: "300",
      deskrip:
        "The uppercase Topo 55 Cm Duffle Bag, your ultimate travel partner crafted for both men and women seeking spaciousness and accessibility. With a U-shaped opening granting full access and soft.",
    },
    {
      id: 2,
      imgs: [
        "/imgs/imgs9.jpg",
        "/imgs/imgs10.webp",
        "/imgs/imgs11.jpg",
        "/imgs/imgs12.jpg",
      ],
      img: "/imgs/imgs9.jpg",
      titel: "Drawstring Bag Royal Blue",
      price: "250",
      deskrip:
        "Bulk drawstring backpacks Polypropylene material 13 wide x 16 high and with a print decoration area of 11 W x 12 H Economical drawstring backpacks, ideal to advertise your business. Children also love these little drawstring backpacks for camping, school trips, sports and more.",
    },
    {
      id: 3,
        imgs: [
          "/imgs/imgs13.webp",
          "/imgs/imgs14.webp",
          "/imgs/imgs15.webp",
          "/imgs/imgs16.webp",
        ],
        img: "/imgs/imgs13.webp",
        titel: "Смартфон Samsung Galaxy A55 8/256 Awesome Navy",
        price: "400",
        deskrip:
          "Встречайте Galaxy A55 5G. Простая, но улучшенная серия Galaxy A имеет культовый дизайн с линейным расположением камеры в металлической плоской рамке, обеспечивающей легкий и интуитивно понятный захват. Кроме того, он изготовлен из стекла Corning® Gorilla® Glass Victus®+, что делает его более прочным и устойчивым к повреждениям.",
      },
      {
        id: 4,
        imgs: [
          "/imgs/imgs17.webp",
          "/imgs/imgs18.webp",
          "/imgs/imgs19.webp",
          "/imgs/imgs18.webp",
        ],
        img: "/imgs/imgs17.webp",
        titel: "Беспроводные наушники ANC Airpods Pro 2",
        price: "159",
        deskrip:
          "Встречайте Airpots . Простая, но улучшенная серия Airpots A имеет культовый дизайн с линейным расположением камеры в металлической плоской рамке, обеспечивающей легкий и интуитивно понятный захват. Кроме того, он изготовлен из стекла Corning® Gorilla® Glass Victus®+, что делает его более прочным и устойчивым к повреждениям.",
      },
      {
        id: 5,
        imgs: [
          "/imgs/imgs20.webp",
          "/imgs/imgs21.webp",
          "/imgs/imgs22.webp",
          "/imgs/imgs23.webp",
        ],
        img: "/imgs/imgs20.webp",
        titel: "Беспроводные Наушники Samsung Galaxy Buds 2 Pro чёрный",
        price: "350",
        deskrip:
          "Чистое и реалистичное звучание начинается уже непосредственно с вашего устройства Samsung Galaxy. Обновлённый аудиокодек SSC (Samsung Seamless Codec) кодирует звук в 24-битном формате, а затем наушники Galaxy Buds2 Pro расшифровывают полученные данные этим же кодеком и преобразовывают их в звук с той же глубиной в 24 бит.",
      },
      {
        id: 6,
        imgs: [
          "/imgs/imgs24.png",
          "/imgs/imgs25.png",
          "/imgs/imgs26.png",
          "/imgs/imgs27.png",
        ],
        img: "/imgs/imgs24.png",
        titel: "Смартфон Honor X9C 8/256 Jade Cyan",
        price: "450",
        deskrip:
          "Смартфон Honor X9C предлагает большой дисплей с высоким разрешением, разработанный для обеспечения четкой и яркой графики как для развлечений, так и для производительности. Оснащенное мощным процессором и универсальной системой камер, это устройство обеспечивает надежную производительность для повседневных задач и потребления медиа.",
      },
      {
        id: 7,
        imgs: [
          "/imgs/imgs28.webp",
          "/imgs/imgs29.webp",
          "/imgs/imgs30.webp",
          "/imgs/imgs31.webp",
        ],
        img: "/imgs/imgs28.webp",
        titel: "Смартфон Samsung Galaxy S25 Ultra 12/256ГБ Серый титан",
        price: "980",
        deskrip:
          "Встречайте новейший флагманский смартфон Samsung Galaxy S25 Ultra, выпущенный в 2025 году! Этот потрясающий гаджет объединяет мощь и элегантность в сером титановом корпусе. Galaxy S25 Ultra оснащён инновационным 6.9-дюймовым Dynamic AMOLED 2X дисплеем с разрешением 3120x1440 и частотой обновления 120 Гц, который подарит вам незабываемые визуальные впечатления.",
      },
  ]);
  return (
    <>
     <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home  data={data}/>}/>
      <Route path='/praduct/:id' element={<Praduct  data={data}/>}/>
      <Route path='/Trading/:id' element={<Trading data={data}/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    <Footer/>
     
     </BrowserRouter>
    </>
  )
}

export default App
