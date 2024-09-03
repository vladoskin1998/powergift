import './customer.scss'
import { RowLeft } from "./RowLeft"
import { RowRight } from "./RowRight"


export const Customer = () => {
    return (
        <div className="customer">
            <div className="customer-row">
              
                <RowLeft />
          
                <RowRight />
         
            </div>
            <div className="customer-footer">

            </div>
        </div>
    )
}
