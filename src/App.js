import { Routes, Route} from "react-router-dom";
import PageLayout from "./Layout/PageLayout/PageLayout";
import Home from "./Pages/Home/Home";
import Bookings from "./Pages/Bookings/Bookings";
import Payment from "./Pages/Payment/Payment";
import Order from "./Pages/order/Order";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {

  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/bookings" element={ <PageLayout> <Bookings /> </PageLayout>}/> 
    <Route path="/payment" element={ <PageLayout> <Payment /> </PageLayout>}/> 
    <Route path="/order" element={ <PageLayout> <Order/> </PageLayout>}/> 
   </Routes>
   </>
  );
}

export default App;



