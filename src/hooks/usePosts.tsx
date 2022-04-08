import { useQuery } from "react-query"
import { api } from "../services/api"

type Posts = {
    id: number,
    first_name: string
    last_name: string
    message: string
    image_url: string
    created_at: string
}

type GetPostsResponse = {
    totalCount: number
    posts: Posts[]
}

export async function getPosts(page: number): Promise<GetPostsResponse> {
    const { data, headers } = await api.get("posts", {
        params: {
            page,
        }
    })

    const totalCount = Number(headers["x-total-count"])

    const posts = data.posts

    return {
        posts,
        totalCount
    }
}

export function usePosts(page: number,
    // options: UseQueryOptions
) {
    return useQuery(["posts", page], () => getPosts(page),
        {
            staleTime: 1000 * 5,
            // ...options
        })
}