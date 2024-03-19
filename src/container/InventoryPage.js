import React, { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import WidgetCard from '../components/WidgetCard'
import Header from '../components/HeaderComponents/Header'
import { getProductListData } from '../redux/actions';
import ListContainer from '../components/InventoryListing/ListContainer';

function WidgetSection({ inventoryData }) {

    const { categoryCount, totalStoreValue, outOfStock, totalQantity } = inventoryData?.data;

    return (
        <div className='widget-section-wrapper'>
            {!inventoryData?.isLoading ?
                <>
                    <WidgetCard title={"Total Products"} value={totalQantity} id={"total_products"} />
                    <WidgetCard title={"Total Store Value"} value={totalStoreValue} id={"total_store_value"} />
                    <WidgetCard title={"Out of Stock"} value={outOfStock} id={"out_of_stock"} />
                    <WidgetCard title={"No. of Category"} value={categoryCount} id={"num_of_categories"} />
                </> : <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />

            }
        </div>
    )
}

function Title() {
    return (
        <h4 className='title-page'>Inventory Status</h4>
    )
}

function InventoryPage() {
    const dispatch = useDispatch();
    const inventoryData = useSelector(state => state?.inventoryData);
    const isLoading = inventoryData?.isLoading;
    const viewInventoryId = inventoryData?.viewInventoryId;
    // const isError = inventoryData?.error;

    useEffect(() => {
        dispatch(getProductListData())
        // eslint-disable-next-line 
    }, [])

    return (
        <div className='page-wrapper'>
            <Header />
            <Title />

            <WidgetSection inventoryData={inventoryData} />
            <ListContainer inventoryData={inventoryData}
                isLoading={isLoading}
                viewId={viewInventoryId} />
        </div>
    )
}

export default InventoryPage;