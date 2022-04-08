import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

type PostBodyProps = {
    message: string,
    image_url?: string
}
export function PostBody({ message, image_url }: PostBodyProps) {
    return (
        <Box>
            <Text p="2">{message}</Text>
            {image_url && <Image src={image_url} alt='Dan Abramov' objectFit="cover" />}
        </Box>
    )
}