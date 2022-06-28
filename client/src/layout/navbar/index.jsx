import React from 'react'
import { Avatar, Box, Card, Divider, Grid, Stack, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <Card sx={{ height: '60px' }}>
        <Stack sx={{ height: '100%', px: 2 }} direction='row' justifyContent='space-between'>
            <Typography variant='body'>Welcome, user!</Typography>
            <Stack>
              <Avatar/>
            </Stack>
        </Stack>
      </Card>
      <Box sx={{height: '40px'}}></Box>
    </>
  )
}

export default Navbar