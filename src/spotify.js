export const authEndpoint ="https://accounts.spotify.com/authorize";
const redirectUri ="https://spotify-clone-c4ea8.web.app/";
const clientID = "1a0306fbc0eb4542a12811ee5e0e68e8";


const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
        let parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{});
};
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;