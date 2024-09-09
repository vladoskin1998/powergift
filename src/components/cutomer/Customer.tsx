import './customer.scss'
import { CustomerFooter } from './CustomerFooter'
import { RowLeft } from "./RowLeft"
import { RowRight } from "./RowRight"


export const Customer = () => {
    return (
        <div className="customer">
            <div className="customer-row">
              
                <RowLeft />
          
                <RowRight />
         
            </div>
            <CustomerFooter/>
        </div>
    )
}
