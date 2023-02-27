import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import FlexBetween from '@/components/FlexBetween'
import WidgetWrapper from '@/components/WidgetWrapper'
import { setPost } from '@/state'

function TrustNumbersWidget() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)

  const { palette } = useTheme()
  const { main } = palette.neutral
  const primary = palette.primary.main
  const { dark } = palette.neutral
  const { medium } = palette.neutral

  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <GroupOutlinedIcon />
          <Box>
            <Typography variant="h4" color={dark} fontWeight="500">
              Numbers
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Typography variant="h2" color={dark} fontWeight="500">
            15
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Typography variant="h4" color={medium} fontWeight="500">
            Years of experience
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}

      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Typography variant="h2" color={dark} fontWeight="500">
            8
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Typography variant="h4" color={medium} fontWeight="500">
            Partners
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Typography variant="h2" color={dark} fontWeight="500">
            10 000
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap="1rem"
          mb="0.5rem"
        >
          <Typography variant="h4" color={medium} fontWeight="500">
            Hours worked last year
          </Typography>
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default TrustNumbersWidget
