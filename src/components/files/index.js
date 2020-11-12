import moment from "moment";
import { API } from "../../api";

const saveFile = async (e) => {
    let name = "";
    let img = new FormData();
    let value = e.files[0];
    let key = e.files[0].name;
    img.set(key, value);
    if (img) {
        name = moment().format("YYYY-MM-DD") + "__" + e.files[0].name;
        console.log(img)
        await API.POST(`/file/${name}`, img, { headers: { 'Content-Type': 'multipart/form-data' } });
    }
    return name;
}

export default saveFile;