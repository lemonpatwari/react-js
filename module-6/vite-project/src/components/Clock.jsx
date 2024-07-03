export default function Clock({ locale = "en-US" }) {
    return <div>Current time: {new Date().toLocaleTimeString(locale)}</div>;
}

// export default Clock();