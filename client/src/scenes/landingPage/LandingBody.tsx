import React from 'react'
import { Container, Grid, Box, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import FlexBetween from '@/components/FlexBetween'
import ContactFormWidget from '@/scenes/widgets/ContactFormWidget'
import LandingContentWidget from '@/scenes/widgets/LandingContentWidget'
import PartnersWidget from '@/scenes/widgets/PartnersWidget'
import TrustNumbersWidget from '@/scenes/widgets/TrustNumbersWidget'
import YouTubeWidget from '@/scenes/widgets/YouTubeWidget'
import CorporateServiceWidget from '@/scenes/widgets/CorporateServiceWidget.tsx'
import JobServiceWidget from '@/scenes/widgets/JobServiceWidget.tsx'
import GoogleMaps from '@/scenes/widgets/GoogleMaps.tsx'
import ContactInfo from '@/scenes/widgets/ContactInfo.tsx'

function LandingBody() {
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)')
  const { t } = useTranslation()

  return (
    <>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? '68%' : undefined}>
          <Box paddingBottom="2rem">
            <LandingContentWidget />
          </Box>
          <Box paddingBottom="2rem">
            <YouTubeWidget />
          </Box>
          <Box paddingBottom="2rem" id="service">
            <CorporateServiceWidget />
          </Box>
          <Box paddingBottom="2rem" id="job">
            <JobServiceWidget />
          </Box>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '26%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <Box flexBasis="26%">
            <ContactFormWidget />
            <Box m="2rem 0" />
            <TrustNumbersWidget />
            <Box m="2rem 0" />
            <PartnersWidget />
          </Box>
        </Box>
      </Box>
      <Box id="contact">
        <ContactInfo />
      </Box>
      <Box>
        <GoogleMaps />
      </Box>
    </>
  )
}

export default LandingBody
