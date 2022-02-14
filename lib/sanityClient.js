import sanityClient from "@sanity/client"

export const client = sanityClient ({
    projectId: "h49srcuz",
    dataset: "production",
    apiVersion: "v1",
    token: "skGXYOOthIBVBPi0972i35yZO4CR5KgUaJLhBbaBGIo6XFG1lwqBrWAcIQKUHFhWEywaEk1qTNg8ERXzlWCsw2T8xiqPzw4Bmn9wVhJ9q03DxY8PQRFpW7RQ3cVDIlT07LRxAr0GfYSpdJSUdZrcbntDQIKx6JEBGvjD7AIPs934R7f3M9cJ",
    useCdn: false,
})