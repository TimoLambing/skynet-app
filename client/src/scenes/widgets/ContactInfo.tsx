import { Box, Divider, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'

function ContactInfo() {
  const { palette } = useTheme()
  const { medium } = palette.neutral

  return (
    <Box>
      <Divider />
      <Box m="1rem">
        <FlexBetween width="100%">
          <Box>
            <Typography variant="h3" component="h3" fontWeight="400">
              OÜ Skynet Intelligence
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="400"
              color={medium}
            >
              Registration code: 16306540
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="400"
              color={medium}
            >
              e-mail: info@skynetintelligence.com
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="400"
              color={medium}
            >
              Phone number: (+372) 56 28 20 38
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" component="h4" fontWeight="400">
              &copy;Copyright 2022–2023 OÜ Skynet Intelligence Company
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="400"
              color={medium}
            >
              Address:
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="400"
              color={medium}
            >
              Päevalille tn 6
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              fontWeight="400"
              color={medium}
            >
              13517 Tallinn, Estonia
            </Typography>
          </Box>
        </FlexBetween>
      </Box>
      <Divider />
    </Box>
  )
}

export default ContactInfo
