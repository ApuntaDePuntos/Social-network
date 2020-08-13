// import './lib/profile.css'

export const Profile = () => {
    // Este es el HTML despue ddel <Body> 
    let views = 5;
    
    let divElement = document.createElement('div');
    divElement.innerHTML = views
    return divElement
}