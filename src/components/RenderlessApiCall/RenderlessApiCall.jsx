import axios from "axios";
import { useEffect } from 'react';

const RenderlessApiCall = (props) => {
    useEffect(() => {
        get();
    }, []);

    const get = async () => {
        try {
            let res = await axios({ 
                method: `${props.method}`,
                url: (`${props.URL}${props.URL2}`),
                data: {...props.body}});
            props.data(res.data);
        } catch (e) {
            console.log(e);
        };
    }
}

export default RenderlessApiCall;