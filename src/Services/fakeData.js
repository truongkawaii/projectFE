import { axiosClient } from "./config.service"


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const categories = [
    {
        name:'Baby Products',
    },
    {
        name:'Bath Preparations',
    },
    {
        name:'Eye Makeup Preparations',
    },
    {
        name:'Fragrance Preparations',
    },
    {
        name:'Manicuring Preparations',
    },
    {
        name:'Makeup Preparations',
    },
]

const brands = [
    {
        name:"Romano"
    },
    {
        name:"Enchenter"
    },
    {
        name:"L’ORÉAL"
    },
    {
        name:"GILLETTE"
    },
    {
        name:"NIVEA"
    },
    {
        name:"ESTÉE LAUDER "
    },
]

const products = [
    {
        name: "Sunscreen Milky Mist SPF 30+",
        description: "Lắc đều trước khi sử dụng. Lấy một lượng kem vừa đủ và thoa đều lên da 20 phút trước khi tiếp xúc với ánh nắng mặt trời.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2019/06/image/1559629654.6756.png",
        count: 10,
        price: 245000,
        branchId:  getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Nước tẩy trang làm sạch giàu khoáng",
        description: "Cuối cùng, hãy trải nghiệm một làn da sạch hữu cơ, thuần chay, mềm mượt.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2020/12/image/1608197565.6896.png",
        count: 20,
        price: 555000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Bộ sản phẩm dưỡng da My Beauty Essentials Set",
        description: "Dựa trên công thức Collagen, kem làm mờ nếp nhăn giúp làn da mượt mà và tươi sáng hơn với hiệu quả rõ ràng và lâu dài.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2020/02/image/1582701484.3319.png",
        count: 5,
        price: 1250000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Bộ sản phẩm chăm sóc cơ thể và tóc - Mud Set",
        description: " Sensual Essence-Intense Volumizing Mud Shampoo:Dầu gội quý giá chiết xuất bùn khoáng cho da đầu và tóc.Cho tóc bồng bềnh.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2020/03/image/1584525479.4894.jpg",
        count: 11,
        price: 5500000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Divine Elixir Rose Capricieuse EDP",
        description: "Nước hoa này tạo ra hương hoa nở rộ và quý phái. Divine Elixir Rose Capricieuse tôn vinh nhan sắc và sự bí ẩn của phái đẹp.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2021/04/image/1618210204.9609.png",
        count: 20,
        price: 1750000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Private Perfumer Rose Elixir Musc EDP",
        description: "ROSE ELIXIR MUSC Eau de Parfum là sự sáng tạo của thương hiệu mới PRIVATE PERFUMER.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2021/04/image/1618210415.7276.png",
        count: 14,
        price: 1150000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Private Perfume Rose Taif & Vanille EDP",
        description: "L'Eau de Parfum ROSE TAÏF&VANILLE lấy cảm hứng từ Taïf - trung tâm của một ốc đảo phía Đông thuộc vùng Mecca của Ả Rập Xê Út.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2021/04/image/1618209140.0737.png",
        count: 11,
        price: 1245000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Vial Private Perfume Rose Taif & Vanille EDP",
        description: " Ngay lập tức trở nên dữ dội và cá tính, mùi hương gây nghiện vừa có đặc tính mạnh mẽ vừa cân bằng nhờ những hương phấn và xạ hương cùng sự nổi bật của hoa hồng Absolute.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2021/04/image/1619421871.2315.png",
        count: 10,
        price: 245000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Lomani Orchidée Sauvage For Women EDP",
        description: "Mạnh mẽ, gợi cảm và khó cưỡng, hương thơm này tạo ra nét mới mẻ vượt thời gian. Một nốt hương tinh tế nhường chỗ cho một người phụ nữ tự tin và hoang dã tiềm tàng trong tất cả chúng ta.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2021/04/image/1618204399.718.png",
        count: 14,
        price: 2500000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },
    {
        name: "Lanvin Modern Princess EDP",
        description: "Nước hoa Lanvin Modern Princess mang ý chí suy nghĩ khác biệt của phụ nữ thời nay đến với các nàng. Luôn quyến rũ, gợi cảm nhưng tầm ẩn trong đó là ý chí tự do, không bị bó buộc bởi bất cứ ai bất cứ cái gì.",
        image: "https://www.thegioinuochoa.com.vn/uploads/products/2021/03/image/1616729646.5992.png",
        count: 10,
        price: 2514000,
        branchId: getRndInteger(1,brands.length),
        categoryId:getRndInteger(1,categories.length) 
    },

]




export const addFakeData = async () => {
    for await (let item of products) {
        axiosClient.post('/items', { ...item })
    }
    // await
}
export const addCategoriesDemo = async()=>{
  for await (let item of categories) {
    axiosClient.post('/categories', { ...item })
}
}
export const addBrandDemo = async()=>{
  for await (let item of brands) {
    axiosClient.post('/branches', { ...item })
}
}
