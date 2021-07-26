import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';
import Service from '../components/about/Service';
import { Wrapper, ContentsWrapper, FooterWrapper } from '../styles/utils/CommonComponentsLayout';

const AboutService = () => {
    return (
        <Wrapper>
			<ContentsWrapper>
					<NavBar />
					<Service />
			</ContentsWrapper>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
        </Wrapper>
    );
};

export default AboutService;