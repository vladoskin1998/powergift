import { useEffect, useState, useRef } from "react";
import { BaskerProduct } from "../../type";
import { useBasketStore } from "./basket.store";
import { CardIconDelete } from '../svg/CardIcon'

export const BaskerProductItem = ({ item }: { item: BaskerProduct }) => {
    const {   addProductBasketList,  deleteProductBasketList,} = useBasketStore()

    const [localQuantity, setLocalQuantity] = useState(item?.quantity || 1);

    useEffect(() => {
        setLocalQuantity(item?.quantity || 1);
    }, [item?.quantity]);


    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (localQuantity === item?.quantity) return;
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(() => {
            changeCount(item, localQuantity - (item?.quantity || 1));
        }, 1000);
        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
    }, [localQuantity]);

    const deleteProduct = ({ product_id }: { product_id: number }) => {
        deleteProductBasketList({ product_id })
    }

    const changeCount = (product: BaskerProduct, count: number) => {
        addProductBasketList(product, count)
    }

    const handleInputChange = (value: string, available: number) => {
        let num = Math.max(1, Number(value) || 1);
        num = Math.min(num, available);
        setLocalQuantity(num);
    };

    console.log('art',item);
    

    return <div className="basket-item basket-list-item" >
        <div className="basket-list-item-product">
            <img src={item.images?.[0]} alt="" />
        </div>
        <div className="basket-list-right">
            <div className="basket-list-art">
                Артикул: <div style={{ marginLeft: '5px' }}><b>{item.product_id}</b></div>
                <button
                    className="basket-list-delete"
                    onClick={() =>
                        deleteProduct({
                            product_id: item.product_id,
                        })
                    }
                >
                    <CardIconDelete />
                </button>
            </div>
            <div className="basket-list-text">{item.name}</div>
            <div className="basket-list-foot">
                <div className="basket-list-foot-item">
                    <p className="basket-list-undertitle">ціна</p>
                    <p className="basket-list-price">
                        {item.price} <span>грн</span>
                    </p>
                </div>
                <div className="basket-list-foot-item">
                    <p className="basket-list-undertitle">кількість шт</p>
                    <div className="basket-list-num">
                        <button onClick={() => changeCount(item, -1)}>-</button>
                        <input
                            onFocus={(e) => e.target.select()}
                            className='textinput-product-count'
                            type='number'
                            style={{
                                width: `${Math.max(String(localQuantity).length, 1) + 0.5}ch`
                            }}
                
                            value={localQuantity}
                            onChange={e => handleInputChange(e.target.value, 999)}
                        />
                        <button onClick={() => changeCount(item, 1)}>+</button>
                    </div>
                </div>
                <div className="basket-list-foot-item">
                    <p className="basket-list-undertitle">Всього</p>
                    <p className="basket-list-price">
                        {item?.quantity * (Number(item?.price) || 1)}
                        <span>грн</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}