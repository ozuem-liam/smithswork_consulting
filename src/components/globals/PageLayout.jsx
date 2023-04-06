import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../../styles/Home.module.css'

const PageLayout = ({children}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;