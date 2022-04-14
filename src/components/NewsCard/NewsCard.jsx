import { convertDate } from "../../utils/convertDate";

const NewsCard = (props) => {
    return (
        <div className="newsCard">
            <span className="titleNew">{props.data.title.toUpperCase()}</span>
            <span className="descriptionNew">{props.data.description}</span>
            <span className="contentNew">{props.data.id}</span>
            <span>{props.data.content}</span>
            <div className="footerCard">
                <span>{convertDate(props.data.date)}</span>
                <span>{props.data.author}</span>
            </div>
            <span>{props.data.isArchived}</span>
        </div>
    )
}
export default NewsCard;