import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {Button} from '../../GlobalStyles';
import { 
  FooterContainer,
  FooterSubHeading,
  FooterSubText,
  FooterSubscription,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
  
} from './Footer.element';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membreship to receive
                our latest  news & Trends
            </FooterSubHeading>
            <FooterSubText>You can Unsubscribe at any time.</FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Your Email" />
              <Button fontBig>Subscribe</Button> 
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
              
            </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
              <FooterLink to='/sign-up'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
              
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLink to='/sign-up'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Linkedin</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
              
            </FooterLinksItems>

          </FooterLinksWrapper>

        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon/>
              ULTRA
            </SocialLogo>
            <WebsiteRights>ULTRA 2023</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>

    </FooterContainer>
  )
}

export default Footer;