import { baseURL } from "../../utils/utils";

export function CatalogFilterCheckbox({value,setValue}:{value:boolean, setValue: (s:boolean) => void}) {
  return (
    <button style={{
      width:"18px",
      height:"18px",
      border: "1px solid rgb(255, 255, 255)",
      padding: '2px'
    }}
      onClick={() => setValue(!value)}
    >
      {
          
            
        value && <img src={ baseURL +"/Images/checked.png" }alt="" />
      }
    </button>
  );
}
