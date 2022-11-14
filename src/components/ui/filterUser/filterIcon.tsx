import filterIcon from "../../../assets/images/filter.png";

   const FilterIcon = <img 
          src={filterIcon} 
          alt="filter" 
          onClick={(event: React.MouseEvent)=>{
                event.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.nextElementSibling?.classList.toggle("hide");
            }}
      />


export default FilterIcon 