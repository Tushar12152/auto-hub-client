
import { PropTypes } from 'prop-types';
const Title = ({heading}) => {
    return (
        <div className='border-red-700 border-2 w-72  mx-auto p-2 rounded-lg'>
                    <h1 className='text-3xl   text-center rounded-lg  text-red-700 font-mono bg-red-400   p-2  '>{heading}</h1>  
        </div>
    );
};
Title.propTypes={
    heading:PropTypes.node,
}
export default Title;