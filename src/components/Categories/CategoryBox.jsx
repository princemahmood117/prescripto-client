import PropTypes from "prop-types";
import queryString from 'query-string';
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {

  const navigate = useNavigate()
// eslint-disable-next-line no-unused-vars
  const [params,setParams] = useSearchParams()

  const selectedCategory = params.get('category') 


  const handleCategorySelect = () => {

    let currentQuery = {category : label}

    const url = queryString.stringifyUrl({
      url : '/',
      query : currentQuery
    })
    navigate(url);

  }
  return (
    <div onClick={handleCategorySelect}
  className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${selectedCategory === label && 'border-b-pink-400 text-neutral-800'}`}
  
    >
      
      <div title={label}><Icon size={26} /></div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CategoryBox;
