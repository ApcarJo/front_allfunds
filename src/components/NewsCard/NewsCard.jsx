const NewsCard = (props) => {
    return (
        <div className="newsCard">
            <h1>{props.data.title.toUpperCase()}</h1>
            <span>{props.data.description}</span>
            <span>{props.data.id}</span>
            <span>{props.data.content}</span>
            <div className="footerCard">
                <span>{props.data.date.toString()}</span>
                <span>{props.data.author}</span>
            </div>
            <span>{props.data.isArchived}</span>
        </div>
    )
}
export default NewsCard;