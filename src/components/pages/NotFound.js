
import { Link } from 'react-router-dom';
import '../../styles/pages/NotFound.scss';

const NotFound = () => {
    return <>

        <section className='wrapperNotFound'>
            <p className='wrapperNotFound__errorText'> NOT FOUND</p>
            <Link to="/" className="wrapperNotFound__returnText">
                Return to homepage
            </Link>
        </section></>

}

export default NotFound;