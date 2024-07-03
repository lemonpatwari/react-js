export default function Clock({locate ='en-US'}) {
    return <h1>Current Time: {new Date().toLocaleString(locate)}</h1>
}