import Pagination from 'react-bootstrap/Pagination';
import { Container,Row } from 'react-bootstrap'
export const MyPagination=()=> {
  return (
    <>
    <Container className='text-center my-5'>
        <Row >
        <nav aria-label="Page navigation example ">
          <ul className="pagination mx-auto">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </Row>
      </Container> 
    </>
    
    
  );
}

