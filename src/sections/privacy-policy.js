import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "components/link";
import Image from "components/image";

import img1 from "assets/cta-2-1.png";

const PrivacyPolicy = () => {
  return (
    <Box as="section" sx={styles.customerSupport}>
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
              Privacy Policy
              </Heading>
              <Text as="p">
                  Bizim Consulting AB built the Dinqili app as
                  a Free app. This SERVICE is provided by
                  Bizim Consulting AB at no cost and is intended for use as
                  is.
              </Text>
              <Text as="p">
              This page is used to inform visitors regarding our
                  policies with the collection, use, and disclosure of Personal
                  Information if anyone decided to use our Service.
                  <br/>
                  If you choose to use our Service, then you agree to
                  the collection and use of information in relation to this
                  policy. The Personal Information that we collect is
                  used for providing and improving the Service. We will not use or share your information with
                  anyone except as described in this Privacy Policy.
                  The terms used in this Privacy Policy have the same meanings
                  as in our Terms and Conditions, which are accessible at
                  Dinqili unless otherwise defined in this Privacy Policy.
                  <br/>
                  <strong>Information Collection and Use</strong>
                  <br/>
                  For a better experience, while using our Service, we
                  may require you to provide us with certain personally
                  identifiable information, including but not limited to name, email. The information that
                  we request will be retained by us and used as described in this privacy policy.
                  <br/>
                    The app does use third-party services that may collect
                    information used to identify you.
                  <br/>
                    Link to the privacy policy of third-party service providers used
                    by the app
                    <br/>
                  <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a>
                  <br/>
                  <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Unity</a>
                  <br/>
                  <strong>Log Data</strong>
                  <br/>
                  We want to inform you that whenever you
                  use our Service, in a case of an error in the app
                  we collect data and information (through third-party
                  products) on your phone called Log Data. This Log Data may
                  include information such as your device Internet Protocol
                  (“IP”) address, device name, operating system version, the
                  configuration of the app when utilizing our Service,
                  the time and date of your use of the Service, and other
                  statistics.
                  <br/>
                  <strong>Cookies</strong>
                  <br/>
                  Cookies are files with a small amount of data that are
                  commonly used as anonymous unique identifiers. These are sent
                  to your browser from the websites that you visit and are
                  stored on your device's internal memory.
                  <br/>
                  This Service does not use these “cookies” explicitly. However,
                  the app may use third-party code and libraries that use
                  “cookies” to collect information and improve their services.
                  You have the option to either accept or refuse these cookies
                  and know when a cookie is being sent to your device. If you
                  choose to refuse our cookies, you may not be able to use some
                  portions of this Service.
                  <br/>
                  <strong>Service Providers</strong>
                  <br/>
                  We may employ third-party companies and
                  individuals due to the following reasons:
                  To facilitate our Service;To provide the Service on our behalf;To perform Service-related services; or To assist us in analyzing how our Service is used.
                  <br/>
                  We want to inform users of this Service
                  that these third parties have access to their Personal
                  Information. The reason is to perform the tasks assigned to
                  them on our behalf. However, they are obligated not to
                  disclose or use the information for any other purpose.
                  <br/>
                  <strong>Security</strong>
                  <br/>
                  We value your trust in providing us your
                  Personal Information, thus we are striving to use commercially
                  acceptable means of protecting it. But remember that no method
                  of transmission over the internet, or method of electronic
                  storage is 100% secure and reliable, and we cannot
                  guarantee its absolute security.
                  <br/>
                  <strong>Links to Other Sites</strong>
                  <br/>
                  This Service may contain links to other sites. If you click on
                  a third-party link, you will be directed to that site. Note
                  that these external sites are not operated by us.
                  Therefore, we strongly advise you to review the
                  Privacy Policy of these websites. We have
                  no control over and assume no responsibility for the content,
                  privacy policies, or practices of any third-party sites or
                  services.
                  <br/>
                  <strong>Children’s Privacy</strong>
                  <br/>
                    These Services do not address anyone under the age of 13.
                    We do not knowingly collect personally
                    identifiable information from children under 13 years of age. In the case
                    we discover that a child under 13 has provided
                    us with personal information, we immediately
                    delete this from our servers. If you are a parent or guardian
                    and you are aware that your child has provided us with
                    personal information, please contact us so that
                    we will be able to do the necessary actions.
                    <br/>
                    <strong>Changes to This Privacy Policy</strong>
                    <br/>
                  We may update our Privacy Policy from
                  time to time. Thus, you are advised to review this page
                  periodically for any changes. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                  <br/>
                  This policy is effective as of 2022-07-10
                  <br/>
                  <strong>Contact Us</strong>
                  
                  <br/>
                  If you have any questions or suggestions about our
                  Privacy Policy, do not hesitate to contact us at alp@ilbiz.studio.
              </Text>
              
              {/* <Link path="/" sx={styles.link}>
                Learn more <FaAngleRight />
              </Link> */}
            </Box>
          </Box>
          <Box sx={styles.col}>
            <Image src={img1} alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

const styles = {
  customerSupport: {
    overflow: "hidden",
    pt: ["75px", null, null, null, "0", "80px"],
    pb: ["75px", null, null, null, null, "120px", "210px"],
  },
  row: {
    display: "grid",
    gridGap: [0, null, null, null, "25px", null, "55px"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
  },
  col: {
    img: {
      maxWidth: ["100%", null, null, "60%", "100%", "none"],
      mx: [null, null, null, "auto", "0"],
      display: [null, null, null, "block"],
      mt: [null, null, null, null, "40px", "0"],
    },
  },
  content: {
    pt: [0, null, null, null, "160px", "210px"],
    mb: [null, null, null, "-40px", "0"],
    position: "relative",
    zIndex: 10,
    paddingLeft: ["12px", null, null, null, "0"],
    paddingRight: ["12px", null, null, null, "0", "75px", "0"],
    pb: ["10px"],
    maxWidth: [null, null, null, "590px", null, "100%"],
    width: ["100%"],
    mx: [null, null, null, "auto", null, "0"],
    textAlign: ["center", null, null, null, "left"],
    h3: {
      fontSize: [5, null, "21px", null, 7, "32px", 8],
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "black",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      "+p": {
        mt: ["15px", null, null, null, "15px"],
      },
    },
  },
  specialText: {
    color: "heading",
    opacity: 0.6,
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    mt: ["10px", null, null, null, "10px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
};
