import { Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h2">Page not found</Typography>
      <Link href="/" passHref legacyBehavior>
        <Button>Back to homepage</Button>
      </Link>
    </Stack>
  )
}
