import { Avatar, Box, Button, Center, Flex, Spinner, Text, Textarea, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { Pagination } from "../components/Pagination";
import { Post } from "../components/Posts";
import { usePosts } from "../hooks/usePosts";

export default function Feed() {
  const [page, setPage] = useState(1)
  const { data, isLoading, error, isFetching } = usePosts(page)

  return (
    <Flex
      w="full" m="auto" mt="12" px="12"
      justifyContent="space-between"
    >
      {/* Avatar */}
      <Flex flexDir="column">
        <Avatar size="2xl" name="Yargo Valerio" src="http://github.com/yargo11.png" />
        {/* <Link href="/dashboard">Dashboard</Link> */}
      </Flex>

      {/* Feed */}
      <Flex px="8" w="680px" flexDir="column">
        <Flex flexDir="column" flex="1" >
          <Textarea
            size="md"
            placeholder="No que você esta pensando?"
            _placeholder={{
              color: "gray.700"
            }}
            resize="vertical" />
          <Flex justify="flex-end" my="4">
            <Button colorScheme="pink">Enviar</Button>
          </Flex>
        </Flex>
        <Pagination
          totalCountOfRegisters={50}
          currentPage={page}
          onPageChange={setPage}
        />
        {!isLoading && isFetching && (
          <Center bg="gray.800" borderRadius="lg" my="2" py="2">
            <Spinner />
          </Center>)}
        {isLoading ? (
          <Center w="full">
            <Spinner />
          </Center>
        ) : error ? (
          <Center>
            <Text>Falha ao carregar dados</Text>
          </Center>
        ) : (
          <Flex flexDir="column">
            {data.posts.map(post => {
              return (
                <Post
                  key={post.id}
                  name={post.first_name + " " + post.last_name}
                  message={post.message}
                  image_url={post.image_url}
                />
              )
            })}
          </Flex>
        )}
      </Flex>

      {/* Procurar Pessoas */}
      <Flex>
        <Wrap direction="column">
          <WrapItem>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          </WrapItem>
        </Wrap>
      </Flex>
    </Flex>
  )
}
