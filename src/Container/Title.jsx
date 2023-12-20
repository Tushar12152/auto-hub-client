
import { PropTypes } from 'prop-types';
const Title = ({heading}) => {
    return (
        <div>
                    <h1 className='text-3xl  text-center  text-red-700 font-mono border-b-2 border-red-700 pb-4 w-72 mx-auto mt-10'>{heading}</h1>  
        </div>
    );
};
Title.propTypes={
    heading:PropTypes.node,
}
export default Title;