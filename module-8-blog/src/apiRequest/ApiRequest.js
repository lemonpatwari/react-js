import axios from "axios";

const baseUrl = "https://basic-blog.teamrabbil.com/api";

export async function postCategory() {
    let res = await axios.get(`${baseUrl}/post-categories`);

    if (res.status ===200){
        return res.data;
    }
    return [];
}

export async function postLatest() {
    let res = await axios.get(`${baseUrl}/post-newest`);

    if (res.status ===200){
        return res.data;
    }
    return [];
}

export async function postByCategory(id) {
    let res = await axios.get(`${baseUrl}/post-list/${id}`);
    console.log(res,'ww')
    if (res.status ===200){
        return res.data;
    }
    return [];
}