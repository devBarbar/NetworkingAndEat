import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appModern';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/AppModern/Navbar';
import Banner from 'containers/AppModern/Banner';
import AppSlider from 'containers/AppModern/AppSlider';
import Features from 'containers/AppModern/Features';
import DashboardFeatures from 'containers/AppModern/Dashboard';
import ProductSlide from 'containers/AppModern/ProductSlide';
import DesignedAndBuilt from 'containers/AppModern/DesignedAndBuilt';
import PricingPolicy from 'containers/AppModern/PricingPolicy';
import Testimonial from 'containers/AppModern/Testimonial';
import Newsletter from 'containers/AppModern/Newsletter';
import Footer from 'containers/AppModern/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'containers/AppModern/appModern.style';

import TeamSection from 'containers/AppModern/TeamSection';

const AppModern = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Neat | Networking and Eat</title>
          <meta name="Description" content="Networking and Eat" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <AppSlider />
            {/* <Testimonial /> */}
            {/* <ProductSlide /> */}
            <TeamSection></TeamSection>
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default AppModern;
