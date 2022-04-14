
const PaginateButtons = (props) => {

    const changePage = (page) => {
        props.pagination.page = page;
        props.refresh();
    }

return (
    <div>
        {props.pagination.prev && (<button onClick={() => changePage(props.pagination.prev)}>{props.pagination.prev}</button>)}
        {props.pagination.page && (<button>{props.pagination.page}</button>)}
        {props.pagination.next && (<button onClick={() => changePage(props.pagination.next)}>{props.pagination.next}</button>)}
    </div>
)

}
export default PaginateButtons;