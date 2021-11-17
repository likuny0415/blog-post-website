import { Pagination } from "@material-ui/core";
import { ChangeEvent } from "react";

const ArticlePagination = ({ setPage, pageNumber}) => {

    const handlePage = (pageNumber) => {
        setPage(pageNumber);
        window.scroll(0,0)
      }

    return (
        <div>
            <Pagination count={pageNumber} onChange={e => handlePage((e.target as HTMLTextAreaElement).textContent)}/>
        </div>
    )
}

export default ArticlePagination;