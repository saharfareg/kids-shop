import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
export const MyBreadcrumb=({links})=> {
  return (
    <nav aria-label="breadcrumb ">
        <ol className="breadcrumb mt-5 mb-3">
            {links.map(link=>(
                <li className={` ${link.active ? 'active breadcrumb-item' : 'breadcrumb-item'} `}  >
                    <Link key={link.lenght}  to={link.to} className='text-decoration-none'>{link.title}</Link>
                </li>
            ))}
        </ol>
    </nav>
  );
}

