
const PaginateButtons = (props) => {

    const changePage = (page) => {
        props.change({ ...props.pagination, page });
    }

    return (
        <div class="row gap05">
            {props.pagination.prev && (
                <button type="button" className="paginateButton" onClick={() => changePage(props.pagination.prev)}>
                    {props.pagination.prev}
                </button>)}
            {props.pagination.page && (
                <button type="button" className="paginateButton" style={{"backgroundColor":  "rgb(122, 227, 183)"}}>
                    {props.pagination.page}
                </button>)}
            {props.pagination.next && (
                <button type="button" className="paginateButton" onClick={() => changePage(props.pagination.next)}>
                    {props.pagination.next}
                </button>)}
        </div>
    )

}
export default PaginateButtons;