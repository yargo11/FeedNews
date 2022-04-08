import { Flex } from "@chakra-ui/react";
import { PostBody } from "./PostBody";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";

type PostProps = {
    name: string,
    message: string,
    image_url?: string
}

export function Post({ name, message, image_url }: PostProps) {
    return (
        <Flex flexDir="column" mb="4" borderRadius="md" bg="gray.600">
            <PostHeader name={name} />
            <PostBody
                message={message}
                image_url={image_url}
            />
            <PostFooter />
        </Flex>
    )
}