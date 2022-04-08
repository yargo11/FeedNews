import { Avatar, Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";

export function PostFooter() {
    return (
        <Box>
            <Flex justifyContent="space-between" p="2">
                <Flex>Reacoes</Flex>
                <Flex>
                    <Link href="#"> 99 comentários </Link>
                    <Link href="#"> 99 compartilhamentos</Link>
                </Flex>
            </Flex>
            <Divider w="95%" m="auto" />
            <Flex
                justifyContent="space-evenly"
                p="2"
                fontWeight="bold"
            >
                <Text>Curtir</Text>
                <Text>Comentar</Text>
                <Text>Compartilhar</Text>
            </Flex>
        </Box>
    )
}