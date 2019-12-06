import axios from 'axios'

const uploadImage = async (formData) => {
    const { data } = await axios.get('http://localhost:8080/upload', 
    { params : 
        { 
            type: formData.type 
        } 
    })

    await axios.put(data.url, formData, { 
        headers: {
            'Content-Type': formData.type,
        } 
    })
}

export {
    uploadImage
}