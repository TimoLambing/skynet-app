import { Box, Divider, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import { setPost } from '@/state'
import WidgetWrapper from '@/components/WidgetWrapper'
import FlexBetween from '@/components/FlexBetween'
import YouTubePlayer from '@/components/YouTubePlayer'

function YouTubeWidget() {
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
            <OndemandVideoOutlinedIcon />
            <Box>
              <Typography variant="h4" color={dark} fontWeight="500">
                {t('home_intro_video')}
              </Typography>
            </Box>
          </FlexBetween>
        </FlexBetween>

        <Divider />
        <Box
          py="1rem"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <YouTubePlayer videoId="bvgPd14klGg" />
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default YouTubeWidget
