import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Iran Vital</Text>
          <Text color="gray.300" fontSize="small">
            iranvital@yahoo.com.br
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Iran Vital" src="https://github.com/iranvital.png"/>

    </Flex>
  )
}
