import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: 'gray.900',
                color: 'gray.50',
            }
        }
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto"
    },
})