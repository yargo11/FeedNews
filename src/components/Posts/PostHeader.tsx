import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type PostHeaderProps = {
    name: string,
}

export function PostHeader({ name }: PostHeaderProps) {
    return (
        <Flex align="center" py="1" px="2" flex="1">
            <Avatar size="sm" name={name} />
            <Box ml="4">
                <Text>{name}</Text>
                <Flex>
                    <Text>24h</Text>
                    <Text ml="1">Público</Text>
                </Flex>
            </Box>
        </Flex>
    )
}