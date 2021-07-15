/*global google */
import React, { useState, useEffect } from 'react';
import CaregiverMap from './caregiverMap/CaregiverMap.jsx';
import Drawer from  '../Drawer.jsx';
// import RemoverMap from './removerMap/RemoverMap.jsx';
// import DropOffMap from './dropoffMap/DropOffMap.jsx';

const MainGoogleMap = () => {

  return (
    <div style={{ width: '200%', marginLeft: '5%'}}>
      <br /><br />
      <Drawer />
      <CaregiverMap/>
    </div>
  );
};

export default MainGoogleMap;
