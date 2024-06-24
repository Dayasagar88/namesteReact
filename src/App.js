import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import resList from "./Utils/MockData";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";


// // React Element ==> ReactElement(JS-Object) ==> HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Nameste React🚀"); // core react
// // console.log(heading);

// // JSX(It is transpiled(converted) before it reaches the JS engine) -  Done by PARCEL - Babel
// // JSX ==> React.createElement ==> ReactElement(JS-Object) ==> HTMLElement(render)
// const JSXHeading = (
//   <h1 id="JSXheading" className="head" tabIndex="1">
//     This is Nameste React in JSX 🚀
//   </h1>
// ); // This is JSX
// // console.log(JSXHeading);

// const Number = 100;
// //React functional Component
// const HeadingComponent = () => (
//   <div>
//     <Title />
//     <h1>{console.log("Hello")}</h1>
//     <h2>{Number + 1000}</h2>
//     <h1>Nameste React functional Component 🚀</h1>
//   </div>
// );

// //Component composition
// const HeadingComponent2 = () => {
//   return (
//     <div>
//       <Title />
//       <h1>Nameste React functional Component2</h1>
//     </div>
//   );
// };

// const elem = <span>React Element</span>;

// const Title = function () {
//   return (
//     <div>
//       {elem}
//       <h1>I am title component.</h1>
//       {/* <HeadingComponent /> */}
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(<HeadingComponent />);

const AppLayout = () => {
  const[cardData,setCardData] = useState(resList);


 const Test = ()=>{
  return <>
    <Header updateData={setCardData}/>
    <Outlet/>
  </>
 }



  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={()=> <Test/>}>
            <Route path="/" Component={()=> <Body card={cardData}/>}/>
            <Route path="/about" Component={()=> <About/>}/>
            <Route path="/contactUs" Component={()=> <ContactUs/>}/>
        </Route>
        <Route path="restaurantMenu/:resId" element=<RestaurantMenu/>/>
      </Routes>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><AppLayout/></BrowserRouter>);
