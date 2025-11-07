import { getGourmetData } from "./pages/gourmet";
export const getData = (page)=>{
    console.log("Getting Context Data for page", page);
    let contextData = {};
    switch (page) {
        case "/index.html":
            contextData = {
                mensaje: "Hola Mundo",
            };
            break;
        case "/gourmet.html":
            contextData = getGourmetData();
            break;
        default:
            contextData = { ...contextData }
    }
    return {...contextData, ...getAllPageContext()};
}


function getAllPageContext() {
    return {
        currentYear: new Date().getFullYear().toString(),
        lastBuild: new Date().toLocaleString()
    }
}