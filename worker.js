import { apis, json } from 'https://pkg.do/apis.do@0.1.4'

export default {
    fetch: () => new Response(JSON.stringify({apis}))
}