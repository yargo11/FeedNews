import { createServer, Model, Factory, ActiveModelSerializer, Response } from "miragejs"

import { faker } from '@faker-js/faker';

type TPost = {
    firstName: string
    lastName: string
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer
        },

        models: {
            post: Model.extend<Partial<TPost>>({}),
        },

        factories: {
            post: Factory.extend({
                firstName() { return faker.name.firstName() },
                lastName() { return faker.name.lastName() },
                message() { return faker.lorem.paragraph() },
                image_url() { return faker.image.animals(null, null, true) }
            })
        },

        seeds(server) {
            server.createList("post", 50)
        },

        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/posts", function (schema, request) {

                const { page = 1, per_page = 10 } = request.queryParams

                const total = schema.all("post").length

                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const posts = this.serialize(schema.all("post"))
                    .posts
                    .slice(pageStart, pageEnd)

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { posts }
                )
            })

            // fazer isso para nao conflitar com as rotas de api do proprio next, resetando o namespace
            this.namespace = ""
            this.passthrough()
        }
    })

    return server
}