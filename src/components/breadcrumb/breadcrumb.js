import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
export const MyBreadcrumb=({links})=> {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {links.map(link=>(
                <li className="breadcrumb-item" >
                    <Link key={links.length+1}  to={link.to} className='text-decoration-none'>{link.title}</Link>
                </li>
            ))}
        </ol>
    </nav>
  );
}

