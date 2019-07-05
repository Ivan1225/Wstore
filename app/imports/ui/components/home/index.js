import React from 'react';
import { Button } from 'react-bootstrap';
import Styles from './styles';
import Footer from '../newComponents/Footer.jsx'
import Jumbotron from '../newComponents/Jumbotron.jsx'

const Index = () => (
  <Styles.Index>
    <Jumbotron title ="Welcome" subtitle ="this is our website" />
    <Footer/>
  </Styles.Index>
);

export default Index;
