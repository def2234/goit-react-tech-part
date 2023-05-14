import { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./navigation/Navigation";
import HomePage from "page/HomePage";
import Tweets from "page/Tweets";

export const App = () => {
  return (
   <Suspense fallback={<p>Loading...</p>}>
    <Routes>
     
    <Route path="/" element={<Navigation />}>
    <Route index element={<HomePage />} />
     <Route path='/tweets'  element={<Tweets/>}/>
     <Route path='*' element={<HomePage/>} />
    </Route>
    
  </Routes>
  </Suspense>
  );
};
