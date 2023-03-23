import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour} from './Data';

import {InfoSection , Pricing}   from '../../Components';
 
const Home = () => {
  return (
    <>
       
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Pricing />
        <InfoSection {...homeObjFour}/>
    </>
  )
}

export default Home;