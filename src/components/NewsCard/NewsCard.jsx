import { useEffect } from "react";

const NewsCard = (props) => {
    
    useEffect(() => {
        console.log(props)
    }, []);

    return (
        <div className="newsCard">
            <span>{props.data.title}</span>
            <span>{props.data.description}</span>
            <span>{props.data.author}</span>
            <span>{props.data.id}</span>
            <span>{props.data.date}</span>
            <span>{props.data.content}</span>
            <span>{props.data.isArchived}</span>
        </div>
    )

}

export default NewsCard;