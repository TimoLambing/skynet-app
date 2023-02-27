import { Box, Divider, Typography, useTheme, Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined'
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined'
import { setPost } from '@/state'
import WidgetWrapper from '@/components/WidgetWrapper'
import FlexBetween from '@/components/FlexBetween'
import YouTubePlayer from '@/components/YouTubePlayer'

function CorporateServiceWidget() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const { t } = useTranslation()

  const { palette } = useTheme()
  const { medium } = palette.neutral
  const primary = palette.primary.main
  const { dark } = palette.neutral

  return (
    <WidgetWrapper>
      <Box container spacing={1}>
        <FlexBetween gap="0.5rem" pb="1.1rem">
          <FlexBetween gap="1rem">
            <PlayArrowOutlinedIcon />
            <Box>
              <Typography variant="h4" color={dark} fontWeight="500">
                Our Services
              </Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>

        <Divider />
        <FlexBetween container spacing={1}>
          <Box
            py="1rem"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{ fontWeight: 700, mb: 2, fontSize: '3rem' }}
            >
              Corporate service
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color={medium}
              sx={{ mb: 2, fontSize: '1.5rem' }}
            >
              Put an end to scouring through useless CVs and paying high fees
              round the clock.
            </Typography>

            {/* <Deal width="25vw" alignItems="center" justifyContent="center" /> */}
            <img src="./assets/man_tired.png" alt="man tired" height="390vh" />
          </Box>
        </FlexBetween>
        <Box>
          <Box display="flex" alignItems="center" sx={{ mb: 3 }} gap="1rem">
            <BrowserUpdatedOutlinedIcon sx={{ fontSize: 48 }} />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              Register your company and download the app, that way we can send
              you notifications about new candidates. Don't worry, we will not
              spam you.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 3 }} gap="1rem">
            <RadioButtonCheckedOutlinedIcon sx={{ fontSize: 48 }} />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              Use radio buttons to rate the required skills on a scale of 1-5,
              and then post the job.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 3 }} gap="1rem">
            <ThreePOutlinedIcon sx={{ fontSize: 48 }} />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              Our algorithm will match the best candidates for your job. If we
              don't have any suitable candidates at the moment, we will notify
              you as soon as we do.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 3 }} gap="1rem">
            <ToggleOnOutlinedIcon sx={{ fontSize: 48 }} />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              Always keep the 'Active' toggle on, so that our algorithm can
              match your jobs.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 3 }} gap="1rem">
            <NotificationsActiveOutlinedIcon sx={{ fontSize: 48 }} />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              We will send you a notification when we have matches. You can then
              review the candidates' skillsets, personality tests, and CVs as
              they are added.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 3 }} gap="1rem">
            <ReceiptLongOutlinedIcon sx={{ fontSize: 48 }} />
            <Typography
              variant="h3"
              component="h3"
              color={medium}
              sx={{ fontSize: '1rem' }}
            >
              If you like what you see, you can place an order with our company,
              and we will take care of the rest. We will create a contract with
              you and the candidate for the first week of testing. If, by the
              end of the testing period, you are satisfied with the staff, we
              will create a permanent contract.
            </Typography>
          </Box>
          <Box height="3vh" />
          <Typography
            variant="h2"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: '1.2rem' }}
          >
            Sound's good enough? Lets get started!
          </Typography>
        </Box>

        <Divider />

        {/* BUTTONS */}
        <Box p="1rem 0">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
          >
            <Button variant="contained" size="large">
              Register and Download the app
            </Button>
          </Box>
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default CorporateServiceWidget
