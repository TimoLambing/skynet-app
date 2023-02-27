import {
  Box,
  Divider,
  Typography,
  useTheme,
  TextField,
  Button,
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import FlexBetween from '@/components/FlexBetween'
import WidgetWrapper from '@/components/WidgetWrapper'

function ContactFormWidget() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const { t } = useTranslation()

  const [formStatus, setFormStatus] = useState(null)

  const { palette } = useTheme()
  const { main } = palette.neutral
  const primary = palette.primary.main
  const { dark } = palette.neutral
  const { medium } = palette.neutral

  // Input Change Handling
  const initialValues = {
    email: '',
    subject: '',
    message: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  })

  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('https://formbold.com/s/9Epr6', values)
      setFormStatus('success')
      resetForm()
    } catch (error) {
      setFormStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <WidgetWrapper>
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <ContactSupportOutlinedIcon />
          <Box>
            <Typography variant="h4" fontWeight="500">
              Quick Contact Form
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      <Box
        p="1rem 0"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                id="email"
                type="email"
                name="email"
                size="small"
                placeholder="Email"
                label="Email"
                variant="outlined"
                margin="normal"
                helperText={<ErrorMessage name="email" />}
              />

              <Field
                as={TextField}
                fullWidth
                id="subject"
                type="text"
                name="subject"
                size="small"
                placeholder="Subject"
                label="Subject"
                variant="outlined"
                margin="normal"
                helperText={<ErrorMessage name="subject" />}
              />

              <Field
                as={TextField}
                fullWidth
                multiline
                rows={3}
                id="message"
                name="message"
                size="small"
                placeholder="Type your message"
                label="Message"
                variant="outlined"
                margin="normal"
                helperText={<ErrorMessage name="message" />}
              />

              <Divider />
              <Box pt="1rem">
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  p="1rem 0"
                  disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </Box>
              {formStatus === 'success' && (
                <Box mt="1rem" color={dark} fontSize="0.9rem" fontWeight="400">
                  Thank you! Your message has been received and we will answer
                  in one working day
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </WidgetWrapper>
  )
}

export default ContactFormWidget
