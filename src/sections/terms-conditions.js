import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "components/link";
import Image from "components/image";

import img1 from "assets/cta-2-1.png";

const TermsAndConditions = () => {
  return (
    <Box as="section" sx={styles.customerSupport}>
      <Container>
        <Grid sx={styles.row}>
          <Box sx={styles.col}>
            <Box sx={styles.content}>
              <Heading as="h3">
              Terms &amp; Conditions
              </Heading>
              
              <Text as="p">   
                  By downloading or using the app, these terms will
                  automatically apply to you – you should make sure therefore
                  that you read them carefully before using the app. You’re not
                  allowed to copy or modify the app, any part of the app, or
                  our trademarks in any way. You’re not allowed to attempt to
                  extract the source code of the app, and you also shouldn’t try
                  to translate the app into other languages or make derivative
                  versions. The app itself, and all the trademarks, copyright,
                  database rights, and other intellectual property rights related
                  to it, still belong to Bizim Consulting AB.
                  <br/>
                  Bizim Consulting AB is committed to ensuring that the app is
                  as useful and efficient as possible. For that reason, we
                  reserve the right to make changes to the app or to charge for
                  its services, at any time and for any reason. We will never
                  charge you for the app or its services without making it very
                  clear to you exactly what you’re paying for.
                  <br/>
                  The Dinqili app stores and processes personal data that
                  you have provided to us, to provide our
                  Service. It’s your responsibility to keep your phone and
                  access to the app secure. We therefore recommend that you do
                  not jailbreak or root your phone, which is the process of
                  removing software restrictions and limitations imposed by the
                  official operating system of your device. It could make your
                  phone vulnerable to malware/viruses/malicious programs,
                  compromise your phone’s security features and it could mean
                  that the Dinqili app won’t work properly or at all.
                  <br/>
                    The app does use third-party services that declare their
                    Terms and Conditions.
                    <br/>
                    Link to Terms and Conditions of third-party service
                    providers used by the app
                    <br/>
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Play Services</a>
                  <br/>
                  <a href="https://unity3d.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">Unity</a>
                 <br/>
                  You should be aware that there are certain things that
                  Bizim Consulting AB will not take responsibility for. Certain
                  functions of the app will require the app to have an active
                  internet connection. The connection can be Wi-Fi or provided
                  by your mobile network provider, but Bizim Consulting AB
                  cannot take responsibility for the app not working at full
                  functionality if you don’t have access to Wi-Fi, and you don’t
                  have any of your data allowance left.
                  <br/>
                  If you’re using the app outside of an area with Wi-Fi, you
                  should remember that the terms of the agreement with your
                  mobile network provider will still apply. As a result, you may
                  be charged by your mobile provider for the cost of data for
                  the duration of the connection while accessing the app, or
                  other third-party charges. In using the app, you’re accepting
                  responsibility for any such charges, including roaming data
                  charges if you use the app outside of your home territory
                  (i.e. region or country) without turning off data roaming. If
                  you are not the bill payer for the device on which you’re
                  using the app, please be aware that we assume that you have
                  received permission from the bill payer for using the app.
                  <br/>
                  Along the same lines, Bizim Consulting AB cannot always take
                  responsibility for the way you use the app i.e. You need to
                  make sure that your device stays charged – if it runs out of
                  battery and you can’t turn it on to avail the Service,
                  Bizim Consulting AB cannot accept responsibility.
                  <br/>
                  With respect to Bizim Consulting AB’s responsibility for your
                  use of the app, when you’re using the app, it’s important to
                  bear in mind that although we endeavor to ensure that it is
                  updated and correct at all times, we do rely on third parties
                  to provide information to us so that we can make it available
                  to you. Bizim Consulting AB accepts no liability for any
                  loss, direct or indirect, you experience as a result of
                  relying wholly on this functionality of the app.
                  <br/>
                  At some point, we may wish to update the app. The app is
                  currently available on Android &amp; iOS – the requirements for the 
                  both systems(and for any additional systems we
                  decide to extend the availability of the app to) may change,
                  and you’ll need to download the updates if you want to keep
                  using the app. Bizim Consulting AB does not promise that it
                  will always update the app so that it is relevant to you
                  and/or works with the Android &amp; iOS version that you have
                  installed on your device. However, you promise to always
                  accept updates to the application when offered to you, We may
                  also wish to stop providing the app, and may terminate use of
                  it at any time without giving notice of termination to you.
                  Unless we tell you otherwise, upon any termination, (a) the
                  rights and licenses granted to you in these terms will end;
                  (b) you must stop using the app, and (if needed) delete it
                  from your device.
                  <br/>
                  <strong>Changes to This Terms and Conditions</strong>
                  <br/>
                  We may update our Terms and Conditions
                  from time to time. Thus, you are advised to review this page
                  periodically for any changes. We will
                  notify you of any changes by posting the new Terms and
                  Conditions on this page.
                  <br/>
                  These terms and conditions are effective as of 2022-07-10
                  <br/>
                  <strong>Contact Us</strong>
                  <br/>
                  If you have any questions or suggestions about our
                  Terms and Conditions, do not hesitate to contact us
                  at alp@ilbiz.studio.
                  
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

export default TermsAndConditions;

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
