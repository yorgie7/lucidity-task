import { v4 as uuidv4 } from 'uuid';
export const handleResponseData = (data = [], preserve_pre_id = false) => {
    let totalQantity = 0;
    let totalStoreValue = 0;
    let outOfStock = 0;
    const categories = [];
    let data_uu_id = []
    data?.forEach(ele => {
        if (ele?.quantity === 0) outOfStock++;
        const parsedVal = parseFloat(ele?.value?.slice(1));
        if (parsedVal) {
            totalStoreValue = totalStoreValue + parseFloat(ele?.value?.slice(1));
        }

        totalQantity = totalQantity + ele?.quantity;
        categories.push(ele.category)
        if (preserve_pre_id) {
            data_uu_id = data;
        } else {
            data_uu_id.push({ ...ele, id: uuidv4() })
        }

    });
    const categorySet = [...new Set(categories)];
    const categoryCount = categorySet?.length;

    return {
        categoryCount,
        categories: categorySet,
        outOfStock, totalStoreValue: `$ ${totalStoreValue}`,
        totalQantity, data: data_uu_id
    }
}