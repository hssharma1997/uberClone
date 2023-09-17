export const getAutoCompletePlaces = async (query) => {
    const url = `https://api.locationiq.com/v1/autocomplete?key=pk.532bf2b8779d9ff5b33373f5f8831eee&q=${query}`
    const res = fetch(url).then(
        res => res.json().then(result => console.log(result))
    )
}