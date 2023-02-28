import { Box, Divider, Typography, useTheme, Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
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

function JobServiceWidget() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const { t } = useTranslation()

  const { palette } = useTheme()
  const navigate = useNavigate()
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
              Talent service
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color={medium}
              sx={{ mb: 2, fontSize: '1.5rem' }}
            >
              Tired of sifting through job offers and not knowing if you're a
              good fit?
            </Typography>

            {/* <Deal width="25vw" alignItems="center" justifyContent="center" /> */}
            <img src="./assets/worker.png" alt="man tired" height="390vh" />
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
              Register as a talent and download the app to receive notifications
              about new jobs. Don't worry, we won't spam you.
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
              Rate your skills using radio buttons on a scale of 1-5, and then
              post your skillset.
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
              Our algorithm will match your skillset to the best available job.
              If we don't currently have any suitable jobs, we will notify you
              as soon as we do.
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
              Once we find matches, we'll send you a notification. You can then
              review information about the company and their required skillsets.
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
              If you're interested, you can accept the trial period, and we'll
              take care of the rest. We'll create a contract with you and the
              company for the first week of testing. If you're satisfied with
              the job at the end of the trial period, we'll create a permanent
              contract.
            </Typography>
          </Box>
          <Box height="3vh" />
          <Typography
            variant="h2"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 2, fontSize: '1.2rem' }}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
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
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
            >
              Register and Download the app
            </Button>
          </Box>
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default JobServiceWidget
