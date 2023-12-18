
import PropTypes from 'prop-types';

const Responsive = ({children}) => {
    return (
        <div className='w-[90%] mx-auto'>
             {children}
        </div>
    );
};

Responsive.propTypes = {
     children:PropTypes.node,
};

export default Responsive;