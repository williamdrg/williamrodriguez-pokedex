

const Pagination = ({num, setPage}) => {
    
    return (
        <div>
            <ul onClick={() => setPage(num)}>
                <li className="icon page_pokedex">
                    <span className="tooltip">{num}</span>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;