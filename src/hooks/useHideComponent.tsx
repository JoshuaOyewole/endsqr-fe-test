import {useState} from 'react'
import Style from "../components/form/inputFields/input/_input.module.scss";

const useHideComponent = () => {
    const [visibility, setVisibility] = useState<Boolean>(false);
   
    const FilterIcon = (
        <button 
            type='button' 
            onClick={()=>setVisibility(visibility =>!visibility)}
            className={Style.buttonIcon}>
            SHOW
        </button>
    )
    const visible = visibility ? "block" : "none";

  return [visible, FilterIcon]
}

export default useHideComponent