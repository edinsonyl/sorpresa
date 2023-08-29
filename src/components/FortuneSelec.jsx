import PropTypes from 'prop-types'

const FortuneSelec = ({ data }) => {

  return (
    
    
        <div className='fortune-container'>
            <h3>{data.phrase}</h3>
            <h3>{data.author}</h3>
        </div>
    
  );
};

FortuneSelec.propTypes = {
  data: PropTypes.object
};

export default FortuneSelec;