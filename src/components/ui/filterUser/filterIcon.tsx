import filterIcon from "../../../assets/images/filter.png";

/* Helps to Open and Close the Filter Section when Clicked */
const handleClick = (event: React.MouseEvent) => {
      event.currentTarget.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.nextElementSibling?.classList.toggle("hide");
}

const FilterIcon = <img
      src={filterIcon}
      alt="filter"
      onClick={handleClick}
/>


export default FilterIcon 